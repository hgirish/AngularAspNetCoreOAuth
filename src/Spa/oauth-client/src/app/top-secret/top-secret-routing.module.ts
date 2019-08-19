import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { IndexComponent } from './index/index.component'
import { AuthGuard } from '../core/authentication/auth.guard'
import { Shell } from '../shell/shell.service'

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'topsecret',
      component: IndexComponent,
      canActivate: [AuthGuard]
    }
  ])
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TopSecretRoutingModule {}
