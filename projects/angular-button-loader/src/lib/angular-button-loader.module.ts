import {ModuleWithProviders, NgModule} from '@angular/core';
import { AngularButtonLoaderDirective } from './angular-button-loader.directive';
import {AngularButtonLoaderService} from './angular-button-loader.service';

@NgModule({
  declarations: [AngularButtonLoaderDirective],
  imports: [
  ],
  exports: [AngularButtonLoaderDirective],
  providers: []
})
export class AngularButtonLoaderModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularButtonLoaderModule,
      providers: [AngularButtonLoaderService]
    };
  }
}
