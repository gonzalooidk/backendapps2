"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function APPmenu() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    let nameRoute = router.asPath.split("/");
    nameRoute = nameRoute[3];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-app-menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/dashboard/america/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        background: nameRoute ? "#fff" : "#4eff8d"
                    },
                    children: "Configuracion"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/dashboard/america/canciones",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        background: nameRoute === "canciones" ? "#4eff8d" : "#fff"
                    },
                    children: "Canciones"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/dashboard/america/noticias",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        background: nameRoute === "noticias" ? "#4eff8d" : "#fff"
                    },
                    children: "Noticias"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/dashboard/america/partido",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        background: nameRoute === "partido" ? "#4eff8d" : "#fff"
                    },
                    children: "Partido"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/dashboard/america/notificaciones",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        background: nameRoute === "notificaciones" ? "#4eff8d" : "#fff"
                    },
                    children: "Notificaciones"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APPmenu);


/***/ }),

/***/ 8842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Is": () => (/* binding */ PATH_api_scrap_match),
/* harmony export */   "br": () => (/* binding */ PATH_api_send_notification),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export appFire */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyCRFlszsQXKGAkjhrTNNuwJPiWfVpNhJk8",
    authDomain: "appamerica-a16fb.firebaseapp.com",
    databaseURL: "https://appamerica-a16fb.firebaseio.com",
    projectId: "appamerica-a16fb",
    storageBucket: "appamerica-a16fb.appspot.com",
    messagingSenderId: "253831284338",
    appId: "1:253831284338:web:885b252bee72b0d17264eb"
};
const appFire = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig, "america");
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(appFire);
const PATH_api_send_notification = "/api/america/sendnotification";
const PATH_api_scrap_match = "/api/america/scrapmatch";


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;