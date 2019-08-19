import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule]
})
export class HomeModule {}
