# 现有 UI 规则

## Unified site style (2026-10-08, current)

Inner-page palette matches homepage: header/background #e8e9e1, paper #d9dbce, ink #292d1e, lime #c5f500, footer/preview background #10110f, dark dividers #434637, light dividers #828575. Identity uses Georgia serif 20px (15px mobile); titles Georgia/Times New Roman 400, clamp(64px,9.4vw,160px), line-height 1, letter-spacing -.065em. Body remains Helvetica/Arial/system Chinese sans serif. Subhero padding 100px 8vw 90px, minimum height 460px; dark sections 70px 8vw. Buttons 14px 18px with 3px radius. Games alternate image/text alignment; WA previews use dark panels; contact rows use paper background and lime hover. Data marker colors and original photo colors retained. At 1000px horizontal padding reduces to 6vw; at 768px titles clamp(48px,13vw,96px), padding 16px, stacked content/WA/contact rows. Entrance animation .85s from opacity .3 and translateY 35px; image hover scale1.04/rotate-2deg and button translateY-3px. Reduced-motion disables transitions, animation and hover transforms.

Earlier dated sections below are implementation history and are superseded where they conflict.

## Background water behind static portrait (2026-10-08)

Reviewed user-pasted source-view attachment and previously downloaded active reference script: it contains fluidCursor, procedural noise, cursor-pace perturbation and background scene shaders. Implemented independent native2D canvas home-water.js; no reference code/dependencies imported.17 low-contrast olive contour rings slowly change and pointer movement/touch-down produces bounded2.8s disturbances. Canvas z-index0/pointer-events none, photo z-index2 stays static. Rendering capped about30fps/DPR1.5, paused offscreen/hidden, reduced-motion draws static contours. Six-page bilingual/layout/business regression plus actual frame-change, mouse/touch, static-photo and reduced-motion checks passed. No commit/push/deployment.

## Static homepage portrait (2026-10-08)

User requested static photo. Removed home-depth.js script reference and portrait pointer handlers; disabled hero-portrait entrance/transition/transforms. Original color PNG displayed directly at existing84svh/84% desktop and125vw mobile sizing. Other section animations remain as previously implemented. home-depth.js and supplied depth PNG retained as unused files, not loaded by homepage. Static/no-canvas/no-renderer/no-transform checks and ultrawide/desktop/mobile framing passed. No commit/push/deployment.

## Smaller portrait (2026-10-08)

User requested reduced portrait footprint. Desktop width/height reduced98svh/98% to84svh/84%, bottom-5%; mobile square145vw to125vw, bottom-8vw. Approx14% smaller linear size. Photo/depth/shoulder geometry and mouse effect unchanged. Ultrawide3440x1244, desktop1440x1000, mobile390x844 framing/no-overflow checks passed. No commit/push/deployment.

## Original shoulders restored (2026-10-08)

User requested undoing shoulder modifications. Removed all lateral shoulder spreading and downward jacket vertex extension; XY coordinates now match original photo exactly. Canvas restored100% width, no lateral offset. Supplied photo/depth assets unchanged; existing hero crop, hidden name and depth-based rotation retained. Depth interaction/fallback and ultrawide/desktop/mobile framing checks passed. This supersedes previous shoulder-extension rules. No commit/push/deployment.

## Wider shoulder extension (2026-10-08)

User requested broader shoulders following annotated blue guide. Depth mesh now spreads outer jacket laterally (sourceY>.76, outer absX>.30, up to.75 normalized units per side), with gentler downward extension max.22. Face/head coordinates and original textures unchanged. Entrance animation fill-mode is backwards so its clip-path is released on completion. Canvas160% width/left-30% supplies lateral room; fit uses original image dimensions so widening canvas does not shrink face. Crop/mouse behavior preserved. Ultrawide/desktop/mobile framing and six-page bilingual/layout/business regression passed. Static no-WebGL/touch fallback remains original photo width. No commit/push/deployment.

## Hero framing and shoulder crop (2026-10-08)

