# TODO

ADD:

- [*] ratio as slice/array [3 2]  width/height  e.g. [16 9] [4 3] instead of quotient

- [*] loading="auto" for above the fold

- [ ] add css for transition between blur/solid placeholder and loaded image

- [*] "data" support e.e.g "data" "data-aos='fade-left"

- [ ] if image width is less than maxWidth, add a new width with the images width (as you will miss at least 1 width e.g. 1000, 1500, 2000 with image of 1400 1500 is missed)

- [*] .widths support to override widths e.g. (slice 400 500 600)

- [*] responsive and noscript css for js library

FIX

- [ ] fix .width sanitization and errorf - currently an error is not thrown???

- [*] update noscript section to match img tag

- [*] intrinsic broken - displays 0x0 - possible fix by commenting out sizer (used for svg). possible old code has been commented out. Removed all bloat code

- [*] placeholder size is not based on outputted image. fixed by accessing outputted image width and height

- [*] access original image format with $sourceMap.original ????

IMPROVEMENTS

- [ ] easy way to base sizes off bootstrap e.g. col-md-6 ???? maybe something in readme??

- [ ] customize device sizes to match bootstrap breakpoints. 

- [ ] default maxSize for bootstrap container-xxl

- [ ] add page number and line to error messages

- [ ] add github workflow to test???? https://github.com/peaceiris/actions-hugo check hyas. is this even possible??

- [ ] scale lqip based on image size?? only possible on fixed/intrinsic???

- [ ] placeholder handling for non resource bundle images

- [ ] create a map of image width for srcset and image e.g. 1x, image300.jpg or 300w, image300.jpg

- [ ] should layout fill only use device sizes or also image sizes?

EXTERNAL IMAGE SUPPORT

- [ ] support for netlify (default) and other external image processing

- [ ] choose placeholder color for external image???

- [ ] generate placeholder for external image??

- [ ] imageconfig to get width/hight from non resource bundle images - would this be useful?  

- [ ] does width/height need to be provided

loader: 'imgix',  vercel, cloudinary, akamai, netlify
path: 'https://example.com/myaccount/',
takes src, width and quality and adds to path based on loader

INVESTIGATE

- [ ] add .filter support????? how would this be implemented for on image hover etc ????

CONFIG TO DO

- [*] targetFormat

- [*] deviceSizes

- [*] imageSizes

- [*] minWidth

- [*] maxWidth

- [ ] figure config - possibly remove figure style if image style includes !important

- [*] lazyLibrary.enabled  DISABLE on `loading="auto"` or `loading="eager"`. set by if and $lazyLibrary $dataSrc

- [ ] change min and max width to match common bs5 usage e.g. container-xxl and image half of mobile screen wide. Also change widths to match bs5 breakpoints. Ignore sm as its narrower than col 

- [ ] add attrLink rel and target

- [*] lazyLibrary and dataSrc add to image and picture

- [*] lazylibrary config

- [ ] global config for target, rel

- [ ] additional variable sanitisation and error/warning messages???

- [ ] support for image config via params

- [ ] example configs with defaults yaml, toml, json

DOCS

- [ ] Example configs - do TOML for 1.0 release
- [ ] Prioritise order of configs?

- [ ] check all figure configs can be set inline
- [ ] check all standard configs can be set inline

EXAMPLE SIZES - BOOTSTRAP 5 BREAKPOINTS

sm-6
(min-width: 576px) 50vw, 100vw

md-4
(min-width: 768px) 33.33vw, 100vw

md-5
(min-width: 768px) 41.67vw, 100vw

md-6
(min-width: 768px) 50vw, 100vw

md-7
(min-width: 768px) 58.33vw, 100vw

md-8
(min-width: 768px) 66.67vw, 100vw

md-9
(min-width: 768px) 75w, 100vw

lg-6
(min-width: 992px) 50vw, 100vw

xl-6
(min-width: 1200px) 50vw, 100vw

xxl-6
(min-width: 1400px)

6 = 6/.12 = 50

3 = 3/.12 = 25

etc.
