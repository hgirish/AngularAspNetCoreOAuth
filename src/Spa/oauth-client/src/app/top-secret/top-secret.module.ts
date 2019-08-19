import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopSecretRoutingModule } from './top-secret-routing.module'
import { IndexComponent } from './index/index.component'
import { SharedModule } from '../shared/shared.module'
import { TopSecretService } from './top-secret.service'

@NgModule({
  declarations: [IndexComponent],
  providers: [TopSecretService],
  imports: [CommonModule, TopSecretRoutingModule, SharedModule]
})
export class TopSecretModule {}
