'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./autop-keystone-document-image.cjs.prod.js");
} else {
  module.exports = require("./autop-keystone-document-image.cjs.dev.js");
}
