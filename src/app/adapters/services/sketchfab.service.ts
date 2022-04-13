import fetch from "node-fetch";
import { SketchfabSearchResult, SketchfabSearchResults } from "../../domain/core/sketchfab-search-results";

export class Sketchfab {
    constructor() {}

    public async search(item: string): Promise<SketchfabSearchResults> {
        const res = await fetch(`https://sketchfab.com/i/search?downloadable=1&q=${item}&sort_by=-relevance&type=models`, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en,es;q=0.9",
              "cache-control": "no-cache",
              "pragma": "no-cache",
              "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-csrftoken": "k5rrfJNrC5psVQgPQLQ8XLJRaDoMJUr1W2ue3rDZS67GKlJ0tS0a94MbN09cdztR",
              "x-requested-with": "XMLHttpRequest",
              "cookie": "OptanonAlertBoxClosed=2022-04-01T19:04:13.930Z; sf_show_viewer_hint=0; sb_csrftoken=k5rrfJNrC5psVQgPQLQ8XLJRaDoMJUr1W2ue3rDZS67GKlJ0tS0a94MbN09cdztR; sb_sessionid=ilrxr08k9b5au4t456ky7si4pbtg0qhz; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Apr+13+2022+06%3A55%3A32+GMT%2B0200+(Central+European+Summer+Time)&version=6.26.0&isIABGlobal=false&hosts=&consentId=d4c6260d-284c-499a-8524-6392f67bd4ce&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=CR%3B",
              "Referer": "https://sketchfab.com/search?q=b&type=models",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });
        const response:any = await res.json();
        return SketchfabSearchResults.create({ results : response.results.map(SketchfabSearchResult.create) });
    }

    public async getModel(uid: string): Promise<string> {
        const res = await fetch(`https://sketchfab.com/i/archives/latest?archive_type=gltf&model=${uid}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en,es;q=0.9",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "OptanonAlertBoxClosed=2022-04-01T19:04:13.930Z; sf_show_viewer_hint=0; sb_csrftoken=k5rrfJNrC5psVQgPQLQ8XLJRaDoMJUr1W2ue3rDZS67GKlJ0tS0a94MbN09cdztR; sb_sessionid=ilrxr08k9b5au4t456ky7si4pbtg0qhz; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Apr+13+2022+06%3A55%3A32+GMT%2B0200+(Central+European+Summer+Time)&version=6.26.0&isIABGlobal=false&hosts=&consentId=d4c6260d-284c-499a-8524-6392f67bd4ce&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=CR%3B",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            "body": null,
            "method": "GET"
        });
        const response:any = await res.json();
        return response;
    }
}