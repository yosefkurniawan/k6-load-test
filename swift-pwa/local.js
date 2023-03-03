// to rnd: k6 run nama_file.js

import http from 'k6/http';
import { sleep, check } from 'k6';

// Test setup
export let options = {
    vus: 2,
    duration: '2m'
};

const HOST = 'http://localhost:3000';

export default function Journey() {
  const uniqueKey = Date.now();
  const params = {
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9',
  };

  // Home
    let responHome = http.get(`${HOST}/?${uniqueKey}`, params)
    check(
      responHome,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
  sleep(1);

    // PLP
    let responPlp = http.get(`${HOST}/men/tops-men/jackets-men?${uniqueKey}`, params)
    check(
      responPlp,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );

  sleep(1);

    // PDP
    let responPdp = http.get(`${HOST}/montana-wind-jacket?${uniqueKey}`, params)
    check(
      responPdp,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
  sleep(1);

    // Login
    let responLogin = http.get(`${HOST}/customer/account/login?${uniqueKey}`, params)
    check(
      responLogin,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
  sleep(1);

    // Regsiter
    let responRegister = http.get(`${HOST}/customer/account/create?${uniqueKey}`, params)
    check(
      responRegister,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    

  sleep(1);
    // Cart
    let responCart = http.get(`${HOST}/checkout/cart?${uniqueKey}`, params)
    check(
      responCart,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
    
  sleep(1);

    // Chekcout
    let responCheckout = http.get(`${HOST}/checkout/?${uniqueKey}`, params)
    check(
      responCheckout,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );
  sleep(1);
}
