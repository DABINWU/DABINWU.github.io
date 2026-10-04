# 开发与验证

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
