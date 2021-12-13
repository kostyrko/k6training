import http from 'k6/http';
import { group } from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export default function() {
    const req1 = {method: 'GET', url}
    const req2 = {method: 'GET', url}
    group('main group', function() {
        group('group1', function() {
            http.batch([
                http.batch([
                    req1,
                    req2,
                ])
            ]);
        });
        group('group2', function() {
            http.batch([
                http.batch([
                    req1,
                    req2,
                ])
            ]);
        });
    });
};