Removed visible background name (H1 retained screen-reader-only). Desktop portrait now width98svh/height98% with bottom-10%; mobile145vw square with bottom-10vw. Hero clips overflow; mobile metadata moves to220px top to avoid face overlap. Color/depth assets unchanged. Depth renderer extends only outer jacket vertices downward below the crop (side influence beyond normalized absX.65, sourceY>.76, max.22 units); head/face geometry and UVs unchanged. This is a requested shoulder extension, not a head-motion change. Static fallback uses original source framing and cannot add missing jacket material. Ultrawide3440x1244, desktop1440x1000, mobile390x844 framing/screenshots checked; full bilingual/layout/business regression passed. No commit/push/deployment.

## Depth-based rotation (2026-10-08)

Supersedes flat portrait motion on fine hover pointers when WebGL is available.128x128 mesh samples grayscale depth; depth=(value-.5)*.5 in normalized2-unit photo coordinates. Temporary1px low-pass at129x129 sampling suppresses detail noise; original depth/color files remain intact. Surface rigid yaw +/-0.04rad (2.29deg), pitch +/-0.035rad (2.01deg), positive screen-Y => positive pitch (top negative). Orthographic projection preserves neutral registration;180ms easing has no spring overshoot. No Z roll or arbitrary texture warp. Original color/transparent alpha preserved; reduced-motion/touch show unchanged image.

## Reference source findings and subtle motion (2026-10-08)

Decoded user-saved view-source HTML; active interaction script is https://lando.itsoffbrand.io/dev-js/lando-by-OFF+BRAND.05.js (other development script references are commented out). Inspected public script in temp directory only. W9 uses128x128 plane geometry, head depth/alpha/normal textures, displacementScale0.25, movement intensity0.075rad and ease0.025. Mouse normalized Y is positive at top; head rotation X is negative normalized Y times intensity/reveal and scroll factors. This differs from an ordinary flat PNG. No reference assets or script copied into project.

Homepage adaptation now reduces yaw to +/-1.2deg, pitch to +/-1deg (top negative), uses exponential180ms easing without spring overshoot. Portrait pixel geometry/source unchanged; perspective remains1800px. Four edge signs/bounds, recenter and reduced-motion passed, along with full six-page bilingual five-width/business regression. Supersedes prior +/-6/5deg and spring settings. No commit/push/deployment.

## Four-direction perspective rotation (2026-10-08)

Latest reference screenshots supersede the prior Z-axis interpretation: whole-photo yaw follows horizontal pointer (+/-6deg); pitch follows vertical pointer (+/-5deg, inverted Y). CSS rotateY then rotateX, center50%50%, perspective1800px. No Z roll, texture deformation, translation or scaling. Damped spring/recenter and reduced-motion remain. Single photo is a rigid plane; it cannot reveal a real face side view. Four edge-position checks and screenshots, reset/reduced-motion passed; full six-page bilingual five-width and business regression passed. No commit/push/deployment.

## Corrected Z-axis rotation (2026-10-08)

User clarified: photo stays unchanged and rotates slightly as one layer about its center Z axis. Removed WebGL mesh renderer and its script reference. Actual effect is rotateZ only, center50%/50%, maximum target +/-2deg, spring stiffness110/damping19. No translation, scale, X/Y rotation or image deformation. Original PNG unchanged. Pointer-leave/blur recenters; touch remains static and reduced-motion disables rotation. Matrix checks confirmed unit scale, zero translation, rotation and recenter; six-page bilingual five-width layout/business regression passed. This section supersedes previous mesh/deformation descriptions. No commit, push or deployment.

## Portrait mesh motion (2026-10-08)

Supersedes rigid portrait transforms. Analytic elliptical head depth0.30, shoulder anchor from normalized y=-.95 to-.15. Pointer yaw input0.24rad and pitch0.16rad produce depth-dependent displacement; head width compression limited2.5%. Damped spring stiffness110, damping19, substeps at most8ms. Portrait layout/palette unchanged; source pixels remain original. Reduced-motion shows static image.

