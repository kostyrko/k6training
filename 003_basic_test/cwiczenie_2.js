// import http from 'k6/http';


// export default function() {
//     let url = http.request('GET', 'https://appxx.azurewebsites.net/');
//     const body = __ENV.BODY || "default body ";
//     var payload = JSON.stringify(
//         {
//                "body": body,
//                "title": "Post from k6"
//               }
//         )
//     ;
//     var params = {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     http.request('POST', `${url}/post/add/newpost`, payload, params);
// }

import http from "k6/http";

const url = 'https://appxx.azurewebsites.net';

export default function func () {
    sendGet();
    sendPost();
}

function sendPost() {
    const data = {
        body: "imie",
        title: 'Post ode mnie'
    }

    const headers = {
        "Content-Type": "application/json"
    }
    
    http.request('POST', `${url}/post/add/newpost`, JSON.stringify(data), headers);
}

function sendGet() {
    http.request('GET', url);
}