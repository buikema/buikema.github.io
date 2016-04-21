import {Component} from 'angular2/core';

import {LogInComponent} from './log-in.component'


@Component({
    selector: 'app-header',
    template: `
        <header>
        	<h1>Calm Default</h1>
        	<p>Discovery, with a little help from your friends</p>
        	
        	<nav>
	        	<button>After Dark</button>
	        	<log-in>Log in</log-in>
	        	<button>Settings</button>
        	</nav>
        </header>
    `,
    styleUrls: ['src/css/header.css'],
    directives: [LogInComponent]
})

export class AppHeader {
}