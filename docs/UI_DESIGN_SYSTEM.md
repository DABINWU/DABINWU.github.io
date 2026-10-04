# 现有 UI 规则

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
