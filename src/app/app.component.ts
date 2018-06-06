import { Component, AfterViewInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bgImgTrigger', [
        state('none, void', style({
          opacity: '0'
        })),
        state('maximum', style({
          opacity: '50'
        })),
        transition('none => maximum', animate('2000ms ease-in'))
    ])
]
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  opacityState:string = 'none';
  ngAfterViewInit() {
    this.opacityState = 'maximum';
  }
}
