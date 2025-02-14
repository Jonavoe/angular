import { Component } from '@angular/core';
import { CreateTweetComponent } from '../create-tweet/create-tweet.component';
import { TweetComponent } from '../tweet/tweet.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CreateTweetComponent, TweetComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
