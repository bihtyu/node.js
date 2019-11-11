const nunjucks = require('nunjucks')

function createEnv(path, opts) {
  var
      autoscape = opts.autoscape === undefined ? true : opts.autoscape,
      noCache = opts.noCache || false,
      watch = opts.watch || false,
      throwOnUndefined = opts.throwOnUndefined || false,
      env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('views', {
          noCache: noCache,
          watch: watch,
        }), {
          autoscape: autoscape,
          throwOnUndefined: throwOnUndefined
        }
      );
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

var env = createEnv = createEnv('views', {
  watch: true,
  filters: {
    hex: function (n) {
      return '0x' + n.toString(16);
    }
  }
})