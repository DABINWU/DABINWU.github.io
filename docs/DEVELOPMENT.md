# 开发与验证

## Unified site style (2026-10-08, current)

Verified six pages in two languages at 1440/769/768/390/320px: 12-column grids, no horizontal overflow and loaded images. Language persistence, navigation/mobile menu, eight exact WA clipboard payloads, success/failure feedback and PDF access passed; no page errors. Additional checks confirmed inner-page theme tokens, original-color image filters, reduced-motion suppression and settled screenshots at 1440/390px. Desktop/mobile screenshots inspected. Tests use existing local Chrome/Playwright in temp directory, no repository runtime dependency. Real iOS and remote external-link availability not tested. Preview http://127.0.0.1:8765/. CNAME untouched.

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

## Depth renderer checks (2026-10-08)

Verified matching1254x1254 assets and exact depth-copy hash. Renderer load, left/right/top/bottom angle signs/bounds, reset, reduced-motion canvas hiding/image restoration and forced no-WebGL fallback passed. Full six-page bilingual five-width and original business regression passed with no page errors. Center/right and edge-direction desktop captures inspected for alignment/color/edges. Browser GPU simulation only; no real iOS/device-GPU test. Source PNG plus depth is shallow relief, not full3D reconstruction.

## Reference source findings and subtle motion (2026-10-08)

Decoded user-saved view-source HTML; active interaction script is https://lando.itsoffbrand.io/dev-js/lando-by-OFF+BRAND.05.js (other development script references are commented out). Inspected public script in temp directory only. W9 uses128x128 plane geometry, head depth/alpha/normal textures, displacementScale0.25, movement intensity0.075rad and ease0.025. Mouse normalized Y is positive at top; head rotation X is negative normalized Y times intensity/reveal and scroll factors. This differs from an ordinary flat PNG. No reference assets or script copied into project.

Homepage adaptation now reduces yaw to +/-1.2deg, pitch to +/-1deg (top negative), uses exponential180ms easing without spring overshoot. Portrait pixel geometry/source unchanged; perspective remains1800px. Four edge signs/bounds, recenter and reduced-motion passed, along with full six-page bilingual five-width/business regression. Supersedes prior +/-6/5deg and spring settings. No commit/push/deployment.

## Four-direction perspective rotation (2026-10-08)

Latest reference screenshots supersede the prior Z-axis interpretation: whole-photo yaw follows horizontal pointer (+/-6deg); pitch follows vertical pointer (+/-5deg, inverted Y). CSS rotateY then rotateX, center50%50%, perspective1800px. No Z roll, texture deformation, translation or scaling. Damped spring/recenter and reduced-motion remain. Single photo is a rigid plane; it cannot reveal a real face side view. Four edge-position checks and screenshots, reset/reduced-motion passed; full six-page bilingual five-width and business regression passed. No commit/push/deployment.

## Corrected Z-axis rotation (2026-10-08)

User clarified: photo stays unchanged and rotates slightly as one layer about its center Z axis. Removed WebGL mesh renderer and its script reference. Actual effect is rotateZ only, center50%/50%, maximum target +/-2deg, spring stiffness110/damping19. No translation, scale, X/Y rotation or image deformation. Original PNG unchanged. Pointer-leave/blur recenters; touch remains static and reduced-motion disables rotation. Matrix checks confirmed unit scale, zero translation, rotation and recenter; six-page bilingual five-width layout/business regression passed. This section supersedes previous mesh/deformation descriptions. No commit, push or deployment.

## Mesh checks (2026-10-08)

Confirmed WebGL mesh-ready state, pointer response, spring return-to-center, reduced-motion canvas hiding/static-image restoration. Six-page bilingual five-width regression and navigation/language/menu/clipboard/PDF checks passed with no page errors. Center/right desktop screenshot visually inspected. Tests verify behavior, not aesthetic equivalence to the reference; no real iOS/GPU compatibility test.

## Portrait verification (2026-10-08)

Copied user PNG without editing; SHA256 matches original. Checked RGBA alpha range0-255 and1254x1254 dimensions. Six-page two-language five-width layout/interaction regression passed, plus measured left/right pointer movement, return-to-center and reduced-motion suppression. Settled desktop1440x1000 and touch390x844 screenshots visually checked. No real iOS-device validation. Preview remains http://127.0.0.1:8765/.

## Recording layout verification (2026-10-08)

Six-page bilingual five-width regression passed; lazy image checks explicitly load assets before checking completion. Language persistence, menus, eight exact clipboard payloads, feedback, PDF access and no page errors passed. Settled hero entrance, portrait dimensions, collage scroll parallax and reduced-motion verified. Desktop/mobile screenshots inspected. Browser connector returned no available browsers; local Chrome headless used. No real iOS test. Portrait replacement still awaits readable original path.

## Homepage preview checks (2026-10-08)

Preview at http://127.0.0.1:8765/ while the local Python server runs. No build or new dependencies. home-preview.css/js are loaded only by index.html. Verify actual animation values over time, desktop pointer/hover, touch scroll, final factual counters and reduced-motion behavior. Real iOS device testing has not been performed.

## 原色与数据层级更新（2026-10-05）

