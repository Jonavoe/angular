import { Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { ContentComponent } from '../content/content.component';
import { TendencyComponent } from '../tendency/tendency.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AccountComponent, ContentComponent, TendencyComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
