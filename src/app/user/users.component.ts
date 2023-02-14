import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "../user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="users.length > 0; then data; else noData"></div>
    <ng-template #data>
       <div id="data">
         <table class="table table-striped table-hover">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">First</th>
             <th scope="col">Last</th>
             <th scope="col">Email</th>
             <th scope="col">ContactNumber</th>
             <th scope="col">Age</th>
             <th scope="col">DOB</th>
             <th scope="col">Address</th>
           </tr>
           </thead>
           <tbody>
           <tr class="rows" *ngFor="let user of users; index as i">
             <th scope="row">{{i}}</th>
             <td>{{user.firstName}}</td>
             <td>{{user.lastName}}</td>
             <td>{{user.email}}</td>
             <td>{{user.contactNumber}}</td>
             <td>{{user.age}}</td>
             <td>{{user.dob}}</td>
             <td>{{user.address}}</td>
           </tr>
           </tbody>
         </table>
       </div>
    </ng-template>
    <ng-template #noData>
      <div id="noData"> No data available</div>
    </ng-template>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.info('users', this.users.length)
    });
  }

  dummyMethod(name: string) {
    return name + 'B';
  }

  private dummyPrivateMethod(name: string) {
    return name + 'B';
  }
}
