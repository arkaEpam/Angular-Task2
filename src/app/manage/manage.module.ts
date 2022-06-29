import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports : [
    UserDetailsComponent
  ],
  providers : [UserService]
})
export class ManageModule { }