## Cutout portrait and mouse motion (2026-10-08)

Hero/masthead use #e8e9e1 warm gray with olive text; background name first part #62713e. Transparent portrait has no rectangular background/filter: width min(76vw,1000px), height86%, aligned to bottom. At768px width110%, height68%, bottom60px; object-fit contain avoids cropping the supplied photo. Fine pointer motion bounds: horizontal30px, vertical18px, pitch4deg, yaw6deg, roll1.5deg. Frame-rate independent exponential smoothing has110ms time constant; pointer leave/window blur returns target to zero. Reduced-motion suppresses transforms and animation, touch does not run mouse following.

## Recording layout revision (2026-10-08)

Homepage uses #292d1e olive, #d9dbce light field, #c5f500 lime and #10110f collection/footer. Layout deliberately adopts centered large display typography and manifesto per the latest reference request, superseding earlier left-only Swiss rules on homepage. Hero 100svh/min760px; portrait 51vw/max850px, 75% hero height. Image wall 1100px tall; five staggered images. Collection four columns, alternating 70px offsets; at 768px two columns with 35px offsets and 780px image wall. Serif highlights contrast with bold sans; images preserve original colors. Entrance 1.2/1.5s, reveals .9s, bounded image-wall and hero parallax; reduced-motion disabled transforms/animations. CSS is authoritative.

## Homepage preview and motion (2026-10-08)

Homepage palette: #f2f3eb paper, #252b1d olive ink, #46552b secondary olive, #d2ff00 lime. Georgia/Times regular and italic contrast with shared sans-serif bold. 12 columns remain; homepage max width 1600px; 1000px and 768px responsive overrides. Images retain native color.

Hero text entrance 1.1s, notes 1.2s with .15s delay, portrait 1.4s; ticker 16s linear infinite. Sections enter over .8s from 65px below. Portrait scroll offset is clamped to 55px; desktop pointer tilt spans 8/10 degrees. Counters animate for 1.1s and finish at 02/08/01. Directory hover/focus fills lime and exposes original game/tool images; touch devices reveal these on scroll. Reduced-motion disables animations, transitions and image transforms. Without JS, content remains visible.

## 原色与数据层级更新（2026-10-05）

图片均按源文件原色显示，无 grayscale；DB.jpg 本身仍为黑白照片。favicon 使用原蓝色骷髅 IMG_0036.png。新增 --data-blue:#175CFF、--data-green:#008A46、--data-purple:#7435DB，仅用于 7×7px 方形分类标记，文字保持黑色，且有文字标签辅助识别。核心数字 clamp(48px,5.5vw,80px)，700、行高 1、字距 -.06em、tabular-nums；手机 44px，子页侧栏 46px。首页三个数据模块各占 4 栏；分区标题 24px、手机 21px；游戏标题 26–36px、手机 25px；正文仍 12–13px。主体标题保持既有超大字号。

## 当前全站设计规则（2026-10-05）

本节与下方「首页新规则」共同描述现有共享 style.css，原有灰粉色设计为历史，不再用于现有页面。

全站继承已确认首页的 #f4f1e8 米白、#000 黑、#DA291C 强调红、12 栏网格、400/700 字重、大标题/小正文、左对齐、细线分隔和大留白。字体栈增加 Noto Sans SC/Microsoft YaHei 作为中文无衬线回退，不加载网络字体。游戏封面与 WA 截图按原色显示，源文件保留。

子页 subhero 标题 clamp(68px,10vw,150px)，行高 .95，字距 -.06em；上/下间距 48/70px。中文标题行高 1、字距 -.045em。内容区顶线 1px、padding 24px 0 52px；说明占 5–10 栏。ABOUT 照片 1–3、正文 5–10；游戏封面 4–6、正文 8–12；联系标签 1–3、账号 5–12；WA 名称 1–3、截图 5–7、操作 9–12。

