# 开发与验证

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
