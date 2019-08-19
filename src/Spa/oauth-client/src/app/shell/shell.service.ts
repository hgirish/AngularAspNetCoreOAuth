import { Injectable } from '@angular/core'

import { Routes, Route } from '@angular/router'
import { ShellComponent } from './shell.component'

@Injectable({
  providedIn: 'root'
})
export class Shell {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      // =canActivate:[AuthenticationGuard],
      // Reuse ShellComponent instance when navigation between child Views
      data: { reuse: true }
    }
  }
}
