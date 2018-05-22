import { Inject, Directive, HostListener, HostBinding, ElementRef, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appFixedtop]'
})
export class FixedtopDirective implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    // get document reference to get scrolltop number
    @Inject(DOCUMENT) private doc: Document,
    // breakpoint to check for mobile
    private breakpointObserver: BreakpointObserver
  ) { }

  // Bind to CSS properties to change.
  @HostBinding('style.position') position: String = "absolute";
  @HostBinding('style.top') top: String = "0px";
  // check for mobile
  isMobile = false;

  ngOnInit() {
    this.isHandset.subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    // offset top num
    const num = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;

    // scrolltop > navbar then fix left nav.
    if (num >= 80) {
      this.position = "fixed";
      if (this.isMobile) {
        this.top = "56px";
      } else {
        this.top = "64px";
      }
    }

    if (num < 80) {
      this.position = "absolute";
      this.top = "0px";
    }
  }
}
