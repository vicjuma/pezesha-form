import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pezesha-loaning-app';

  constructor(private router: Router){}

  NgOnInit(){
    this.router.navigate(['personal-info'])
  }
}
