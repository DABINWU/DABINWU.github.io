# 项目状态与计划

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
