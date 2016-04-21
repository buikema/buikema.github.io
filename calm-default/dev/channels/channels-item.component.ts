import {Component, Input} from 'angular2/core';

import {ChannelsItem} from './channels-item';

@Component({
    selector: 'channels-item',
    template: `
		<li class="channels-element">
		   	<img src="{{ channelsItem.channelThumbnailUrl }}">
		    <h4>{{ channelsItem.channelTitle }}</h4>
		</li>
    `,
    styleUrls: ['src/css/channels-item.css'],
})

export class ChannelsItemComponent {
	@Input() channelsItem: ChannelsItem;
}