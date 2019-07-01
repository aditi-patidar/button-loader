import {Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {AngularButtonLoaderService} from './angular-button-loader.service';
import {Event} from '@angular/router';

@Directive({
  selector: '[buttonLoader]',
})

export class AngularButtonLoaderDirective implements OnInit {
  @HostBinding('disabled') disableProperty = false;
  subscription: Subscription;
  @Input() loaderColor: string;

  @HostListener('click') onClick(event: Event) {
    const span = this.elementRef.nativeElement.querySelector('span');
    this.subscription = this.loaderService.load.subscribe(
      (flag: boolean) => {
        this.disableProperty = flag;
        if (flag) {
          this.renderer.addClass(span, 'loader');
          if (this.loaderColor) {
            this.renderer.setStyle(span, 'border-color', this.loaderColor);
          } else {
            this.renderer.setStyle(span, 'border-color', '#0288d1');
          }
          this.renderer.addClass(this.elementRef.nativeElement, 'loader-btn');

        } else {
          this.renderer.removeAttribute(span, 'class');
          this.subscription.unsubscribe();
        }
      }
    );
  }

  constructor(private loaderService: AngularButtonLoaderService, private elementRef: ElementRef<any>,
              private renderer: Renderer2) {}

  ngOnInit() {}
}
