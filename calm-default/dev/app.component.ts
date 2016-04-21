import {Component} from 'angular2/core';

import {AppHeader} from './app-header/header.component';
import {OnDeckHTTPComponent} from "./on-deck/on-deck-http.component";
import {AtBatComponent} from "./at-bat/at-bat.component";
import {ChannelsListComponent} from "./channels/channels-list.component";
import {OnDeckListComponent} from "./on-deck/on-deck-list.component";
import {AppFooter} from "./app-footer/footer.component";


@Component({
    selector: 'my-app',
    template: `
        <app-header></app-header>
        <channels-list></channels-list>
        <at-bat></at-bat>
        <on-deck-http></on-deck-http>
        <on-deck-list></on-deck-list>
        <app-footer></app-footer>
    `,
    directives: [AppHeader, ChannelsListComponent, AtBatComponent, OnDeckHTTPComponent, OnDeckListComponent, AppFooter,]
})

export class AppComponent {
}

