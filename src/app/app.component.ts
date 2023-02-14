import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content" xmlns="http://www.w3.org/1999/html">
      <h1>
        Welcome to {{title}}!
      </h1>
      <!--      <app-users></app-users>-->
      <a routerLink="users">GO TO USERS</a><br/>
      <a routerLink="admin">GO TO ADMIN</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'angularUnitTestPractice';


  ngOnInit(): void {

  }
}
