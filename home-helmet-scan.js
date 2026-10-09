/* Complete rounded helmet wireframe, scanned vertically over the original static portrait. */
(() => {
 const figure=document.querySelector('.hero-portrait');if(!figure)return;
 const canvas=document.createElement('canvas');canvas.className='helmet-wire-scan';canvas.setAttribute('aria-hidden','true');
 const ctx=canvas.getContext('2d');if(!ctx)return;
 const image=new Image();image.src='source/helmet-wireframe.svg?v=20261009-no-earcups';
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let w=0,h=0,edge=0,left=0,top=0,frame=0,last=0,visible=true,start=performance.now();
 const render=time=>{
  ctx.clearRect(0,0,w,h);if(!image.complete||!image.naturalWidth)return;
  const progress=preference.matches?1:Math.min(1,((time-start)%3200)/2300);
  const y=top+(-.07+progress*.95)*edge;
  if(!preference.matches&&progress<1){ctx.save();ctx.beginPath();ctx.rect(0,y-edge*.025,w,edge*.045);ctx.clip();ctx.globalAlpha=1;ctx.drawImage(image,left-.172*edge,top-.1648*edge,edge*1.344,edge*1.344);ctx.restore();}
  ctx.globalAlpha=1;canvas.dataset.progress=progress.toFixed(3);
 };
 const tick=time=>{frame=0;if(!visible||document.hidden||preference.matches)return;if(time-last>=33){render(time);last=time;}frame=requestAnimationFrame(tick)};
 const resume=()=>{if(!frame&&visible&&!document.hidden&&!preference.matches)frame=requestAnimationFrame(tick)};
 const resize=()=>{w=figure.clientWidth*1.2;h=figure.clientHeight*1.2;edge=Math.min(figure.clientWidth,figure.clientHeight);left=(w-edge)/2;top=h*11/12-edge;const ratio=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);render(performance.now());resume()};
 image.onload=()=>{figure.append(canvas);resize()};
 new ResizeObserver(resize).observe(figure);
 const hero=figure.closest('.hero');hero.addEventListener('pointerdown',()=>{start=performance.now();render(start);resume()},{passive:true});
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible&&frame){cancelAnimationFrame(frame);frame=0;}else resume()}).observe(hero);
 const sync=()=>{if(frame)cancelAnimationFrame(frame);frame=0;render(performance.now());resume()};preference.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
})();