768px 下标题全宽 18vw、说明 7–12；ABOUT 照片 1–4、正文 6–12；游戏标签全宽、图片 1–4、说明 6–12；WA 标题全宽、图片 1–5、操作 7–12。所有版本维持 12 栏，不增加居中或两端对齐。

语言控件：中文 / EN 两个原生按钮，当前项以红色及底线标记，aria-pressed 表示选中状态。操作按钮平涂黑底米白字、1px 边框，hover 红底；无阴影、渐变或动画。WA 展开内容 11px/1.5，允许任意换行、最大高 260px 内滚动。反馈区域 aria-live=polite。

依据 `style.css` 全文及六个 HTML 的内联样式提取，2026-10-04。本文描述当前实现，不定义新设计；代码冲突时以代码为准。没有 CSS 变量、设计 token 层或统一组件库。

## 色彩

| 值 | 来源 / 使用 |
| --- | --- |
| `#eeeded` | 六页 body 内联背景 |
| `gray`（#808080） | a、移动 MENU、页脚 font |
| `black`（#000000） | a:hover、h1 a、当前导航 font、fox1、游戏标题和部分边框 |
| `#c3b1b0` | h3 默认 |
| `#a6999a` | p、dt |
| `#916767` | h2、dd |
| `#a1a1a1` | button 背景 |
| `white`（#ffffff） | button 文字 |
| `rgba(88, 88, 88, 0.89)` | button:hover 背景 |
| `aquamarine` | `.description` 无效 border 声明中的颜色；不形成有效边框 |

整体为浅灰底、黑灰导航、低饱和灰粉正文、大留白与图片主导的个人作品站。图片自带深色、蓝色、紫色等色彩，不应视为全站 CSS 配色。

## 字体与文字

- `h1`：`'Courier New', Courier, monospace`，2.5em，字距 0.1vw。
- `.navbar`：同一等宽字体，16px；导航 uppercase。
- `h3`：同一等宽字体，1.2em；`.fox1` 覆盖为 20px、黑色、居中。
- `dt`：等宽字体，1em；`dd`：Arial, Helvetica, sans-serif，16px。
- `.description`：Arial, Helvetica, sans-serif；其中 h2 uppercase，底部 padding 5px。
- `.cd`：1px 字号；游戏标题 `#box1-2` 等宽字体、1em、黑色、居中、高 1em。
- 按钮字号 13px、字重 600；没有显式 button 字体族。
- 没有全局 body 字体或字号声明，未被局部规则覆盖的文本沿用浏览器默认/继承行为。p 底部 padding 10px。
- index/ABOUT 的 mebold @font-face 源文件缺失且未被实际字体规则使用，不能称为站点当前字体。

## 布局、间距与图片

全局 `*` 将 margin/padding 清零；没有 box-sizing 重置。主要容器 `max-width:1200px`、左右 auto 居中，默认 content-box 下横向 padding 另算。

| 选择器 | 当前规则 |
| --- | --- |
| `.header` | flex，align-items:center；左右 padding 5%，margin-top 5vw |
| `.logo` | max-width 50%，relative，left 0%，margin-left 0 |
| `.navbar` / `.navbutton` | navbar relative/right 0%；navbutton float:left、padding-left 40px；每个 #button 另有 padding-left 40px |
| `.bgimage` | flex，左右 padding 5%，上下 margin 30px；主图 max-width 100%、height auto、居中 |
| `.block-ui` | flex，padding 0 5%，上下 margin 30px |
| `.description` | width 100%，左 padding 2vw，margin-top 2% |
| `.pimage` | width 30%、height 20%；margin 2% 5% 2% 0%；圆角 6.18% |
| `.block-ui2` | padding 0 5%，上下 margin 30px |
| `.block-ui3` | flex，space-between；padding 0 10vw；margin-top 50px、bottom 30px |
| `.box` | width 25vw、max-width 10000px；flex column，0px solid 黑边 |
| `#box1-1` | max-width 90%、max-height 100%、height auto；margin 5%、圆角 3% |
| `#box1-2` | margin 0 5%，0px solid 边框 |
| `.cv` | flex、align-items:center；左右 padding 5%、margin-top 5vw |
| `.bottomline` | flex、space-between、align-items:center；左右 padding 5%；margin-top 20vh、bottom 4vw |
| `.email` | width 2em |
| `.fox` | width 100%、height auto；自身 max-width 声明无效，外层 block-ui 有有效宽度限制 |
| `.fox1` | 下边框 solid 2px；margin-bottom 20px |
| `.fox2` | width 100%，flex、space-between；margin-bottom 10px |
| `.fox2-1` | width 48%、margin 1%；右边框 solid、居中、line-height 1.3em |
| `.fox2-2` | width 48%、margin 1%、flex |
| `.img1` | width 100%、height auto；max-width 177px、max-height 62px；flex、左右 auto、圆角 4px |
| `.cd` | max-width 100%、word-wrap break-word、white-space pre-wrap、默认 display none |

