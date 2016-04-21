import {Component} from 'angular2/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer>
        	<ul>
                <li>An Angular 2 project by Drew Buikema</li>
                <li>Other work on Github</li>
                <li>Copyright 2016</li>
            </ul>
        </footer>
    `,
    styleUrls: ['src/css/footer.css'],
})

export class AppFooter {
}