import http from 'k6/http';
import {check} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

// export default function () {
//     let res = http.request('GET', URL);
//     console.log(JSON.stringify(res, null, 2))
//     let checkResult = check(res, {
//         'response code was 200': (res) => res.status == 200,
//         'remote port was 443': (res) => res.remote_port === 443,
//         'dummy check' : ()=> 'a' === 'a'
//     });
//     console.log("Check Result " + checkResult)
// }


// obiekt response oraz obiekt (nazwa_wydarzenia : wydarzenie/funkcja zwraca boolean)

export default function () {
    let res = http.request('GET', URL);
    console.log(JSON.stringify(res, null, 2))
    let checkResult = check(res, {
        'dummy check' : true,
        'failed check' : false,
        'return HTTP 200' : res => res.status == 200,
        // sprawdza content type
        'is body string' : r => r.headers['content-type'].includes('text/html'),
        // is duration time smaller than 100
        'is duration time smaller than 100' : r => r.timings['duration'] < 100,
    });
    console.log("Check Result " + checkResult)
}
