/* Original color/alpha mapped onto a surface sampled from the supplied depth PNG. */
window.createDepthPortrait = async image => {
  const depth = new Image();
  depth.src = 'source/dabin-depth.png';
  try {
    await Promise.all([image.decode(), depth.decode()]);
    if (image.naturalWidth !== depth.naturalWidth || image.naturalHeight !== depth.naturalHeight) return null;
    const canvas = document.createElement('canvas');
    canvas.className = 'depth-portrait';
    canvas.setAttribute('aria-hidden', 'true');
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: true });
    if (!gl) return null;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw Error('Depth shader unavailable');
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, `
      attribute vec3 surface;
      attribute vec2 texcoord;
      uniform vec2 angle;
      uniform vec2 fit;
      varying vec2 uv;
      void main() {
        uv = texcoord;
        vec3 p = surface;
        float cy = cos(angle.x), sy = sin(angle.x);
        float cx = cos(angle.y), sx = sin(angle.y);
        p = vec3(cy*p.x + sy*p.z, p.y, -sy*p.x + cy*p.z);
        p = vec3(p.x, cx*p.y - sx*p.z, sx*p.y + cx*p.z);
        // Orthographic projection keeps neutral image registration exact.
        gl_Position = vec4(p.xy*fit + vec2(0.,fit.y-1.), -p.z*.5, 1.);
      }
    `));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform sampler2D photo;
      varying vec2 uv;
      void main() {
        vec4 color = texture2D(photo, uv);
        if (color.a < .01) discard;
        gl_FragColor = color;
      }
    `));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    gl.useProgram(program);
    const steps = 128, size = steps + 1;
    const sampler = document.createElement('canvas');
    sampler.width = sampler.height = size;
    const ctx = sampler.getContext('2d', { willReadFrequently: true });
    // Suppress fine hair/clothing texture in the depth signal, not in the color photo.
    ctx.filter = 'blur(1px)';
    ctx.drawImage(depth, 0, 0, size, size);
    const pixels = ctx.getImageData(0, 0, size, size).data;
    const vertices = [], indices = [];
    for (let y = 0; y <= steps; y++) for (let x = 0; x <= steps; x++) {
      const offset = (y * size + x) * 4;
      const value = (pixels[offset] + pixels[offset+1] + pixels[offset+2]) / (3*255);
      const px = x/steps*2-1;
      const py = 1-y/steps*2;
      vertices.push(px, py, (value-.5)*.5, x/steps, 1-y/steps);
      if (x < steps && y < steps) {
        const a = y*size+x;
        indices.push(a,a+1,a+size,a+size,a+1,a+size+1);
      }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    for (const [name, length, offset] of [['surface',3,0],['texcoord',2,12]]) {
      const location = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location,length,gl.FLOAT,false,20,offset);
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    const angle = gl.getUniformLocation(program,'angle'), fit = gl.getUniformLocation(program,'fit');
    let lastX = 0, lastY = 0, active = true;
    const render = (x=lastX,y=lastY) => {
      if (!active) return;
      lastX=x; lastY=y;
      const width=canvas.clientWidth, height=canvas.clientHeight;
      const ratio=Math.min(devicePixelRatio||1,2);
      const w=Math.round(width*ratio),h=Math.round(height*ratio);
      if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
      gl.viewport(0,0,w,h);gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      const edge=Math.min(image.clientWidth,image.clientHeight);
      gl.uniform2f(fit,edge/width,edge/height);
      gl.uniform2f(angle,x*.04,y*.035);
      gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);
      canvas.dataset.yaw=String(x*.04);canvas.dataset.pitch=String(y*.035);
    };
    image.parentElement.appendChild(canvas);
    render();
    image.parentElement.classList.add('depth-ready');
    const observer=new ResizeObserver(()=>render());observer.observe(image);
    canvas.addEventListener('webglcontextlost',event=>{
      event.preventDefault();active=false;observer.disconnect();
      image.parentElement.classList.remove('depth-ready');canvas.remove();
    });
    return { render };
  } catch (_) { return null; }
};
