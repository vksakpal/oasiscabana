import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  isNavOpen: boolean = false;

  goto(fragment: any) {
    this.router.navigate([], { fragment: fragment });
    this.isNavOpen = !this.isNavOpen;
  }

  toggleMobileNavButton() {
    this.isNavOpen = !this.isNavOpen;
  }
}
