import {Component, OnInit} from '@angular/core';
import {AngularButtonLoaderService} from 'angular-button-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular-button-loader';

  constructor(private buttonLoaderService: AngularButtonLoaderService) {}

  ngOnInit() {

  }

  showLoader() {
    this.buttonLoaderService.displayLoader();
    setTimeout(() => {
      this.buttonLoaderService.hideLoader();
    }, 2000);
  }
}
