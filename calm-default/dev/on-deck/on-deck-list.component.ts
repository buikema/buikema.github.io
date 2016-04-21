import {Component, OnInit} from "angular2/core";

import {OnDeckItemComponent} from "./on-deck-item.component";
import {OnDeckItem} from "./on-deck-item";
import {ON_DECK_ITEMS} from "./on-deck.data";

@Component({
    selector: 'on-deck-list',
    template: `
        <ul class="on-deck-list">
            <on-deck-item *ngFor="#onDeckItem of onDeckItems"
            [onDeckItem] ="onDeckItem">
            </on-deck-item>
        </ul>
    `,
    directives: [OnDeckItemComponent],
})

export class OnDeckListComponent implements OnInit {
    onDeckItems: OnDeckItem[];
    
    ngOnInit():any {
        this.onDeckItems = ON_DECK_ITEMS;
    }
}