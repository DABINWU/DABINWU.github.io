# 项目状态与计划

## 去掉头盔耳罩（2026-10-09，当前）

移除 source/helmet-wireframe.svg 左右耳罩的全部同心椭圆及横向网格。完整圆顶、面罩和下颌线稿保留，扫描范围、速度及仅活动扫描带显示的规则不变。SVG 与扫描脚本资源版本更新为20261009-no-earcups。原照片、背景水波与其他页面未修改。

扫描推进、间歇透明、减少动态效果隐藏及六页双语五宽度（含768px）布局、导航、语言记忆、菜单、八份WA复制和反馈、PDF验证通过，无页面错误。真实iOS未测试。CNAME未变；未提交、推送或部署。旧记录为历史。


## 完整圆顶头盔扫描（2026-10-09，当前）

恢复头盔上半部，移除 Y382 水平裁切及其直线上缘。外壳采用左右对称三次贝塞尔圆顶：顶部 Y20、中心 X500，控制点提供宽圆弧；纵向网格顶部展开，避免尖顶聚拢。下半部、耳罩、黑色密集线框和原照片保持。扫描范围改为归一化 Y-0.07 至0.88，仍为2.3秒扫描/3.2秒周期，仅显示活动扫描带，扫过及间歇透明。资源版本20261009-round-crown。

已验证扫描推进、间歇画布完全透明、减少动态效果时隐藏；六页双语五种宽度（含769/768px）、导航、菜单、语言记忆、八份WA复制及反馈、PDF检查通过，无页面错误。检查桌面扫描截图。真实iOS未测试；CNAME未修改，未提交、推送或部署。以下旧记录为历史，本节优先。


## Scan band only (2026-10-09, current)

Removed both constant faint mesh and accumulated scanned-region layers from home-helmet-scan.js. Only the active moving horizontal band draws black wireframe. Canvas is cleared every frame and completely transparent during the pause after scanning. Existing clean horizontal cut, density, size and2.3s/cycle3.2s timing retained. Version20261009-band-only. Background water remains independent.

Verified scan progression, clear pixels above cut, fully transparent canvas after scan and reduced-motion hiding. Six-page bilingual five-width layout/navigation/language/menu/eight exact WA clipboard/feedback/PDF regression passed; no page errors. Real iOS not tested. Photo/CNAME/business scripts unchanged; no commit/push/deployment.


## Clean horizontal helmet cut (2026-10-09, current)

User clarified the whole mesh above the red line must disappear. Added a single SVG horizontal clip at Y382 around ALL helmet groups, including structural outline, visor curves, mesh and ears, plus a straight upper rim. Previous Y340 strip is no longer visible. Scan starts above this boundary at normalized0.35 and ends0.88; density/black color/scale/2.3s scan remain. Version20261009-clean-cut.

Canvas pixel check confirmed zero nontransparent pixels above the cut (excluding2px boundary tolerance). Scan/reduced-motion and six-page bilingual five-width navigation/language/menu/eight exact WA clipboard/feedback/PDF regression passed; no page errors. Desktop screenshot inspected. Real iOS not tested. Original photo/water/inner pages/CNAME/business scripts preserved. No commit/push/deployment.


## Lower helmet only (2026-10-09, current)

User annotated a cut across forehead and requested removal of upper elliptical crown. Removed crown silhouette from source/helmet-wireframe.svg shell/outline, replacing it with a straight upper boundary at SVG Y340. Clipped mesh now retains only lower face shield, ears and chin. Black dense linework, 1.12 scale, static original portrait and water retained. Scan now travels source-normalized Y0.30-0.88 across retained geometry; duration2.3s/cycle3.2s unchanged. Asset version20261009-lower-scan.

Scan progression and reduced-motion hiding passed. Six-page bilingual five-width layout/navigation/language/menu/eight exact WA clipboard/feedback/PDF passed with no page errors. Desktop/mobile/3440px framing passed; desktop screenshot inspected and confirms no crown above the cut. Real iOS not tested. CNAME/business code unchanged; no commit/push/deployment.


## Larger dense black helmet scan (2026-10-09, current)

