var bs = require("browser-sync").create();

//тут
bs.watch(['osnovy/*.*', 'osnovy/css/*.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "html5css3responsiv/osnovy"
});