视觉验证须检查所有 img 的 computed filter 为 none、favicon 指向根目录原图标；不得重新去色或重写资源。数字与分类标签须与真实页面数量一致，并同时维护中英文。最新回归覆盖六页/两语/五个宽度，无横向溢出；语言记忆、菜单、八份 WA 剪贴板与失败提示、PDF 继续通过。

## 当前双语开发与验证流程（2026-10-05）

六页现在共用 style.css；language.js 在 head 同步加载以提前恢复语言；1.js 仅 TIMES defer 加载。没有 npm 项目依赖或打包步骤。

新增文案必须提供 data-language=en/zh 两份 HTML span（附对应 lang），并检查两语桌面/窄屏显示。页面 title 提供 data-title-en/zh；可翻译 alt 与 aria-label 使用 data-alt-en/zh、data-label-en/zh。WA 数据、账号、文件路径、外链不应翻译。默认英语；localStorage 键为 dabinwu-language，值 en 或 zh，禁止把其他值直接写入 lang。

语言回归需覆盖首次访问、切换、跨页、刷新、返回、存储受限、无 JS 英语基础内容；检查 aria-pressed、title、alt 和菜单可访问性。复制验证需比较实际剪贴板与原始 p1–p8、展开行为、成功和失败提示，不仅断言提示出现。PDF 下载目前是中文源文件，应在界面明确标注。

本轮用系统临时目录中的本地脚本与 Chrome 无头浏览器检查 60 个布局状态，并对 24 张中英桌面/手机截图视觉检查；语言记忆、八份复制内容、失败提示和 PDF HTTP 200 已验证。检查脚本/截图未纳入项目运行依赖。补充检查：存储受限切换、标题/alt 翻译、execCommand 回退和无 JS 英文内容通过。远程外链与线上发布未验证。

## 当前环境与技术

本仓库直接维护 HTML/CSS/JS，使用 UTF-8。没有 npm 安装、build、lint 或 test 命令，也没有项目要求的 Node/Python 版本。Node/Python 仅可作为可选本地工具，不是站点运行依赖。

## 开发前检查

先执行 AGENTS 的完整阅读流程，再检查：

```powershell
git status --short
git diff
git diff --cached
git log -10 --oneline
rg --files -g '!.git'
Get-Content -Encoding UTF8 style.css
```

PowerShell 默认编码可能使中文显示乱码，应显式使用 UTF8；不要为解决终端显示问题重写源文件。尊重未提交改动，不擅自暂存、提交或推送。

## 可选本地预览

将仓库根目录作为 HTTP 服务根，避免 `/source/...` 图片在 file URL 或子目录预览中错误解析。若已有 Python，可在仓库根运行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8000/`。这是建议的未来验证方法，本轮没有启动服务或执行浏览器回归。普通终端的 python 未在 PATH，本轮资源检查用 Codex 缓存运行时的 Python/Poppler；该绝对路径是本机工具，不应成为项目依赖。

## 按变更范围验证

- 页面内容：访问相应页面，检查导航、图像、页脚、标题和链接。公共 CSS/导航变化需检查全部六页。
- UI：对比变更前后截图，覆盖桌面、768px、断点两侧及窄手机宽度；核对菜单开关、悬停、ABOUT/TIMES 列布局和 GAMES 图片。
- TIMES：网络检查 jQuery 与 1.js 加载顺序；逐一验证八个复选框及按钮，将剪贴板内容与 p1–p8 原始文本比较，检查失败行为。WA 字符串是数据，不应格式化或截断。
- 静态路径：保持 HTML 名称大小写与真实文件名匹配，检查相对/根路径。不能将已知缺失链接记作通过。
- 外链：只有实际验证后记录可用性；本轮没有访问外部链接。
- 结束检查 `git diff --check`、`git diff --name-status`、`git status --short` 和 staged diff，确保 CNAME 与任务外文件未变。

## 文档维护

架构/资源/依赖变化更新 ARCHITECTURE，样式变化更新 UI_DESIGN_SYSTEM，流程变化更新 DEVELOPMENT；整体状态更新 PLAN，每轮交接更新 HANDOFF。区分源码检查、静态资源检查与浏览器实测。

新增未跟踪文件不会出现在普通 `git diff` 中，必须同时查看 status 和新增文件正文；不为展示差异擅自暂存。文档更新不要求引入测试框架或更换现有技术栈。

## 发布边界

CNAME 必须保留。本地未包含部署脚本或 Pages 配置，不能推断发布成功。提交、推送、部署均需对应用户授权；本轮只创建 Markdown 文件。

## 本轮验证补充（2026-10-05）

首页独立内嵌样式，不加载共享 CSS。开发时先区分首页与五个子页；不要误认为全站已统一改版。本轮本地服务使用 127.0.0.1:8765（8000 在本机无法绑定）。交互 Browser 未连接，改用现有本地 Playwright/Chrome 无头截图验证，没有为网站增加依赖。

已检查 1440、1000、769、768、390、320px 的文档宽度、12 栏计算结果、头像加载与五个导航 href；检查手机 details 关闭及重开。1440/390px 全页截图经目视复核。未测试 TIMES 剪贴板、远程外链及线上部署，本轮未改相关代码。截图与检查脚本放在系统临时目录，不加入站点。


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