User requested larger full-head coverage, black lines, denser mesh and faster scan. Helmet geometry is scaled 1.12 about source center (0.5,0.44); canvas extends 10% on each side to avoid clipping enlarged crown/ears. SVG viewBox padded to -100 -100 1200 1200 so round crown remains intact. Black #000000 strokes: fine mesh .85 SVG units, structural outline 1.7. Mesh step reduced 25 to 12.5 in both directions, approximately doubling lines per direction; ear rings increased to five and cross-lines spacing 10. Base/scanned alpha .12/.36, active band 1. Scan takes 2.3 seconds (previously4.8), repeats every3.2 seconds (previously6.2). Original static photo, water, reduced-motion hiding and performance limits retained. Homepage version 20261009-dense-scan.

Verified scan progression/reduced-motion, six-page bilingual five-width layouts (including769/768), navigation/menu/language/eight exact WA clipboard/feedback/PDF; no page errors. Desktop/mobile/3440px framing passed and desktop scan screenshot inspected. Real iOS not tested. No CNAME/business changes; no commit/push/deployment.


## Complete wireframe helmet scan (2026-10-09, current)

Replaced the solid helmet portrait with the original static source/dabin-portrait.png. New source/helmet-wireframe.svg provides transparent gray line-only dome, visor, ear cups and angular chin geometry, approximating the prior helmet. home-helmet-scan.js draws it on a homepage-only Canvas overlay aligned to the contained portrait square. Scans from top to bottom over 4.8 seconds in a 6.2-second repeating cycle: faint full outline, brighter scanned region and active horizontal band. Pointer press restarts; rendering capped at 30fps/DPR1.5 and paused offscreen/hidden. Reduced-motion hides the overlay. No solid fill, no image deformation or framework. Prior generated solid asset retained unused.

Verified scan progression, original photo restoration and reduced-motion hiding; six-page bilingual five-width layout/navigation/menu/language/eight exact WA clipboard/feedback/PDF checks passed without page errors. Desktop/mobile/3440px framing passed. Desktop scan screenshot inspected. Real iOS not tested. Water and inner-page limits retained. No CNAME/business-code changes; no commit/push/deployment.


## Homepage helmet portrait (2026-10-09, current)

User authorized a complete silver Daft Punk-inspired helmet enclosing the homepage portrait head. Built-in image_gen created a photorealistic transparent 1254x1254 RGBA composite, saved as source/dabin-helmet-portrait.png. Only the hero image reference and bilingual alternative text changed. Original source/dabin-portrait.png remains intact and used by other portrait placements. Static composite, not an interactive 3D model or scan overlay. Existing hero dimensions, water, navigation and inner-page ultrawide limits retained. No new runtime library.

Checks passed: six-page bilingual five-width layout (including 769/768), navigation/language/menu, eight exact WA clipboard payloads/feedback/PDF; no page errors. Desktop/mobile/3440px framing and background water/static-portrait/reduced-motion checks passed. Desktop screenshot visually inspected. Real iOS not tested. CNAME and business scripts unchanged; no commit/push/deployment. Local preview http://127.0.0.1:8765/.


## Unified site style (2026-10-08, current)

User approved current homepage direction and authorized matching the other five pages. All five now share pale gray-green headers, dark olive content, lime controls, oversized serif titles, bold sans-serif section headings and asymmetric grid layouts. ABOUT/CV/GAMES/CONTACT/TIMES visual update complete locally. Homepage static portrait and water retained; no scan overlays restored. Visual user acceptance and real iOS testing remain pending. No commit/push/deployment authorized or performed.

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

## Depth supplied and connected (2026-10-08)

Missing depth asset resolved. Homepage now uses user-provided depth to build shallow relief and rotates that relief with the pointer. Color and depth files unchanged. Four directions, reset and fallback checks passed. Small-angle2.29/2.01deg bounds chosen to avoid excessive swing. Not a full reconstructed head: no newly visible side/back geometry or reference helmet fragments. No commit/push/deployment.

## Reference source findings and subtle motion (2026-10-08)

Decoded user-saved view-source HTML; active interaction script is https://lando.itsoffbrand.io/dev-js/lando-by-OFF+BRAND.05.js (other development script references are commented out). Inspected public script in temp directory only. W9 uses128x128 plane geometry, head depth/alpha/normal textures, displacementScale0.25, movement intensity0.075rad and ease0.025. Mouse normalized Y is positive at top; head rotation X is negative normalized Y times intensity/reveal and scroll factors. This differs from an ordinary flat PNG. No reference assets or script copied into project.

