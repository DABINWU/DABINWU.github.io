# 当前架构

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
