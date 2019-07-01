import {Subject} from 'rxjs';

export class AngularButtonLoaderService {

  constructor() { }

  load = new Subject();

  displayLoader() {
    this.load.next(true);
  }

  hideLoader() {
    this.load.next(false);
  }
}
