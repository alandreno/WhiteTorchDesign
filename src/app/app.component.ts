import { Component, AfterViewInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  opacityState:string = 'none';
  ngAfterViewInit() {
    this.opacityState = 'maximum';
  }
}