## 交互与动画

- a:hover 从 gray 改为 black，默认无下划线。
- `.box:hover` 为 `filter:brightness(90%)`。
- button：height 30px、padding 0 20px、圆角 4px、无 border、outline 0、pointer。
- 按钮默认阴影：`0px 3px 1px -2px rgb(0 0 0 / 20%)`、`0px 2px 2px 0px rgb(0 0 0 / 14%)`、`0px 1px 5px 0px rgb(0 0 0 / 12%)`。
- hover 阴影：`0px 2px 4px -1px rgb(0 0 0 / 20%)`、`0px 4px 5px 0px rgb(0 0 0 / 14%)`、`0px 1px 10px 0px rgb(0 0 0 / 12%)`。
- `.cd` 由 `#read:checked + .cd` 改为 display block。
- 唯一 transition 出现在移动规则：navbutton `all 0.4s ease-out`，#button:hover `ease-in-out 0.4s` 并字距 2px。没有 keyframes。菜单切换 display none/flex，不能据此保证存在平滑展开动画。

## 响应式：唯一断点 `only screen and (max-width:768px)`

- header 改 column-reverse，margin-top 2vw；logo 居中、max-width 75%、左右 margin 10%、top 5%。
- navbar 居中、flex column-reverse；MENU label 从隐藏变为 block、32px、gray；checkbox 仍隐藏。
- navbutton 默认隐藏、字体 24px、padding 10px 0；#button padding 0、margin-bottom 10px。
- `#toggle:checked + .navbutton` 显示 flex column；hr 从隐藏变为 inline、width 90vw。
- block-ui 改 column、margin-top 5%；pimage margin 10%、width auto（原 height 20% 未被覆盖）。
- description padding 0、width 100%；h2 padding-top 20px。
- block-ui2 居中、margin-top 100px。
- fox2 改 column；fox2-1 margin 0 auto、去边框；fox2-2 margin 0 auto、下边框 dashed 1px。两列的 width 48% 仍保留。
- 没有针对 GAMES 的移动堆叠规则，也没有新增平板或超宽屏断点。

## 已有无效声明

`.description` 的 `border:aquamarine 2px sold` 拼写无效；`.fox` 的 `max-width:1200px；` 使用全角分号；fox2 两列 `max-height:auto` 无效；`#toggle:checked hr` 既不匹配 checkbox 的后续兄弟内容，`display:solid` 也无效。这些只记录，不在本阶段纠正。

## 首页新规则（2026-10-05，试稿）

上文为五个旧子页面及原首页基线；以下来自当前 index.html 内嵌 CSS，尚未推广全站。

