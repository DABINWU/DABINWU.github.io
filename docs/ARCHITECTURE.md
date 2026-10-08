# 当前架构

## Unified site style (2026-10-08, current)

ABOUT/CV/GAMES/CONTACT/TIMES now load site-theme.css and deferred site-theme.js after shared style.css. Each uses body.site-theme. Homepage retains its approved home-preview.css/js and home-water.js. No framework or dependency added. ABOUT reuses the supplied original-color source/dabin-portrait.png; old DB.jpg preserved. Navigation, language.js, 1.js, PDF, external targets and eight WA payloads unchanged. CONTACT dl now has contact-list class for section padding. Native IntersectionObserver provides progressive entrance animation; content remains visible without JS.

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

## Supplied depth portrait (2026-10-08)

User supplied matching1254x1254 RGB depth PNG; copied byte-for-byte as source/dabin-depth.png. New home-depth.js precedes home-preview.js only on homepage. Native WebGL builds128x128 subdivisions, samples supplied grayscale into Z coordinates, maps original RGBA color/alpha and rotates the resulting surface rigidly. This replaces the prior flat-photo-only effect when initialization succeeds. No analytic invented face mesh or third-party framework. Original img remains accessible fallback for missing/decode-failed depth, unavailable/lost WebGL, touch and reduced-motion.

## Reference source findings and subtle motion (2026-10-08)

Decoded user-saved view-source HTML; active interaction script is https://lando.itsoffbrand.io/dev-js/lando-by-OFF+BRAND.05.js (other development script references are commented out). Inspected public script in temp directory only. W9 uses128x128 plane geometry, head depth/alpha/normal textures, displacementScale0.25, movement intensity0.075rad and ease0.025. Mouse normalized Y is positive at top; head rotation X is negative normalized Y times intensity/reveal and scroll factors. This differs from an ordinary flat PNG. No reference assets or script copied into project.

Homepage adaptation now reduces yaw to +/-1.2deg, pitch to +/-1deg (top negative), uses exponential180ms easing without spring overshoot. Portrait pixel geometry/source unchanged; perspective remains1800px. Four edge signs/bounds, recenter and reduced-motion passed, along with full six-page bilingual five-width/business regression. Supersedes prior +/-6/5deg and spring settings. No commit/push/deployment.

## Four-direction perspective rotation (2026-10-08)

Latest reference screenshots supersede the prior Z-axis interpretation: whole-photo yaw follows horizontal pointer (+/-6deg); pitch follows vertical pointer (+/-5deg, inverted Y). CSS rotateY then rotateX, center50%50%, perspective1800px. No Z roll, texture deformation, translation or scaling. Damped spring/recenter and reduced-motion remain. Single photo is a rigid plane; it cannot reveal a real face side view. Four edge-position checks and screenshots, reset/reduced-motion passed; full six-page bilingual five-width and business regression passed. No commit/push/deployment.

## Corrected Z-axis rotation (2026-10-08)

User clarified: photo stays unchanged and rotates slightly as one layer about its center Z axis. Removed WebGL mesh renderer and its script reference. Actual effect is rotateZ only, center50%/50%, maximum target +/-2deg, spring stiffness110/damping19. No translation, scale, X/Y rotation or image deformation. Original PNG unchanged. Pointer-leave/blur recenters; touch remains static and reduced-motion disables rotation. Matrix checks confirmed unit scale, zero translation, rotation and recenter; six-page bilingual five-width layout/business regression passed. This section supersedes previous mesh/deformation descriptions. No commit, push or deployment.

## Portrait mesh revision (2026-10-08)

Homepage adds home-portrait.js before home-preview.js. Optional native WebGL draws original PNG on a48x48 triangle mesh, using an analytic head-depth approximation and anchored shoulders. This is shallow image deformation, not a reconstructed3D face. Image remains the accessible fallback if WebGL fails, context is lost, or reduced-motion is active; touch uses the original image. No external library.

## User portrait installed (2026-10-08)

Homepage hero, intro thumbnail and image wall now use source/dabin-portrait.png: exact byte-for-byte copy of the supplied 1254x1254 RGBA PNG, transparent alpha preserved. Old source/DB.jpg remains intact for other pages. Native requestAnimationFrame interpolates pointer targets; listeners are restricted to fine hover pointers and respect reduced-motion. No 3D helmet model or fragment assets are present.

## Recording-based homepage layout (2026-10-08)

Homepage rebuilt around the supplied 14.97s recording: full-height centered portrait over large type, centered manifesto, staggered parallax image wall, dark four-column collection (two columns at 768px), then existing navigation directory/footer. Eight collection cards reference the existing WA screenshots and link to TIMES anchors p1-p8. All original assets remain intact. New uploaded portrait is visible in conversation but no readable file path has been supplied; current DB.jpg remains temporary, not the requested final photo.

