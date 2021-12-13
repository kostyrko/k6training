import http from 'k6/http';
import { check, group, sleep } from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export default function() {
    let res = http.request('GET', URL);
    console.log(JSON.stringify(res, null, 2))
    let checkRes = check(res, {
        'is duration time smaller than 100' : r => r.timings['duration'] < 100,
        'is send by k6' : res => res.headers['User-Agent'][0].includes('k6'),
    })
};