import http from 'k6/http';
import { check, group, sleep } from 'k6';

url='https://appxx.azurewebsites.net/'

export function get() {
    // let data = {}
    // data['key'] = http.get(url).body;
    // return data;
    let res = http.get(url).body
    return res
}

export default function(data) {
    const body = {
        "body": "...",
        "title": res
    }
    const params =  {headers: {'Content-Type': 'application/json'}}

    let res = http.post(url `${url}'post/add/newpost'`, JSON.stringify(body), params);

    check(res, {
        'status was 200': r => r.status == 201,
    });
};