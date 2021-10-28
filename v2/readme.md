# Hugo/image

<p align="center">
Hugo/Image is next/image re-invented for hugo, with the addition of hugo's powerful image processing. 
</p>

<!-- <p align="center">
  <a href="https://github.com/future-wd/hugo-image/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/future-wd/hugo-image" alt="GitHub">
    
  </a>
  <a href="https://github.com/future-wd/hugo-image/releases">
    <img src="https://img.shields.io/github/v/release/future-wd/hugo-image?include_prereleases"alt="GitHub release (latest SemVer inc Pre Release)">
  </a>
  <a href="#" >
    <img src="https://img.shields.io/github/downloads/future-wd/hugo-image/total" alt"Github Downloads">
  </a>
</p> -->

This project is still pre-release. It has not been tested in all use cases. Feedback is welcome.

## Table of Contents

- Required Parameters

  - [General](#required-parameters)

  - [Fixed/Intrinsic Layout](#required-parameters---fixedintrinsic-layout)

  - [Responsive/Fill Layout](#required-parameters---responsivefill-layout)

- Optional Parameters

  - [General](#optional-parameters)

  - [Responsive/Fill Layout](#optional-parameters---responsivefill-layout)

  - [Fixed/Intrinsic Layout](#optional-parameters---fixedintrinsic-layout)

  - [Image Link Parameters](#optional-parameters---image-link)

  - [Figure Parameters](#optional-parameters---figures)

  - [Hugo Image Processing](#optional-parameters---hugo-image-processing)

- Global Configuration

  - [General](#global-configuration)

  - [Figure](#global-configuration---figure)

  - [Lazy Loading JS Library](#global-configuration---lazy-loading-js-library)

  - [Hugo Image Processing](#global-configuration---hugo-image-processing)

- Installation

  - [As a module](#as-a-module)

- Prerequisites

- Sample usage

  - Page bundle resource

- Sample config

  - YAML

  - TOML

- Noscript required HTML, JS and CSS

## Required Parameters

### src

String - Page Resource

### title

String - Provide the title for the image. The default alt text, if .alt or .caption are not set.

### layout

Default is `"responsive"` - options are fixed/intrinsic/responsive/fill

- `fixed` - size does not change

- `intrinsic` - scales down for smaller viewports, but does not scale up above width/height given

- `responsive` - scales up and down, requires parent block element. may not work with flex or grid

- `fill` - stretches width and height to to fill parent element. usually paired with objectFit. Parent div needs to have `position: relative` style.

## Required parameters - fixed/intrinsic layout

### width

Integer - desired width for fixed/intrinsic. 1x and 2x sizes will be produced.
Ideally you will provide an image that is double the size which you require. If the image is less than 2x the .width parameter, a 2x image will not be generated.

## Required parameters - responsive/fill layout

### sizes

String - default to 100vw. example `"(min-width: 768px) 50vw, 100vw"`

see <https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/#the-fluid-and-variable-sized-image-use-cases>

## Optional Parameters

### alt

String - alternate text for SEO and screen reader. default to .caption, and then .title if not provided

### widths

Slice (array) of desired output widths. Only for `"layout"` of `"responsive"` or `"fill"`. See global configuration below for default.

### rotate

Integer 1-360 (degrees) - counter-clockwise rotation of image. provide degrees.
see <https://gohugo.io/content-management/image-processing/#rotate>

### class

String of space separated classes for parent div/figure

### style

String of inline CSS styles for the image

### data

For adding data values to the image tag. e.g. `(dict "src" "..." "title" "..." "data" "data-aos='fade-left'"`)

### loading

String- defaults to "lazy". Can be set to "eager" or "auto". "auto" is the browser default and lets the browser manage image loading. Switching to eager may hurt performance as it forces the browser to load images regardless of their page position, browser width/height, data-saving etc. "auto" is preferred to "eager"

see <https://web.dev/browser-level-image-lazy-loading/#the-loading-attribute>

### lazyLibrary

Defaults to `false`. Enables the use of a lazy loading JS library. Setting globally through the config file is the most efficient way to set this. Inline config is for one off cases.

### placeholder

String - Show a placeholder while the image is loading. The placeholder is inlined as css (background image).
Options are `blur` (default), `solid`, `none`. Use `none` for transparent images.

- `blur` creates a low quality image with gaussian blur. (32x32px gif)

- `solid` creates a placeholder which is the most prominant color in the image. (faster loading as its only 1x1px gif)

- `none` - no image placeholder.

### fillRatio

Not set by default. Slice (array) of 2 Integers - Tell hugo the desired ratio of the processed photo. Useful for keeping a range of photos the same width for display, or cropping to square for a instagram style layout. Provide the desired width and height ratio as a slice/array of integers e.g. (slice 16 9), (slice 3 2), (slice 1 1) (square).

The image will be cropped. The anchor for cropping can be set with `fillAnchor` or default set via the projects config file. Smart cropping used by default. If both `fillRatio` and `fillHeight` are set, `fillRatio` takes precedence. `fillHeight` is used only for fixed/intrinic layout.

### fitRatio

Not set by default. Same format as `fillRatio` above, except no cropping takes place. For fixed/intrinsic layout, `fitHeight` can be alternatively set. If the input image is not the same ratio as specified, you will get "white space".The images original aspect ratio will be maintained.

## Optional Parameters - responsive/fill layout

### maxWidth

Defaults to `1980` (px) - maximum width that a responsive/fill image will be resized to.

This default max width corresponds with an image inside a bootstrap .container-xxl. For images which need to resize wider, adjust the value here or globally. Bootstrap's container-xxl has a max-width of 1320px. At a pixel density of 1.5x, the browser requires an image width of 1980.

### minWidth

Defaults to `576` (px) - minimum width that a responsive/fill image will be resized to.

This default value corresponds to a full width image being displayed on a mobile screen (Bootstrap XS) at a screen pixel density of 1x. If the image is less than full screen width for the smallest breakpoint, adjust minWidth to suit.

### objectFit

default is cover

options are fill, contain, cover, none, scale-down

<https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit>

### objectPosition

can be a combination of left/center/right and top/center/bottom e.g. left-top

## Optional Parameters - fixed/intrinsic layout

### fillHeight

Not set by default - Provide hugo with the desired height for scaling. The image will be cropped. The anchor for cropping can be set with .fillAnchor or via the projects config file. Smart cropping used by default. fillHeight will not be parsed if .fillRatio has been set.

### fitHeight

Provide hugo with the desired height for scaling. Aspect ratio will be maintained. If the aspect ratio of the image does not match the ratio of .width and .fitHeight, one edge of the image will be shorter than the defined size, to maintain the aspect ratio.

## Optional Parameters - Image link 

Link is most useful for figures, so that you are only linking the image component of the figure. Otherwise its generally easier to link manually with HTML.

### link

Not enabled by default. URL (String) for `<a>` tag.

None of the options below will work if `link` has not been set.

### linkClass

Default is "" can be set in params Classes (string with spaces) for `<a>` tag. Separate multiple classes with spaces e.g. "link-primary bg-secondary"`.

### linkTarget

Default is "" can be set in params Options are  `"_self"` (the browser default), `"_blank"`, `"_parent"`, `"_top"`, `"framename"`.

### linkRel

Default is "" can be set in params Example options are `"noopener"`, `"nofollow"`, "`noreferrer`". Separate multiple values with spaces e.g. `"noopener nofollow"'.

## Optional Parameters - Figure

The defaults for all of these options can be set globally - see below.

### figure

Defaults to `false`. Set to `true` to wrap the image in a `<figure>` tag. This also enables you to set the options below.

### figcaptionClass

Defaults to `"figure-caption"`. Add a CSS class to the `<figurecaption>` tag.

### title

The title which appears in the figure, is the images title which is discussed above in the standard image options.

### titleClass

Default to `"h4"`. Add a class to the figure caption title `<div>`.

### figureClass

Defaults to "figure". Add a class to the `<figure>` tag.

### caption

Not enabled by default. Figure caption (string) - markdown will be rendered. If `alt` has not been set, caption will be used.

### attr

Not enabled by default. Image attribution e.g. Author (string) - mark down rendered.

### attrLink

Not enabled by default. URL for attribution (string).

## Optional Parameters - Hugo Image Processing

Note that the defaults provided below can be changed in the projects config file.
see <https://gohugo.io/content-management/image-processing/#image-processing-config>

### resampleFilter

The filter used for resizing the image. Options are Box (default), NearestNeighbor, Linear, Gaussian
Box is simple and fast for downscaling.
see <https://gohugo.io/content-management/image-processing/#resample-filter>

### quality

The quality for image compression between 1-100. Default is 75. Applies to jpeg and webp only.
see <https://gohugo.io/content-management/image-processing/#jpeg-and-webp-quality>

### hint

For webp image format only. Options are photo (default), picture, drawing, icon, or text
see <https://gohugo.io/content-management/image-processing/#hint>

### fillAnchor

Tell hugo where to anchor the crop when using .fillRatio, options are Smart (default), Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
see <https://gohugo.io/content-management/image-processing/#anchor>

### bgColor
Not needed unless a target format is configured which does not support transparency e.g. jpg
Provide a hex color.
see <https://gohugo.io/content-management/image-processing/#background-color>

## Global Configuration

The following are set in params.yaml or params.yaml see the example below.

### format

Defaults to ["webp" "original"]. "original" must be included as its the fall back format.
Valid values are jpg, png, tif, bmp, gif and webp. BMP generally not recommended for web usage.
List in order of file size, not browser support. Currently no AVIF support.
<https://gohugo.io/content-management/image-processing/#target-format>

### placeholder

Default placeholder format. Defaults to `blur`. Can be changed to `solid` or `empty`.

### loading

Default loading parameter for image tag. Defaults to `lazy`. Can be changed to `auto` to disable default lazy loading behaviour.

### layout 

Default image handling. Default is `responsive` can be set to `intrinsic`, `fixed` and `fill`.

### objectFit

Default object-fit. Defaults to `cover`. Can be set to `fill, contain, cover, none, scale-down`./

### minWidth

Set default minimum width in pixels that a responsive/fill image will be resized to. Defaults to `500`.

### maxWidth

Set default maximum width in pixels that a responsive/fill image will be resized to. Defaults to `4000`.

### deviceSizes

screen widths to be targetted when `layout` is `responsive` or `fill` defaults to [640, 750, 828, 1080, 1200, 1920, 2048, 3840]

### imageSizes

screen widths to be targetted when `layout` is `responsive` or `fill` defaults to [16, 32, 48, 64, 96, 128, 256, 384]. deviceSizes and imageSizes are concatenated.

## Global Configuration - Placeholder

## placeholder.style

The placeholder style. Defaults to `blur` can be changed to `empty, color, solid`. `blur` and `solid` only work with js or inline placeholders.

## placeholder.type

The type of placeholder that will be generated. Defaults to `js` for a lazy loading library. Can be changed to `css` or `inline`.

## placeholder.blur.amount

Amount of gaussian blur to apply to blurred placeholder. Defaults to 3.

## placeholder.blur.size 

The size of the low quality image placeholder to generate (for type = blur). Defaults to `50`.

## Global Configuration - link

### link.class

Defaults to `""` (null). Allows you to add a class if you have specified a url link for the image with `link` (see above).

### link.rel

Defaults to null. `<a rel="...">` text

### link.target

Defaults to null. `<a target="...">` text.

## Global Configuration - Figure

The following defaults are for Bootstrap 5. All of the following can be set inline using dict. See above for usage.

### figure.class

Defaults to `"figure"`. The css class applied to the figure tag.

### figure.titleClass

Defaults to `"h4"`. The css class for the figure's title.

### figure.imageClass

Defaults to `"figure-img"`. This css class is added to the image, if `"figure"` is enabled inline.

### figure.figcaptionClass

Defaults to ``"figure-caption"`. The css class for the figures caption (`<figcaption>` tag) which is below the title `<div>`.

### figure.attrLinkClass
Defaults to `""` (null). Allows you to add a class if you have specified a url link for the figure's attribute.

## Global Configuration - Lazy loading JS library

The following is configured by default to work with [the lazysizes JS library](https://github.com/aFarkas/lazysizes "Github docs page"). Aside from `lazyLibrary.enabled`, these can only be set in the config file.

### lazyLibrary.enabled

Default `false`. True to enable a 3rd party lazy loading library. Configured by default for lazysizes. (You still need to include the lazysizes JS library with concat or ESBuild.) This option is automatically disabled if you set `loading="auto"` or `loading="eager"`. Can also be set inline with `lazyLibrary` (See above).

### lazyLibrary.dataSrcset

Default `true`. Replaces the `srcset="..."` attribute with `data-srcset` so the JS library can control the lazyloading of the image sources.

### lazyLibrary.dataSrc

Default `true`. Replaces the `src="..."` attribute with `data-src` to enable the JS library to control the lazy loading of the image where `srcset` is not supported.  If you enable this, if you wish to support non-js browsers, you need to turn on `<noscript>` support below.

### lazyLibrary.dataSizes

Default `true`. Replaces the `sizes="..."` attribute with `data-sizes="auto"`. The JS library will calculate the size of the image based on CSS. This also adds the following CSS as an inline style. See below to configure.

### lazyLibrary.imageStyle

Default `"display:block;width:100%;"`. This enables the image to responsively resize, based on the width inserted into the `sizes` attribute by the JS library. This string is added when `lazyLibrary.dataSizes` is enabled. 

### lazyLibrary.loadingClass

Default `"lazyload"`. This string is added as a class name to the image. This informs the JS library that you would like to lazy load the image. This default class is also used for the `<noscript>` section below.

### lazyLibrary.loadedClass

Default `"lazyloaded"` used for the CSS file.

### lazyLibrary.loadingClass

Default `"lazyloading"` used for the CSS file.

### lazyLibrary.blurUp

Default `true`. Enables blur up css for placeholder.

<!-- ## lazyLibrary.figureStyle

Default `"display:block!important;"`. Enables the bootstrap figure to display properly, when using the above inline image style. -->

### lazyLibrary.noscript

Enable `<noscript>` support. This is required if `lazyLibrary.dataSrc` is set to true, if you wish to support non-js browsers. See below for the JS script and CSS required to support the `<noscript>` tag, so that the JS dependent image is hidden, and only the `<noscript>` fallback image is shown.

## Global Configuration - Hugo Image Processing

see <https://gohugo.io/content-management/image-processing/#image-processing-config>

quality

hint

anchor

bgcolor

next/image required
width = set fixed width  ..next/image required for  all except statically imported or layout=fill
height =   required as above. redundant for responsive??

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

## Required CSS

In the head use the following partial

`{{- partial "image/css" . -}}`

## Optional LazySizes library (required by default)

Either import yourself or use the following partial in the head

`{{- partial "image/lazysizes" . -}}`

You must install lazysizes with `npm i lazysizes`

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

to be updated

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

# USE CASES

## 1. Native lazy loading, no JS scripts, no Inline Styles, no placeholder

WORKING

``` YAML
image:
  placeholder:
    style: empty
  lazyLibrary:
    enable: false
```

## 2. Native lazy loading, no JS scripts, no Inline Styles, solid color placeholder

NOT WORKING

``` YAML
image:
  placeholder:
    style: color
    color: "#eee"
    type: css 
  lazyLibrary:
    enable: false
```

## 3. Native lazy loading, no JS scripts, Inline style for placeholder

WORKING

``` YAML
image:
  placeholder:
    style: blur # or solid
    type: inline
    blur:
      amount: 6 # amount of gaussian blur
      size: 50 # pixel size of placeholder (which is stretched to the image's size)
  lazyLibrary:
    enable: false
```

## 4. JS Lazy loading with LazySizes, inline image placeholder, automatic sizes="...", noscript fall back

- Placeholder image is inlined as a base64 data uri

- Lazysizes is configured to utilise native lazy loading if its available in the browser

- You must import the lazysizes.html partial in the documents head

- You must run `npm install lazysizes` to install lazysizes as a project dependency

``` YAML
image:
  placeholder:
    style: blur # or solid
    type: js
    blur:
      amount: 6 # amount of gaussian blur
      size: 50 # pixel size of placeholder (which is stretched to the image's size)
  lazyLibrary:
    enable: true
```