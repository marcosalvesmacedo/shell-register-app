import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  public displayedColumns: string[] = ['code', 'fullname', 'email'];
  public dataSource: any[] = [
    {code: 1, name: 'Hydrogen', email: 'H'},
    {code: 2, name: 'Helium', email: 'He'},
    {code: 3, name: 'Lithium', email: 'Li'}
  ]

  
  constructor() { 
  }

}
