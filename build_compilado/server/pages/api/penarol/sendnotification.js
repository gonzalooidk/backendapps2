"use strict";
(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 6429:
/***/ ((module) => {

module.exports = require("expo-server-sdk");

/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendnotification)
/* harmony export */ });
/* harmony import */ var expo_server_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var expo_server_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(expo_server_sdk__WEBPACK_IMPORTED_MODULE_0__);

let expo = new expo_server_sdk__WEBPACK_IMPORTED_MODULE_0__.Expo();
// Documentacion: https://github.com/expo/expo-server-sdk-node
// https://docs.expo.dev/push-notifications/sending-notifications/#individual-errors
async function sendnotification(req, res) {
    if (req.method === "POST") {
        let body = JSON.parse(req.body);
        let users = body.users; // Objeto que contiene objetos en fomrato ID_FIREBASE: {token: TOKEN_EXPO , id: ID_FIREBASE}
        let info = body.info; // Contiene la informacion de la notificacion titulo descripcion y screen
        let data = info.data ? info.data : {}; // Contiene los parametros que son recibidos en la APP
        let messages = [];
        let userFinal = {};
        let errorChunk = 0;
        for(let keyIDFire in users){
            let user = users[keyIDFire];
            if (!expo_server_sdk__WEBPACK_IMPORTED_MODULE_0__.Expo.isExpoPushToken(user.token)) {
            // console.log("No es un token de expo!");
            } else {
                userFinal[user.id] = user;
            }
        }
        for(let key in userFinal){
            let user1 = userFinal[key];
            messages.push({
                to: user1.token,
                channelId: "default",
                title: info.title,
                body: info.description,
                data: JSON.stringify({
                    screen: info.screen,
                    data
                })
            });
        }
        let chunks = expo.chunkPushNotifications(messages); // Contendra arrelgo con los push dividos en diferentes array si son muchos
        let tickets = [];
        // Envio notificaciones por primera vez
        let enviarPush = async ()=>{
            for (let chunk of chunks){
                try {
                    let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                    tickets.push(...ticketChunk);
                } catch (error) {
                    console.log("Error del chunk: ", error);
                    // Para poner el ID de los que no se pudieron enviar igual, 
                    // para cuando borrar los index sean correctos
                    let indexArray = chunk.map((el)=>undefined);
                    tickets.push(...indexArray);
                    errorChunk += 1;
                    chunksError.push(chunk);
                }
            }
            return;
        };
        await enviarPush();
        let DeviceNotRegisteredCount = 0;
        let DiviceNoRegisterUserId = [];
        let usersArray = Object.keys(userFinal);
        tickets.forEach((el, i)=>{
            if (el == undefined) {
                return;
            }
            if (el.status == "error") {
                if (el.details.error == "DeviceNotRegistered") {
                    DeviceNotRegisteredCount += 1;
                    let idFireUser = usersArray[i];
                    DiviceNoRegisterUserId.push(idFireUser);
                }
            }
        });
        console.log("Los ticket son", tickets);
        let notificationsSended = tickets.length;
        let notificationsError = tickets.filter((el)=>el?.status != "ok").length;
        let notificationSuccess = notificationsSended - notificationsError;
        let responseToFront = {
            notificationsSended,
            notificationsError,
            notificationSuccess,
            DeviceNotRegisteredCount,
            DiviceNoRegisterUserId,
            errorChunk
        };
        res.json(responseToFront);
    }
    res.status(500).json({
        message: "ACCESS DENIED"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(722));
module.exports = __webpack_exports__;

})();