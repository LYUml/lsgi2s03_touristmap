# lsgi2s03_touristmap

An interactive tourist map web project for the Royal Botanical Garden. The project is built with plain HTML, CSS, and JavaScript, with no build tools required. Main features include map browsing, categorized points of interest, numbered attractions, route display, English/Chinese language switching, and coordinate marking.

## Project Structure

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

## Directory Guide

- `map/`: Main web app directory.
  - `index.html`: Page entry point.
  - `styles.css`: Page layout, map styling, buttons, and drawer styles.
  - `app.js`: Map points, routes, bilingual text, and interaction logic.
- `basemap/`: Base map assets, including PNG and SVG versions.
- `fig/`: Image assets used in attraction detail panels.
- `preview/`: Project preview images for display or documentation.

## How to Use

### 1. Open Locally

This is a static web project. You can open it directly in a browser:

```text
map/index.html
```

You can also start a local static server from the project root:

```bash
python3 -m http.server 8000
```

Then open this URL in your browser:

```text
http://localhost:8000/map/
```

### 2. Check Asset Paths

The page entry point is inside the `map/` directory, so the base map and image paths need to match the references in `map/index.html` and `map/app.js`.

If the base map or photos do not appear after opening the page, check:

- Whether `tourist_map_base.svg` can be correctly accessed by `map/index.html`.
- Whether the `fig/*.jpg` image paths match the paths used in `app.js`.
- If you move any asset directories, update the related paths in both `map/index.html` and `map/app.js`.

### 3. Edit Map Content

Most map content can be edited in `map/app.js`:

- `mapConfig`: Sets the base map, dimensions, title, and alt text.
- `categories`: Sets category buttons, such as restaurants, toilets, vehicle parks, and summer houses.
- `places`: Sets facility point coordinates, names, and descriptions.
- `numberedPointCoordinates`: Sets numbered attraction positions on the map.
- `numberedLegend`: Sets English and Chinese names for numbered attractions.
- `numberedPhotoMap`: Sets images for specific attractions.
- `numberedDetailMap`: Sets recommended stay time and description text for attractions.
- `route`: Sets the recommended tourist route.

Coordinates use percentage values:

```js
{ x: 56.74, y: 39.26 }
```

Here, `x` represents the position from the left to the right of the map, and `y` represents the position from the top to the bottom of the map.

## Main Features

- Map dragging and zooming
- Numbered attraction markers
- Categorized facility display
- Recommended route display
- Attraction detail drawer
- English/Chinese language switching
- Coordinate marking and route point collection

## Keyboard Shortcuts

- `M`: Turn facility point marking mode on or off.
- `R`: Turn route point collection mode on or off.
- `Esc`: Exit the current marking mode or close the detail drawer.

Marked results are temporarily saved in the browser's `localStorage`. You can also copy coordinates using the page buttons.

## GitHub Pages Deployment

After uploading the project to GitHub, you can deploy it with GitHub Pages. Since the entry file is located at `map/index.html`, the published URL will usually look like this:

```text
https://your-username.github.io/repository-name/map/
```

If you want the map to open directly from the repository homepage, you can move `map/index.html` to the project root or add a redirect page in the root directory.
