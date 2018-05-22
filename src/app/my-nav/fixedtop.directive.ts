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
    @Inject(DOCUMENT) private doc: Document,
    private breakpointObserver: BreakpointObserver
  ) { }

  @HostBinding('style.position') position: String = "absolute";
  @HostBinding('style.top') top: String = "0px";
  isMobile = false;

  ngOnInit() {
    this.isHandset.subscribe((state: BreakpointState) => {
      if (state.matches) {
        // mobile top offset
        this.isMobile = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    const num = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;

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
