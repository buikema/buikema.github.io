import {Component} from "angular2/core";

import {OnDeckHTTPService} from "./on-deck-http.service";


@Component({
	selector: 'on-deck-http',
	template: `
		<div>
			<button (click)="onDeckHTTPGet()">Show my list</button>
	        <button (click)="onDeckHTTPPost()">Refresh</button>
	        <p>Output from get: {{ getData }}</p>
	        <p>Output from post: {{ postData }}</p>
        </div>
	`,
	providers: [OnDeckHTTPService],
})

export class OnDeckHTTPComponent {
	getData: string;
	postData: string;

	constructor(private _httpService: OnDeckHTTPService) {}

	onDeckHTTPGet() {
		this._httpService.getTest()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
				() => console.log("Finished JSON get.", this.getData)
			);
	}

	onDeckHTTPPost() {
		this._httpService.postTest().subscribe(
			data => this.postData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Finished JSON post.", this.getData)
		)
	}
	
}