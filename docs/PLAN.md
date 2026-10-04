# 项目状态与计划

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
