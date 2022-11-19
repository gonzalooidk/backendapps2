"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 4142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handlerLogin)
});

;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
;// CONCATENATED MODULE: ./pages/api/login.js

function handlerLogin(req, res) {
    let passwordDB = "Dinero20";
    let passwordInserted = req.body.pass;
    if (passwordDB === passwordInserted) {
        // Seteo la Cookie durara 24 horas https://www.npmjs.com/package/cookies-next
        (0,external_cookies_next_namespaceObject.setCookie)("server-key", "logued", {
            req,
            res,
            maxAge: 60 * 60 * 24
        });
        res.redirect("/dashboard");
    } else {
        res.redirect("/");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4142));
module.exports = __webpack_exports__;

})();