## Homepage preview and motion (2026-10-08)

index.html alone loads home-preview.css and home-preview.js. Native CSS keyframes and IntersectionObserver provide entrance animations; passive scroll plus requestAnimationFrame updates portrait parallax. Fine pointers control portrait tilt. Counters finish at the original factual values. Directory previews reuse source/SKULL.png and source/ht00.png without recoloring. Other pages, shared styles, business scripts and CNAME are unchanged.

## 原色与数据层级更新（2026-10-05）

新增静态数量模块：首页 02 游戏、08 WA 导入数据、01 份 PDF；GAMES/TIMES/CV/CONTACT 标题侧分别显示 02/08/01/04。数量取自当前真实内容，不表示活动状态或在线可用性。全站 favicon 恢复根目录 IMG_0036.png，全部图片移除 grayscale，原资源文件未修改。

## 当前架构：全站 Swiss Style 与双语（2026-10-05）

本节为最新实现；后文原架构与首页试稿为历史基线。

- 六页均使用共享 style.css，保留原生静态多页面技术栈。index 的已确认排版保留，样式移入共享文件；五个子页采用一致的 masthead、12 栏 subhero、内容模块及 footer。
- 新增 language.js：首屏读取 dabinwu-language（en/zh），默认英语；设置 html lang，DOMContentLoaded 更新标题、图片替代文字、导航可访问名称和按钮 aria-pressed。切换立即生效，localStorage 记忆跨页/刷新，pageshow 恢复历史导航语言；存储受限时仍可切换当前页面。
- 双语文本直接写入 HTML 的 data-language span，CSS 隐藏非当前语言；无需翻译 API、字体 CDN 或运行时 HTML 注入。人名/游戏名称、账号及 WA 导入字符串保留原文。
- 全站手机导航为原生 details/summary，默认展开。当前子页面导航用 aria-current 标记。
- TIMES 保留全部八份 WA 字符串 p1–p8，改用 details 展开、真实状态反馈；1.js 使用 Clipboard API 并回退到 execCommand，不再依赖远程 jQuery。
- CV 下载目标修正为实际 source/吴大斌美的CV.pdf（1 页中文文档），双语仅覆盖网站界面，不修改/翻译 PDF。
- CONTACT 保留原账号及 LinkedIn，邮箱增加 mailto；GAMES 保留两个原外链。图片按原色显示，文件未重写。
- 全站使用原蓝色骷髅 IMG_0036.png favicon，移除缺失图标/字体引用和远程邮件图标。原 ali.png、IMG_0036.png 及全部 source 资源均保留。CNAME 未变。

基线：2026-10-04，HEAD `010648e`。以下依据完整读取六个 HTML、`style.css`、`1.js`、CNAME 和全部本地静态资源生成。代码优先于文档。

## 技术与目录

原生静态多页面站点，无框架、打包器、package.json、后端、数据库、测试配置或仓库内 CI 工作流。`source/` 是静态资源目录，不是应用源码层。

```text
/
├── index.html           首页
├── ABOUT.html           简介
├── CV.html              简历下载链接
├── GAMES.html           游戏作品
├── CONTACT.html         联系信息
├── TIMES.html           WOW WeakAuras 内容
├── style.css            六页共享样式
├── 1.js                 TIMES 复制函数
├── ali.png              首页主图
├── IMG_0036.png          首页 favicon
├── CNAME                dabinwu.top
├── source/              11 张图片与 1 份 PDF
├── AGENTS.md            Codex 约定
└── docs/                五份项目文档
```

## 页面与共享结构

六页均有 viewport meta、浅灰 body 内联背景、`style.css`、`.header`、首页 Logo 链接、五项导航和 `.bottomline` 页脚。结构在各 HTML 中手工重复，没有模板。子页面用 `<font color=black>` 标记当前导航。页脚为 ©2021 DABIN WU 和链接 CONTACT 的远程邮件图标。

| 页面 | 当前内容 / 行为 |
| --- | --- |
| index | `.bgimage` 中显示 `ali.png`；标题 DABIN WU™ Official Website |
| ABOUT | `.block-ui` 中人物照片 DB.jpg 与介绍、Past、Future；含空 h2 |
| CV | `.cv` 中 DABINWU-CV.PDF 链接，实际目标 `source1/吴大斌美的CV1.pdf` 缺失；标题 Document |
| GAMES | 两个 `.box`，Skull and Irish 外链 OneDrive、TINY JOURNEY 外链 itch.io；标题 Document |
| CONTACT | 静态 email、wechat、qq 文本及 LinkedIn 外链，无表单；标题文字含 CONTACCT 拼写 |
| TIMES | 八组 hunter / AIM HUNTER 截图、Copy WA 按钮、复选框及内嵌 `!WA:2!` 导入字符串 p1–p8 |

