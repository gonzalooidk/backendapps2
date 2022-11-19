"use strict";
(() => {
var exports = {};
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 8018:
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ 7383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrapmatch)
/* harmony export */ });
const puppeteer = __webpack_require__(8018);
async function scrapmatch(req, res) {
    if (req.method != "POST") {
        res.status(500).json({
            message: "ACCESS DENIED"
        });
        return;
    }
    let body = JSON.parse(req.body);
    let url = body.url;
    async function scrape() {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector(".tabs__tab");
        // Scrapeo la liga
        let ligue = await page.waitForSelector(".tournamentHeader__country > a");
        let valueLigue = await ligue.evaluate((el)=>el.textContent);
        // Scrapeo el horario y dia
        let dayhour = await page.waitForSelector(".duelParticipant__startTime");
        let valueDayhour = await dayhour.evaluate((el)=>el.textContent);
        dayhour = valueDayhour.split(" ");
        let valueDay = dayhour[0];
        let valueHour = dayhour[1];
        // Scrapeo equipo local:
        let localTeamName = await page.waitForSelector(".duelParticipant__home > .participant__participantNameWrapper");
        let localTeamNameValue = await localTeamName.evaluate((el)=>el.textContent);
        let localTeamImg = await page.waitForSelector(".duelParticipant__home > .participant__participantLink--team > .participant__image");
        let localTeamImgValue = await localTeamImg.evaluate((el)=>el.src);
        // Scrapeo equipo visitante:
        let awayTeamName = await page.waitForSelector(".duelParticipant__away > .participant__participantNameWrapper");
        let awayTeamNameValue = await awayTeamName.evaluate((el)=>el.textContent);
        let awayTeamImg = await page.waitForSelector(".duelParticipant__away > .participant__participantLink--team > .participant__image");
        let awayTeamImgValue = await awayTeamImg.evaluate((el)=>el.src);
        let responseToFront = {
            valueLigue,
            valueDay,
            valueHour,
            localTeamNameValue,
            localTeamImgValue,
            awayTeamNameValue,
            awayTeamImgValue
        };
        res.json(responseToFront);
    }
    scrape();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7383));
module.exports = __webpack_exports__;

})();