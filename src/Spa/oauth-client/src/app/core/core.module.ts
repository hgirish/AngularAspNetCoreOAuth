import { AuthService } from './authentication/auth.service'
import { AuthGuard } from './authentication/auth.guard'
import { Optional, SkipSelf, NgModule } from '@angular/core'

@NgModule({
  imports: [],
  providers: [AuthService, AuthGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      )
    }
  }
}
