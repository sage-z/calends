const path = require('path')

function resolve (dir) {
    return path.join(process.cwd(), dir)
}

module.exports = {
    "@": resolve("app/components"),
    "core": resolve("app/core"),
    "hooks": resolve("app/hooks"),
    "scss": resolve("app/scss"),
    "tools": resolve("app/tools"),
    "typings": resolve("app/typings"),
    "layouts": resolve("app/layouts"),
    "service": resolve("app/service")
};
  