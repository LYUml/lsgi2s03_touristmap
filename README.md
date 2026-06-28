# lsgi2s03_touristmap

一个用于展示皇家植物园（Royal Botanical Garden）的互动式旅游地图网页项目。项目使用原生 HTML、CSS 和 JavaScript 实现，不需要打包工具，主要功能包括地图浏览、分类点位、编号景点、路线显示、中英文切换和点位采集。

## 项目结构

```text
.
├── README.md
├── basemap/
│   ├── tourist_map.png
│   ├── tourist_map.svg
│   └── tourist_map_base.svg
├── fig/
│   ├── cookspineavenue.jpg
│   ├── fernery.jpg
│   ├── flowergarden.jpg
│   ├── greatcircle.jpg
│   ├── memorialtrees.jpg
│   ├── memorialtrees2.jpg
│   ├── pollinatorgarden.jpg
│   └── royalpalmavenue.jpg
├── map/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── preview/
    ├── preview.png
    ├── preview_info.png
    └── preview_tag.png
```

## 目录说明

- `map/`：网页主程序目录。
  - `index.html`：页面入口。
  - `styles.css`：页面布局、地图样式、按钮和弹窗样式。
  - `app.js`：地图点位、路线、中英文文本、交互逻辑。
- `basemap/`：底图资源，包括 PNG 和 SVG 版本。
- `fig/`：景点详情中使用的图片素材。
- `preview/`：项目预览图片，可用于展示或文档说明。

## 如何使用

### 1. 本地打开

这是一个静态网页项目，可以直接用浏览器打开：

```text
map/index.html
```

也可以在项目根目录启动一个本地静态服务器：

```bash
python3 -m http.server 8000
```

然后在浏览器访问：

```text
http://localhost:8000/map/
```

### 2. 资源路径检查

当前页面入口在 `map/` 目录下，因此地图底图和图片路径需要与 `map/index.html`、`map/app.js` 中的引用保持一致。

如果打开页面后底图或照片没有显示，请检查：

- `tourist_map_base.svg` 是否能被 `map/index.html` 正确访问；
- `fig/*.jpg` 图片路径是否与 `app.js` 中的图片路径一致；
- 如果移动了资源目录，需要同步修改 `map/index.html` 和 `map/app.js` 中的路径。

### 3. 修改地图内容

主要修改位置在 `map/app.js`：

- `mapConfig`：设置地图底图、尺寸、标题和替代文本。
- `categories`：设置分类按钮，例如餐厅、洗手间、停车场、凉亭。
- `places`：设置设施点位的坐标、名称和说明。
- `numberedPointCoordinates`：设置编号景点在地图上的位置。
- `numberedLegend`：设置编号景点的中英文名称。
- `numberedPhotoMap`：设置景点对应的图片。
- `numberedDetailMap`：设置景点停留时间和介绍文字。
- `route`：设置推荐游览路线。

坐标使用百分比形式：

```js
{ x: 56.74, y: 39.26 }
```

其中 `x` 表示从地图左侧到右侧的位置，`y` 表示从地图顶部到底部的位置。

## 主要功能

- 地图拖拽与缩放
- 景点编号标注
- 分类设施显示
- 推荐路线显示
- 景点详情弹窗
- 中英文切换
- 点位标注与路线采点辅助

## 快捷键

- `M`：开启或关闭设施点位标注模式。
- `R`：开启或关闭路线采点模式。
- `Esc`：退出当前标注模式或关闭详情弹窗。

标注结果会临时保存在浏览器的 `localStorage` 中，也可以通过页面按钮复制坐标。

## GitHub Pages 部署

上传到 GitHub 后，可以使用 GitHub Pages 部署静态页面。由于入口文件位于 `map/index.html`，访问地址通常类似：

```text
https://你的用户名.github.io/仓库名/map/
```

如果希望直接访问仓库主页就打开地图，可以把 `map/index.html` 移到项目根目录，或在根目录新增跳转页面。
