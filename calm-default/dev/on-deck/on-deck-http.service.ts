import {Injectable} from "angular2/core";
import {Http} 		from "angular2/http";
import {Headers} 	from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()

export class OnDeckHTTPService {
	constructor (private _http: Http) {}

	getTest() {
		return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
			.map(res => res.json());
	}

	postTest() {
		var json = JSON.stringify({ var1: 'test', var2: 47 });
		var params = 'json=' + json;
		var headers = new Headers();
		headers.append('Content-Type', 'aplication/x-www-form-urlencoded');

		return this._http.post('http://jsonplaceholder.typicode.com/posts', params, { headers: headers })
			.map(res => res.json());
	}
}