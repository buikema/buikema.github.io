import {Component} from "angular2/core";

@Component({
    selector: 'at-bat',
    template: `		
<article>
	<div class="side-panel">
		<ul class="liked-list">
			<li class="liked"></li>
			<li class="liked"></li>
			<li class="liked"></li>
		</ul>
		<ul class="actions-list">
			<li class="action"></li>
			<li class="action"></li>
		</ul>
	</div>
	<iframe src="http://www.youtube.com/embed/-yT2JMdIZ84" frameborder="0" allowfullscreen></iframe>
</article>
<div class="video-details">
	<h2>The At-Bat ASMR Video Title</h2>
	<p>Author's Channel Name<span>Contribute</span></p>
</div>
	`,
    styleUrls: ['src/css/at-bat.css'],
})

export class AtBatComponent {
}