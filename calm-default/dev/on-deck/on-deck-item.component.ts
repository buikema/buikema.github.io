import {Component, Input} from 'angular2/core';

import {OnDeckListComponent} from './on-deck-list.component';
import {OnDeckItem} from './on-deck-item';

@Component({
    selector: 'on-deck-item',
    template: `
		<li class="on-deck-element">
			<div class="video-thumbnail">
		   		<img src="{{ onDeckItem.videoThumbnailUrl }}">
			</div>
			<div class="video-title">
		    	<h3>{{ onDeckItem.videoTitle }}</h3>
		    	<p class="info">{{ onDeckItem.videoAuthor }}</p>
			</div>
			<div class="favs">
		    	<p class="favorites">Recommended by</p>
		    	<span>{{ onDeckItem.recommendations }}</span>
			</div>
		</li>
    `,
    styleUrls: ['src/css/on-deck-item.css'],
})

export class OnDeckItemComponent {
	@Input() onDeckItem: OnDeckItem;
}