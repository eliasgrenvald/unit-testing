import { Component, Input } from '@angular/core';

interface IUser {
  readonly name: string;
  readonly job: string;
}

@Component({
  selector: 'workshop-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: IUser;
}
