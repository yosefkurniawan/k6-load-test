// to rnd: k6 run nama_file.js

import http from 'k6/http';
import { sleep, check } from 'k6';

// Test setup
export let options = {
    vus: 2,
    duration: '5m'
};

export default function Pdp() {
  const params = {
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9',
  };

    let respon = http.get(`https://pwa.getswift.asia/montana-wind-jacket`, params)
    check(
        respon,
        { "Get user response status code is 200": (r) => r.status == 200 }
    );

  sleep(1);
}
