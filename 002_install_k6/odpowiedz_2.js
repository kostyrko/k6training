import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("Global", function() {
		let req, res;
		req = [{
			"method": "post",
			"url": "https://appxx.azurewebsites.net/post/add/newpost",
			"body": "{\"body\":\"Something\",\"title\":\"Title\"}",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"sec-ch-ua-platform": "\"Windows\"",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "options",
			"url": "https://appxx.azurewebsites.net/post/add/newpost",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"Accept": "*/*",
					"Access-Control-Request-Method": "POST",
					"Access-Control-Request-Headers": "content-type",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://appxx.azurewebsites.net/posts",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"sec-ch-ua-platform": "\"Windows\"",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.06);
		req = [{
			"method": "get",
			"url": "https://appxx.azurewebsites.net/posts",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"sec-ch-ua-platform": "\"Windows\"",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}