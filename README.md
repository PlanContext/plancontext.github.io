# PlanContext 项目主页

当前主页已切换为 [RosettaSim](https://sephirex-x.github.io/rosettasim/) 模板风格，保留其浅蓝灰背景、衬线标题、圆角面板、TL;DR 与标签设计。仅在本地修改，未部署。

## 打开
双击 `index.html` 可查看，或运行 `python -m http.server 8000` 后访问 http://localhost:8000 。无 npm 或构建依赖，CSS、JS、图表及 PDF 均为本地资源。

## 页面内容
- 标题、作者与机构、通讯作者标记：沿用原页面。ICLR 2027 来自论文，正式发布前应核对实际状态。
- Highlights：Overleaf 原始 teaser 与 benchmark 规模。
- Abstract：论文摘要。
- Benchmark Results：23 个模型的 HTML 主表、VA/VLA/WA 筛选、CSV 下载、NCS 95% CI。
- 统计图：默认 mPDMS–NCS，可切换全部六张原始子图。
- 六类场景说明、四类静态定性案例、可展开模型示例和因素分析。
- 正式 BibTeX 保持空白；未提供的 arXiv、Code、Data、Video 链接继续记录在 `resources.json`，页面暂不展示。
- GIF / 视频到位后，可替换 Highlights 或在 Qualitative Results 中加入；当前使用真实论文静态图。

## 维护入口
- `index.html`：当前页面内容。
- `static/css/rosettasim.css`：参考模板原样式。
- `static/css/index.css`：PlanContext 样式调整与移动端适配。
- `static/js/index.js`：模型筛选和统计图切换。
- `static/data/main-results.json`、`main-results.csv`：从 Overleaf 主表转录并合并置信区间的数据。
- `scripts/build_rosettasim.py`：当前 HTML 生成脚本。修改数据后运行会重新生成页面。
- `static/images/overleaf/`：原始论文图片。
- `materials/backups/pre-rosettasim/`：切换前的 HTML 和自定义 CSS 备份。
- `materials/rosettasim/reference.html`：新模板源码参考。
- `MATERIALS_CHECKLIST.md`：素材盘点与待补充项。

旧脚本 `scripts/build_page.py` 是初版 Nerfies 页面生成器，不应再用于更新当前主页。

## 模板署名
新模板：https://sephirex-x.github.io/rosettasim/ 。它基于 Nerfies 模板，当前页脚保留 RosettaSim、Nerfies 和 CC BY-SA 4.0 署名。论文与图表权利归原作者。

## Highlights 视频轮播
首页 Highlights 已改为六页视频轮播，接入说明见 `static/videos/highlights/README.md`；媒体配置位于 `static/data/highlights.json`。teaser 移至摘要后的 Why Context Matters 区域。

## GitHub Pages 发布
仓库：https://github.com/PlanContext/plancontext.github.io

在仓库 Settings → Pages 中选择 Deploy from a branch，分支 `main`，目录 `/ (root)`，然后保存。预期网址为 https://plancontext.github.io/ 。仓库名与组织名对应，这是组织根站点。

`.nojekyll` 用于直接发布静态文件。`materials/`、`tmp/` 和本地生成脚本不会上传；仓库中的 `index.html`、CSS、JS 和静态资源可直接编辑维护。上述脚本相关说明适用于本地工作副本。
