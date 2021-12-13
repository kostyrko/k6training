import http from 'k6/http';
import {group} from 'k6';

const URL = "https://appxx.azurewebsites.net/"


export let options = { //options allow to configure your test rum
    vus: 1,
    // iterations: 1,
    stages: [
        { duration: '2s', target: 10 },
        { duration: '1s', target: 10 },
        { duration: '1m', target: 0 },
      ],
    //   thresholds: {
    //     'group_dutation{}'
    // },
};

export default function () {
    group('User Scenario' ,function(){
        group('Home' ,function(){
            http.request('GET', URL);
        });
        group('Log Out' ,function(){
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
        });
    });
}



