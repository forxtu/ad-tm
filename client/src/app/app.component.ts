import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  }
}
