# 当前架构

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
