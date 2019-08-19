import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/core/authentication/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  name: string
  isAuthenticated: boolean
  subscription: Subscription

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.authNavStatus$.subscribe(
      status => (this.isAuthenticated = status)
    )
    this.name = this.authService.name
  }

  signout() {
    this.authService.signout()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
