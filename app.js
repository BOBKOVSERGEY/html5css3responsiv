var bs = require("browser-sync").create();

//тут
bs.watch(['adaptivnaya-razmetka-img/flexbox/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "html5css3responsiv/adaptivnaya-razmetka-img/flexbox"
});