# Codex 项目工作约定

## 事实源与范围

当前真实代码是事实源；文档与代码冲突时以代码为准，并在授权范围内更新文档。不得根据文档猜测不存在的功能。项目为原生 HTML/CSS/JavaScript 静态个人网站，不能擅自更换技术栈、引入框架或重构。

第一阶段仅建立文档，不修改现有功能、UI、HTML、CSS、JavaScript、图片或 PDF。不得删除或修改 `CNAME`（当前内容 `dabinwu.top`）。后续工作只执行用户明确授权的任务；文档中的待核实问题不构成修复授权。

## 每次开发前必须执行

1. 阅读本文件及 `docs/ARCHITECTURE.md`、`docs/PLAN.md`、`docs/HANDOFF.md`、`docs/UI_DESIGN_SYSTEM.md`、`docs/DEVELOPMENT.md`。
2. 检查 `git status --short`、`git diff`、`git diff --cached`；查看最近提交，识别用户已有改动，不覆盖、不回滚。
3. 阅读本次任务涉及的真实 HTML、CSS、JavaScript 和资源引用；共享 CSS 或导航变更须检查全部六个页面。使用 UTF-8 读取，避免将终端乱码误判为源文件乱码。
4. 明确任务范围及验证方式，再进行最小必要改动；保持页面文件名大小写、相对路径和根路径语义。

## 开发结束必须执行

- 根据影响范围验证页面、导航、资源、768px 断点和 TIMES 复制/展开行为；不把未执行的验证写成通过。
- 检查最终 Git 状态与差异，确保没有无关修改，确认 CNAME 未变。
- 同步相关架构、UI、开发文档和 PLAN；每轮更新 HANDOFF，记录改动、验证、遗留问题及下一步授权边界。
- 未获授权不提交、推送或部署；第一阶段结束后停止功能开发。

## 文档职责

| 文件 | 职责 |
| --- | --- |
| `docs/ARCHITECTURE.md` | 页面、资源、依赖、交互与部署证据 |
| `docs/PLAN.md` | 整个项目状态、已知问题和授权边界 |
| `docs/HANDOFF.md` | 最近一轮交接、验证及未完成事项 |
| `docs/UI_DESIGN_SYSTEM.md` | 从现有 CSS/HTML 提取的视觉与响应式规则 |
| `docs/DEVELOPMENT.md` | 本地检查、预览及维护方式 |
