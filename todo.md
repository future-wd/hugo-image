# TODO

v1.0.0 move to new repo and announce!


ADD:

- [ ] add lquip and blur transition and css

- [ ] noscript

- [ ] add css for transition between blur/solid placeholder and loaded image

- [ ] "data" support e.e.g "data" "data-aos='fade-left"

- [ ] if image width is less than maxWidth, add a new width with the images width (as you will miss at least 1 width e.g. 1000, 1500, 2000 with image of 1400 1500 is missed) add leeway of e.g. 100px

- [*] .widths support to override widths e.g. (slice 400 500 600)

- [ ] noscript css for js library

FIX

- [ ] fix .width sanitization and errorf - currently an error is not thrown???

IMPROVEMENTS

- [ ] easy way to base sizes off bootstrap e.g. col-md-6 ???? maybe something in readme?? add a returning partial?

- [ ] add page number and line to error messages

- [ ] add github workflow to test???? https://github.com/peaceiris/actions-hugo check hyas. is this even possible??

- [ ] scale lqip based on image size?? only possible on fixed/intrinsic???

- [ ] placeholder handling for non resource bundle images

- [*] create a map of image width for srcset and image e.g. 1x, image300.jpg or 300w, image300.jpg


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

- [ ] add attrLink rel and target

- [ ] global config for target, rel

- [ ] additional variable sanitisation and error/warning messages???


DOCS


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
