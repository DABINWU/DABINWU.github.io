# 现有 UI 规则

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