- 颜色变量：--paper #f4f1e8、--ink #000、--red #DA291C；无阴影、渐变或纹理。头像使用现有黑白照片，并以 grayscale(1) 保证去色；favicon 为红色方形。
- 字体：Helvetica、Helvetica Neue、Arial、sans-serif；常规 400、粗体 700。全局正文 13px/1.5、目录说明 12px；micro 11px/1.4、字距 .06em、uppercase；全部左对齐。
- 全局 border-box，margin/padding 清零。page max-width 1600px，左右居中仅指容器，文字不居中；padding 28px 48px 24px。
- grid 一律 repeat(12,minmax(0,1fr))，默认间距 24px。姓名占 1–8 栏，右侧注释占 9–12；肖像占 5–6，简介占 8–11；目录编号 1，标题 3–7，说明 8–11，箭头 12。
- h1 clamp(96px,14.5vw,220px)，700，line-height .79，字距 -.075em，两行姓名及红色句点。目录标题 clamp(32px,4.1vw,62px)，700，line-height 1，字距 -.045em。简介 lead 26px/1.15、700。
- 黑色 1px 分隔线。hero 上下 padding 38/54px；intro 22px 0 68px；directory 标题区底部 40px；entry 19px 0 26px；footer 顶部 margin 60px、padding 16px。红色短线 48×6px。
- 1000px：gutter 16px，页面左右 28px，h1 15vw，肖像 5–7 栏、简介 9–12，lead 23px。
- 768px：仍为 12 栏，gutter 10px，页面 20px；姓名全宽、25vw；说明和 metadata 分置后续行两侧；肖像 1–4、简介 7–12；目录标题 36px、说明另起行；details/summary 菜单可操作且默认展开。
- 380px：页面左右 16px，简介移至 6–12 栏、lead 21px、micro 10px。
- hover 使用强调红；focus-visible 红色 2px outline/5px offset。无动画与 transition。

验证：1440、1000、769、768、390、320px 无横向溢出；1440 和 390px 全页截图已目视检查。字体在本机可能回退至 Arial，未引入网络字体。


## iOS 箭头兼容修复（2026-10-05）

用户确认刷新已解决旧 CSS 显示，本轮不修改缓存策略。六页链接及回到顶部箭头由 Unicode 字符改为内联 SVG，避免 iOS 将箭头替换为 emoji。viewBox 0 0 24 24，fill none、stroke currentColor、stroke-width 1.5；正文图标 1em，首页目录箭头 24px，向上箭头旋转 -45deg。图标 aria-hidden/focusable=false，由链接文字提供可访问名称。

中英六页五种宽度布局、语言记忆、菜单、八份 WA 复制与失败反馈、PDF 回归通过；手机截图检查通过。未进行真实 iOS 设备测试，不能将本地 Chrome 结果记为 iOS 实测。CNAME、资源文件和业务脚本不变，未提交或部署。

## Helmet scan (2026-10-08)

Homepage now loads home-helmet.js: original Canvas 2D hemisphere wireframe with visor opening and downward scanning band. Reference uses a separate 3D helmet model; this is a procedural approximation. Static portrait and background water retained. No external dependency.

26 by 24 mesh divisions; olive base opacity 0.13, scan band opacity 0.65; 6.5-second cycle. Pointer entry or press replays. 30fps, DPR cap 1.5, offscreen/hidden pause, reduced-motion overlay hidden.

Verified scan progression/replay, static image, pointer-event pass-through and reduced-motion behavior in Chrome. Six-page bilingual layout/image/navigation/menu/eight exact WA clipboard/feedback/PDF checks passed, no page errors. Desktop/mobile/ultrawide framing passed; desktop screenshot inspected. Real iOS and user visual acceptance pending. CNAME/shared CSS/other pages/business scripts unchanged. No commit/push/deployment.

## Gray glasses scan (2026-10-08, current)

Supersedes helmet scan: removed home-helmet.js and its hemisphere geometry. Homepage loads home-glasses.js, with two rounded lens wireframes, bridge and temples aligned to the eyes in original photo coordinates. Gray RGB 115/115/115 base opacity 0.38 and RGB 155/155/155 active opacity 0.85. A narrow vertical band sweeps horizontally from left to right; 6.5-second cycle, pointer entry/press replay. Static portrait, original image, background water and existing page layout retained.

Canvas overlay class glasses-scan, pointer-events none; 30fps/DPR cap 1.5, offscreen/hidden pause and reduced-motion hiding retained. Homepage asset query version changed to 20261008-glasses.