Homepage adaptation now reduces yaw to +/-1.2deg, pitch to +/-1deg (top negative), uses exponential180ms easing without spring overshoot. Portrait pixel geometry/source unchanged; perspective remains1800px. Four edge signs/bounds, recenter and reduced-motion passed, along with full six-page bilingual five-width/business regression. Supersedes prior +/-6/5deg and spring settings. No commit/push/deployment.

## Four-direction perspective rotation (2026-10-08)

Latest reference screenshots supersede the prior Z-axis interpretation: whole-photo yaw follows horizontal pointer (+/-6deg); pitch follows vertical pointer (+/-5deg, inverted Y). CSS rotateY then rotateX, center50%50%, perspective1800px. No Z roll, texture deformation, translation or scaling. Damped spring/recenter and reduced-motion remain. Single photo is a rigid plane; it cannot reveal a real face side view. Four edge-position checks and screenshots, reset/reduced-motion passed; full six-page bilingual five-width and business regression passed. No commit/push/deployment.

## Corrected Z-axis rotation (2026-10-08)

User clarified: photo stays unchanged and rotates slightly as one layer about its center Z axis. Removed WebGL mesh renderer and its script reference. Actual effect is rotateZ only, center50%/50%, maximum target +/-2deg, spring stiffness110/damping19. No translation, scale, X/Y rotation or image deformation. Original PNG unchanged. Pointer-leave/blur recenters; touch remains static and reduced-motion disables rotation. Matrix checks confirmed unit scale, zero translation, rotation and recenter; six-page bilingual five-width layout/business regression passed. This section supersedes previous mesh/deformation descriptions. No commit, push or deployment.

## Mouse effect rework (2026-10-08)

User rejected whole-photo translation/rotation. Replaced it with spatially varying shallow mesh deformation and a damped spring; shoulders stay anchored. Original photo bytes unchanged. Request implemented and technically checked; visual fidelity to the reference3D scene remains limited by single-photo input. No commit/push/deployment.

## Portrait request completed (2026-10-08)

User supplied the readable original PNG and mouse-motion recording. Installed exact original-color cutout on homepage and implemented smooth pointer translation/tilt with return to center. Prior pending portrait-path item is resolved. Hero now uses pale warm-gray background; remaining page sections retain the recording-based layout. No commit, push or deployment. Helmet fragment animation seen in reference is not implemented; it would require separate assets/model and explicit further scope.

## Recording layout request (2026-10-08)

User explicitly requested matching the reference layout and using a new portrait. Homepage layout and section order are implemented with original project content. This supersedes the earlier editorial card/hero composition. Portrait replacement is pending its local file path; do not mark this request fully complete until the provided photo is installed. Other pages retain shared Swiss design. No commit, push or deployment.

## Current homepage preview (2026-10-08)

Homepage olive/lime editorial preview completed. User found the first motion pass too subtle; this round adds visible hero entrance, faster ticker, scroll parallax, count-up, pointer tilt and directory previews. Scope remains homepage only; awaiting visual feedback before extending the direction. Existing 500x500 portrait is a placeholder for higher-resolution user photography. No commits, push or deployment.

## 原色与数据层级更新（2026-10-05）

根据用户最新反馈，恢复照片/封面/WA 截图/图标原色，增加小面积蓝绿紫数据分类标记及真实数量展示，强化标题→数字→分区标题→说明的层级。双语与原交互保留，60 个布局状态及八份复制比对回归通过。

## 最新项目状态（2026-10-05）

本节覆盖下方历史阶段描述。用户已确认首页并授权统一其余页面、增加中/英两种语言。

全站改版与双语功能完成：六个页面共享瑞士风格 CSS，language.js 记忆语言选择，全部界面文案/标题/操作提示提供中文和英文。TIMES 八份导入数据保持原样，复制和展开验证通过；CV 下载链接已修正并验证 PDF 可访问。

原阶段问题状态：缺失字体/favicon 引用、旧 CSS 无效声明、重复交互 ID、错误 HTML 结束标签和占位标题已随本轮页面重写消除；旧 PDF 中的 dabinwu.xyz 内容仍保留。远程游戏/LinkedIn 服务可用性未验证，本地 href 保持原值。全站没有新框架或第三方运行依赖。

验证完成：六页 × 中英 × 1440/769/768/390/320px 共 60 个布局状态，均为 12 栏、无横向溢出、无损坏图片。两种语言的桌面/手机截图已视觉检查；跨页/刷新记忆、菜单开关、八份剪贴板比对及复制失败提示通过。未提交、推送或部署。

