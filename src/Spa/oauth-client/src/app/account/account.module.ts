import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { AccountRoutingModule } from './account.routing-module'
import { SharedModule } from '../shared/shared.module'
import { AuthService } from '../core/authentication/auth.service'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService],
  imports: [CommonModule, AccountRoutingModule, SharedModule, FormsModule]
})
export class AccountModule {}
