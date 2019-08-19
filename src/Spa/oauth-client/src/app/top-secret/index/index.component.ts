import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/core/authentication/auth.service'
import { TopSecretService } from '../top-secret.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  claims = null
  busy: boolean

  constructor(
    private authService: AuthService,
    private topSecretService: TopSecretService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.busy = true
    this.spinner.show()

    this.topSecretService
      .fetchTopSecretData(this.authService.authorizationHeaderValue)
      .pipe(
        finalize(() => {
          this.spinner.hide()
          this.busy = false
        })
      )
      .subscribe(result => {
        this.claims = result
      })
  }
}