更新时间：2026-10-04（Asia/Shanghai）。代码事实源：HEAD `010648e` 与当前工作区。

## 整体状态

六页静态个人网站已存在：主图首页、个人简介、CV 链接、两个游戏外链、联系信息、八份 WOW WA 导入内容。六页共用 CSS；移动菜单由 checkbox 控制，TIMES 使用 jQuery 与复制函数。无构建流程、服务端或自动测试。

本轮开始时 `git status --short`、`git diff`、`git diff --cached` 均为空。CNAME 为 `dabinwu.top`，保持原样。线上部署、DNS、外链有效性和剪贴板兼容性未验证。

## 阶段状态

| 阶段 | 状态 / 范围 |
| --- | --- |
| 仓库接管与阅读 | 完成：全部 HTML/CSS/JS、source、13 张图片、1 页 PDF、CNAME、Git 状态/差异/最近十条日志 |
| 长期开发文档 | 完成：AGENTS 与五份 docs；建立开发前阅读与交接规则 |
| 功能 / UI / 重构 | 本轮未授权，不执行 |
| 提交 / 推送 / 部署 | 本轮未执行 |

## 已知问题与后续核实清单

以下是现状登记，不是已批准的开发任务。只有用户授权后才确定修复顺序与范围。

| 事项 | 真实代码证据 / 当前状态 |
| --- | --- |
| CV 目标缺失 | CV.html 指向 source1/吴大斌美的CV1.pdf；仓库只有 source/吴大斌美的CV.pdf |
| 子页 favicon 缺失 | 五个子页使用 source/IMG_0036.png；文件实际在根目录 |
| 字体资源缺失 | index/ABOUT 声明 source/MEBOLD.ttf；未使用 mebold 字体族 |
| CSS 无效声明 | sold、全角分号、max-height:auto、display:solid；见 UI 文档 |
| HTML 语义与内容 | 重复 ID、font 标签、ABOUT 结尾缺少 >、空 h2、description meta 拼作 desritpion、CV/GAMES 标题 Document、英文拼写及通用 alt |
| 复制行为 | jQuery 外部加载、execCommand、无失败检测；浏览器实际效果未测 |
| 响应式布局 | 唯一 768px 断点；GAMES 不堆叠、TIMES 手机列仍为 48%；实际视觉未做浏览器回归 |
| 远程资源与链接 | 邮件图标、jQuery、OneDrive、itch.io、LinkedIn 可用性未查 |
| 域名历史差异 | CNAME 为 dabinwu.top；PDF 内容中的个人网站仍为 dabinwu.xyz |

## 最近十条 Git 日志

日期按提交记录的 +08:00；不是本轮开发时间。

| 提交 | 日期 | 标题 |
| --- | --- | --- |
| 010648e | 2026-10-04 | Update CNAME |
| 386b629 | 2022-11-04 | Update CV.html |
| b5ce8e2 | 2022-11-04 | Update CV.html |
| e82000c | 2022-09-22 | Update GAMES.html |
| 82e5ff2 | 2022-02-08 | Update style.css |
| 16dba32 | 2022-02-08 | Add files via upload |
| 2350fdd | 2022-02-08 | Update CV.html |
| d319f85 | 2022-02-08 | Update style.css |
| 2c6b8af | 2022-02-08 | Update style.css |
| a143d82 | 2022-02-08 | Add files via upload |

下一轮从用户的新任务出发，先按 AGENTS 阅读文档、Git 和真实代码；不自动进入功能开发。

## 2026-10-05：首页试稿当前状态

用户已授权 Swiss Style 整体设计方向，但本轮实施范围仅 index 首页预览。当前 HEAD 为 2b0b411（new ai），本轮开始时工作区干净，上一阶段六份文档已由现有提交纳入仓库。

首页试稿完成，原生 HTML/CSS、12 栏网格、米白/黑/强调红、Helvetica 字体栈、400/700 字重、左对齐、黑白肖像及编号目录。已做桌面和手机截图检查，六种宽度无横向溢出，手机菜单可关闭/展开。五个子页面维持原风格，共享 CSS 和 CNAME 保留。

下一步：等待用户评价首页效果，再根据确认方向统一其他页面。旧资源缺失和 TIMES 复制等现状未修复。没有提交、推送或部署。


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
