const puppeteer = require('puppeteer');


export default async function scrapmatch(req, res) {
    if(req.method != "POST") {
        res.status(500).json({ message: 'ACCESS DENIED'})
        return;
    }

    let body = JSON.parse(req.body);
    let url = body.url;
    
    async function scrape() {
        const browser = await puppeteer.launch({})
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector(".tabs__tab");
        
        // Scrapeo la liga
        let ligue = await page.waitForSelector(".tournamentHeader__country > a");
        let valueLigue = await ligue.evaluate(el => el.textContent);
        
        // Scrapeo el horario y dia
        let dayhour = await page.waitForSelector(".duelParticipant__startTime");
        let valueDayhour = await dayhour.evaluate(el => el.textContent);
        dayhour = valueDayhour.split(" ");
        let valueDay = dayhour[0];
        let valueHour = dayhour[1];

        // Scrapeo equipo local:
        let localTeamName = await page.waitForSelector(".duelParticipant__home > .participant__participantNameWrapper");
        let localTeamNameValue = await localTeamName.evaluate(el => el.textContent);

        let localTeamImg = await page.waitForSelector(".duelParticipant__home > .participant__participantLink--team > .participant__image");
        let localTeamImgValue = await localTeamImg.evaluate(el => el.src);

        // Scrapeo equipo visitante:
        let awayTeamName = await page.waitForSelector(".duelParticipant__away > .participant__participantNameWrapper");
        let awayTeamNameValue = await awayTeamName.evaluate(el => el.textContent);

        let awayTeamImg = await page.waitForSelector(".duelParticipant__away > .participant__participantLink--team > .participant__image");
        let awayTeamImgValue = await awayTeamImg.evaluate(el => el.src);
        
        let responseToFront = {valueLigue, valueDay, valueHour, localTeamNameValue, localTeamImgValue, awayTeamNameValue, awayTeamImgValue};

        res.json(responseToFront);
    }

     scrape();
}