移动导航依赖 `label[for=toggle]`、隐藏 checkbox 与相邻 `.navbutton`；不依赖 JavaScript。TIMES 每行 `#read:checked + .cd` 显示相邻字符串。多个 read、button、box1-1、box1-2 ID 在各自页面重复使用，是现有实现。

TIMES 按顺序加载远程 jQuery 1.11.1 与本地 `1.js`。`copyToClipboard(element)` 创建临时 input，读取目标 `.text()`，select 后调用 `document.execCommand("copy")`，移除 input，再弹出 `Copied | 复制了，喵!`。没有返回值检查或失败反馈，提示不代表实际剪贴板写入成功。

## 完整静态资源清单

图片已读取尺寸并通过联系表逐张视觉检查；尺寸为源文件像素，不代表 CSS 显示尺寸。

| 路径 | 尺寸 | 当前用途 |
| --- | --- | --- |
| ali.png | 1200×700 | 首页深色人物持枪场景主图 |
| IMG_0036.png | 482×482 | 蓝色骷髅图标，首页 favicon |
| source/DB.jpg | 500×500 | ABOUT 黑白肖像 |
| source/SKULL.png | 482×482 | GAMES 骷髅封面；与根图标 SHA256 相同 |
| source/TINY.png | 1000×1000 | GAMES 黑底白字封面 |
| source/ht00.png | 369×139 | TIMES p1 截图 |
| source/ht01.png | 364×131 | TIMES p2 截图 |
| source/ht02.png | 397×148 | TIMES p3 截图 |
| source/ht03.png | 412×172 | TIMES p4 截图 |
| source/AIMHUNTER0.png | 342×162 | TIMES p5 截图 |
| source/AIMHUNTER00.png | 402×150 | TIMES p6 截图 |
| source/AIMHUNTER01.png | 448×152 | TIMES p7 截图 |
| source/AIMHUNTER1.png | 602×190 | TIMES p8 截图 |
| source/吴大斌美的CV.pdf | 162829 字节，1 页 | 中文简历，当前 CV 页面未指向它 |

PDF 已全文提取并渲染阅读，内容为教育经历、工作经历及个人技能；其中个人网站为旧地址 `https://dabinwu.xyz/`，与 CNAME 不同。未修改 PDF。

## 外部依赖与路径

- jQuery：`https://ajax.lug.ustc.edu.cn/ajax/libs/jquery/1.11.1/jquery.min.js`，仅 TIMES。
- 邮件图标：`https://img.icons8.com/pastel-glyph/2x/email--v3.png`，全部页面。
- GAMES 外链：`https://1drv.ms/u/s!AiNqJtCNus87xGubpR-_Hjs1xH7N?e=gh1zH1`、`https://dabinwu.itch.io/tiny`。
- CONTACT 外链：`https://www.linkedin.com/in/dabinwu/`。
- 首页和 ABOUT 声明 `mebold` 字体，目标 `source/MEBOLD.ttf` 缺失，现有样式没有使用该字体族。
- 五个子页面 favicon 指向缺失的 `source/IMG_0036.png`，实际文件在根目录。
- GAMES/TIMES 图片使用 `/source/...` 根路径，本地预览需以仓库根目录作为站点根。

仓库名称与 CNAME 符合 GitHub Pages 静态站点形式，但仓库文件不能证明在线部署、DNS、HTTPS 或 Pages 设置的当前状态；本轮未核实远程服务。

## 2026-10-05：首页 Swiss Style 试稿

当前首页已经独立改为 Swiss Style；上文关于六页共用样式、原首页结构的内容是 2026-10-04 基线，仅五个子页面继续使用原实现。index.html 不再加载 style.css 或远程邮件图标，也不再声明缺失 mebold 字体。新首页所有样式内嵌于 index.html，没有新增运行依赖或 JS。

首页结构为 masthead、超大姓名 hero、简介/肖像、四个目录入口、页脚。保留 ABOUT/CV/GAMES/CONTACT/TIMES 五个导航目标，新增同目标目录及回到顶部锚点；手机菜单使用原生 details/summary，默认展开。首页图片改用现有 source/DB.jpg，原 ali.png 保留。favicon 为内联红色方形 SVG。简介根据 ABOUT，教育地点/年份根据已读取 CV；没有虚构项目或工作经历。

其他 HTML、style.css、1.js、图片/PDF 和 CNAME 未修改。全站统一改版须等用户确认首页效果。


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
