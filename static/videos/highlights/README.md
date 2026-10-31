# Highlights 视频接入

1. 将视频放入 `static/videos/highlights/`，推荐 MP4（H.264）；也支持 GIF。
2. 编辑 `static/data/highlights.json`。每条数据是一个轮播页：
   - `category`：短标签，例如 A、B1。
   - `title`：标题。
   - `caption`：说明。
   - `src`：媒体路径，例如 `static/videos/highlights/a.mp4`。没有视频时保留空字符串。
   - `poster`：可选视频封面路径，没有则留空。
3. 运行 `python scripts/build_rosettasim.py`，将配置写入 HTML；刷新页面即可。配置嵌入页面，不依赖 fetch，因此直接双击 HTML 也能使用。

默认六页对应 A、B1、B2、C、L、LC，可以增加、删除和调整顺序。切换页面时暂停上一段视频，新视频尝试静音播放；如浏览器限制自动播放，可使用播放器原生控件播放。支持循环播放、视频区域左右侧箭头、左右方向键和触摸滑动。不自动翻页，以便完整观看每个案例。没有媒体时显示 Video coming soon，不加载不存在的文件。

当前未接入真实视频，因此真实媒体播放效果仍需在素材到位后验证。旧 teaser 已移至摘要后的 Why Context Matters 区域。
