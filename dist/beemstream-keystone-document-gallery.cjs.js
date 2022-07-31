'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./beemstream-keystone-document-gallery.cjs.prod.js");
} else {
  module.exports = require("./beemstream-keystone-document-gallery.cjs.dev.js");
}
