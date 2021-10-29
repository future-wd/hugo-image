// images which have the lazyloading class are invisible by default (so noscript works out of the box)
// add js tag to <html> so that images are visible
document.documentElement.classList.add('js');
// import lazysizes
import 'lazysizes';
// import native lazy loading plugin
import 'lazysizes/plugins/native-loading/ls.native-loading';
