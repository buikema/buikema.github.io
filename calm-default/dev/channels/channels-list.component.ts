import {Component, OnInit} from "angular2/core";

import {ChannelsItemComponent} from "./channels-item.component";
import {ChannelsItem} from "./channels-item";
import {CHANNELS_ITEMS} from "./channels.data";

@Component({
    selector: 'channels-list',
    template: `
        <ul class="channels-list">
            <channels-item *ngFor="#channelsItem of channelsItems"
                [channelsItem] = "channelsItem">
            </channels-item>
        </ul>
    `,
    directives: [ChannelsItemComponent],
})

export class ChannelsListComponent implements OnInit {
    channelsItems: ChannelsItem[];

    ngOnInit(): any {
        this.channelsItems = CHANNELS_ITEMS;
    }
}