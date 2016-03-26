import {Component} from 'angular2/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Auth` component loaded asynchronously');

@Component({
  selector: 'auth',
  templateUrl: 'app/auth/auth.html'
})
export class Auth {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Auth` component');
  }

  login(): void {
    
  }
}
