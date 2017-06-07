var bs = require("browser-sync").create();

//тут
bs.watch(['media-query/example-1/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "html5css3responsiv/media-query/example-1"
});