Validation: JS syntax and scan progression/replay/static portrait/click-through/reduced-motion passed. Desktop screenshot inspected. Ultrawide/desktop/mobile framing and six-page bilingual five-width checks (including 769/768px), language persistence/navigation/menu/eight exact WA clipboard/feedback/PDF passed; no page errors. Real iOS not tested. No commit/push/deployment. CNAME/shared CSS/other pages/business scripts unchanged.

## Rectangular scanning visor (2026-10-08, current)

User clarified Daft Punk-inspired continuous horizontal rectangular visor. Replaced separate lenses, bridge and temples in home-glasses.js with a single rectangle spanning source X 0.255-0.755 and Y 0.433-0.548. Fine gray grid inside; scanning band travels left to right. Existing gray colors, timing, replay, rendering limits and accessibility behavior retained. Asset version 20261008-visor. This supersedes the separate-glasses geometry above. Static photo, water and page layout unchanged.

JS syntax, scan progression/replay/static image/input pass-through/reduced-motion checks passed. Desktop screenshot inspected. Six pages/two languages/five widths including 769/768px, language persistence/menu/navigation/eight exact WA copies/feedback/PDF checks passed; no page errors. Real iOS not tested. CNAME and business code unchanged; no commit/push/deployment.

## Perspective rectangular visor (2026-10-08, current)

User requested volume rather than a flat rectangle. home-glasses.js now projects a shallow cuboid: local width 0.50, height 0.115, depth 0.11 of portrait square; fixed yaw -0.28 radians and pitch 0.20, perspective distance 1.6. Front/back frames and connecting edges show thickness, with grid lines across front and side surfaces. Rear frame alpha multiplier 0.55 and grid 0.65; gray colors, horizontal scan, replay and performance/accessibility behavior retained. Portrait remains static. Asset version 20261008-visor3d. Native Canvas 2D renders projected 3D coordinates; no framework or model dependency.

Syntax, scan progression/replay/static portrait/input pass-through/reduced-motion verified. Desktop screenshot inspected. Six-page bilingual five-width (including 769/768px) layout/images, navigation/language/menu/eight exact WA clipboard/feedback/PDF regression passed; no page errors. Real iOS not tested. CNAME and unrelated business files unchanged; no commit/push/deployment.

## Scan overlay removed (2026-10-08, current)

User rejected the scanning visor and requested removal. Deleted home-glasses.js, removed homepage script reference and glasses-scan CSS. No helmet, glasses or visor overlay remains. Static original portrait and home-water.js background retained; homepage asset version 20261008-static-water. Prior scan sections describe superseded experiments.

Six-page bilingual five-width layout/image/navigation/language/menu/eight exact WA clipboard/feedback/PDF regression passed; no page errors. Water animation, mouse/touch response, static portrait, input pass-through and reduced-motion checks passed. No real iOS test. CNAME/shared CSS/business scripts unchanged. No commit/push/deployment.

## Ultrawide inner-page sizing (2026-10-08, current)

User requested half-screen proportions on 21:9 displays, excluding homepage. At min-width 1720px, site-theme.css caps the five inner-page section content grids to 1440px using symmetric horizontal padding calc((100% - 1440px)/2). Header/footer content is capped to 1664px with minimum 28px side padding. Full-bleed section backgrounds remain; images and columns stop widening beyond the target width. Existing typography caps, spacing, mobile rules and functionality retained. Five inner-page asset versions updated to 20261008-ultrawide. Homepage files unchanged this round.

Measured ABOUT/CV/GAMES/CONTACT/TIMES content and representative image/row widths at 1720/2560/3440px: stable sizes and no horizontal overflow. 3440x1244 TIMES screenshot inspected. Six-page bilingual five-width regression including 769/768px, navigation/language/menu/eight exact WA clipboard/feedback/PDF passed; no page errors. Real iOS not tested. CNAME and business scripts unchanged. No commit/push/deployment.
