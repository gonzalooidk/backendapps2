"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Menu.js



const menu = [
    {
        id: "penarol",
        name: "Canciones de Pe\xf1arol",
        hrefMain: "/dashboard/penarol",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Escudo-penarol-2015.png"
    },
    {
        id: "america",
        name: "Canciones del America",
        hrefMain: "/dashboard/america",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Club_Am%C3%A9rica_Retro.png/238px-Club_Am%C3%A9rica_Retro.png"
    }
];
function Menu(props) {
    const { 0: menuSelected , 1: setMenuSelected  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        let path = props.routePath.split("/"); // Para pintar de verde que APP esta seleccionada
        setMenuSelected(path[2]);
    }, [
        props.routePath
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "menuDashboard",
        children: menu.map((el)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: el.hrefMain,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundColor: menuSelected === el.id ? "#4eff8d" : "#fff"
                    },
                    className: "itemMenu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                width: 25,
                                height: 25
                            },
                            src: el.icon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: el.name
                        })
                    ]
                })
            }, el.id);
        })
    });
};

;// CONCATENATED MODULE: ./components/Layoutdashboard.js


function Layoutdashboard({ children  }) {
    if (children.props.router.route === "/404") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "dashboardContainer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                    routePath: children.props.router.route
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contenedorDashboard",
                    children: children
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps , router  }) {
    if (router.pathname === "/404") {
        return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        });
    }
    if (router.asPath.includes("dashboard")) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layoutdashboard, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                pageProps: pageProps,
                router: router
            })
        });
    }
    // Todas las demas paginas
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(9290)));
module.exports = __webpack_exports__;

})();