# Hugo responsive images

## This readme is for version 3
## [click here for version 2](https://github.com/future-wd/hugo-image/tree/master/v2)

## Configuration

All configuration items have been provided in the module. To override simply copy and paste the following into your own site config:

```yaml
params:
  image:
    widths: [600, 900, 1300]
    # shortcodeWidths: [600, 900, 1300] # custom widths for shortcode use in markdown files
    # renderHookWidths: [600, 900, 1300] # custom widths for render hook use in markdown files
    densities: [1,2] # densities which are output when an image width is specified
    class: img-fluid # default image class if no class is specified
    figureClass: figure # default figure class
    figcaptionClass: figure-caption # default figcaption class
    figureImageClass: figure-img # default figure image class (appended to image class)
    lazysizes: true # enable integration of the lazysizes js library
    renderHook: true # set to false to disable included markdown image render hook
```

## Hugo image processing configuration options

FIX

## Usage as a layout partial

The following example shows all configuration options. The only required option is "src".

Fixed/responsive width images and page/global resource images have been merged into two examples for brevity. The options are interchangable.

// style comments have been used for clarity

### Fixed width, page resource

```html
{{ $opts := (dict
  "page" . // the current page context if src is a page resource.
  "src" "image.jpg" // relative to the current pages markdown file
  "width" "300" // width in pixels if a fixed width image is desired.
  // optional
  "densities" (slice 1 2) // fill densities for fixed width image
  )}}
{{ partial "image" $opts }}
```

### Responsive width, global resource

```html
{{ $opts := (dict
  "src" "images/image.jpg" // relative to the the assets folder as no page context has been provided
  // optional 
  "widths" (slice 400 800 1200) // override default responsive widths. 
  "sizes" [string] // set the sizes property for the image tag, defaults to "100vw" or "auto" if lazysizes is enabled in the config and installed into the website
  )}}
{{ partial "image" $opts }}
```

### Cropping an image to an aspect ratio FIX

```html
  "fillRatio" (slice 4 3) // provide a height by width ratio as a slice if fill to ratio is desired 
  "anchor" [string] // override default anchor for crop if fillRatio is set. options are "Smart" "Center" "TopLeft"
```

### Further options

```html
  "title" [string] // set the image title. If not set, figureTitle then the page's title will be used.
  "alt" [string] // set the alt text. If not set the figure caption is used, else "Image of [title]" used.
  "class" [string] // override the default image class
  "rotate" [int] // provide an integer between 1-360 to rotate counter-clockwise
  "loading" "auto" // remove lazyloading (either via lazysizes or stock browser functionality)
  // override image processing configuration 
  "resampleFilter" [string] // override default resample filter. Options are "Box" or "NearestNeighbor" or "Linear" or "Gaussian"
  "quality" [int] // override default image compression quality, between 1-100
  "hint" [string] // provide default hint for webp conversion. options are "Top" "TopRight" "Left" "Right" "BottomLeft" "Bottom" "BottomRight"
```

## Figure used as an layout partial

FIX

## Usage as a shortcode

The shortcode accepts the same parameters with the following differences:

* figure=true is used to enable figure behavior
* arrays are expressed as strings delimited with commas e.g. widths="400,800"
* the page context is not provided, its already available in the shortcode
* to use a global resource you need to set global=true

e.g.

### Customizing shortcode behavior

To set defaults responsive widths only for use with shortcodes modify the config params.image.shortcodeWidths.

If you wish to set defaults for shortcode behavior you need to copy and paste /layouts/shortcodes/image.html out of the modules github source and into your project.

This is an example of how to override....

## Usage as a markdown render hook

By default a markdown render hook template has been included. To turn it on set the config params.image.renderHook: true. It has been disabled by default as it will break existing pages which have markdown files which reference images in the static folders.

The render hook will only render page resource images - the image path will be relative to the page's markdown file.

### Customizing markdown render hook behavior

The responsive image widths used in the render hook template default to the short code widths, and then the standard default widths.

To set defaults responsive widths only for use with the render hook modify the config params.image.renderHookWidths.

If you wish to set defaults for renderHook behavior you need to copy and paste /layouts/_markup/render-image.html out of the modules github source and into your project. See above for an example on how to set default behaviors.

\
## Installation

### As a module

``` TOML

## config.toml
# at the bottom of the file (below top level configs)
[module]
[[module.imports]]
  path = 'github.com/future-wd/hugo-image'

```

``` YAML

# config.yaml
module:
  imports:
  - path: github.com/future-wd/hugo-image

```

## Prerequisites

- You must install the latest GoLang (minimum 1.12). See <https://golang.org/dl/>.
- You must have a VCS client e.g. git. See <https://git-scm.com/downloads/>.
- Install the latest hugo (at least 0.83.0)

## Sample usage

### Page bundle resource

## Sample config

### YAML

The first line can be omitted if using a params.yaml file. Defaults have been shown.

```YAML
params:
  image:
    format: ["webp" "original"]
    placeholder: blur
    loading: lazy
    minWidth: 500
    maxWidth: 4000
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    linkClass: ""
  figure:
    class: figure
    titleClass: h4
    imageClass: figure-img
    figcaptionClass: figure-caption
    attrLinkClass: ""
  lazyLibrary:
    enabled: false
    dataSrcSet: true
    dataSrc: false
    dataSizes: true
    imageStyle: "display:block;width:100%;"
    imageClass: lazysizes
    figureStyle: "display:block!important;"
    noscript: false

```

### TOML

### Noscript required HTML, JS and CSS

The following elements are required for the `<noscript>` module to work. The script must come first.

```HTML

<html class="no-js">
  <head>
    <script>
      document.documentElement.className = document.documentElement.className.replace("no-js", "js");
    </script>
    <title>Title</title>
    <style>
      /* can also be included in a css file */
      .no-js img.lazyload {
          display: none;
        }
    </style>
  </head>
  <body>

  </body>
</html>

```
