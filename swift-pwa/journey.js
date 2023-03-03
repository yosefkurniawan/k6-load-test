// to run: k6 run nama_file.js

import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

// Test setup
export let options = {
    vus: 50,
    duration: '30m',
};

// const HOST = 'http://localhost:3000';
const HOST = 'https://eiger.gcp-staging.testingnow.me';
// const HOST = 'https://eiger-pwa.testingnow.me';
// const HOST = 'https://pwa-getswift.huawei-prod.sandbox.id';
// const HOST = 'https://pwa.getswift.asia';

// value sleep / jeda antar request random antara randSlepMin dan randSlepMin detik
const randSlepMin = 6;
const randSlepMax = 10;

export default function Journey() {
  const uniqueKey = Date.now()+Math.floor(Math.random()*50);
  const params = {
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9',
  };

  // Home
    sleep(randomIntBetween(randSlepMin, randSlepMax));
    
    let responHome = http.get(`${HOST}/?${uniqueKey}`, params)
    console.log(`${HOST}/?${uniqueKey}`);
    console.log(responHome.status);
    check(
      responHome,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
    sleep(randomIntBetween(randSlepMin, randSlepMax));

    // PLP
    let responPlp = http.get(`${HOST}/perlengkapan?${uniqueKey}`, params)
    check(
      responPlp,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );

    sleep(randomIntBetween(randSlepMin, randSlepMax));

    // PDP
    let responPdp = http.get(`${HOST}/eiger-kinkajou-roll-3-0-sandals?${uniqueKey}`, params)
    check(
      responPdp,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
    sleep(randomIntBetween(randSlepMin, randSlepMax));

    // Login
    let responLogin = http.get(`${HOST}/customer/account/login?${uniqueKey}`, params)
    check(
      responLogin,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
    sleep(randomIntBetween(randSlepMin, randSlepMax));

    // Regsiter
    let responRegister = http.get(`${HOST}/customer/account/create?${uniqueKey}`, params)
    check(
      responRegister,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    

    sleep(randomIntBetween(randSlepMin, randSlepMax));

      // Cart
    let responCart = http.get(`${HOST}/checkout/cart?${uniqueKey}`, params)
    check(
      responCart,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
    sleep(randomIntBetween(randSlepMin, randSlepMax));

    // Chekcout
    let responCheckout = http.get(`${HOST}/checkout/?${uniqueKey}`, params)
    check(
      responCheckout,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
}
