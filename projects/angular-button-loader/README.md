Angular directive to display loading spinner on button and disable the button while performing async calls. It supports Angular 4+.

#Installation
`npm i angular-button-loader`

#Description

* You can override the css for your customized spinner.

* Supports Angular 4+.

#Usage

> Import module at your root level module

`import { AngularButtonLoaderModule } from 'angular-button-loader';`

> Make an import entry

`imports: [ AngularButtonLoaderModule.forRoot() ]`

> Make entry of css file in angular.json or angular-cli.json according to version of angular

```
"styles": [            
  "node_modules/angular-button-loader/style/button-loader.min.css"
]
```

> Apply directive on your button and place `<span>` tag inside button

```
<button type="submit" buttonLoader>
  <span></span>
  Sign In
</button>
```

> You can also supply loader color. It's optional if you do not supply loader will be shown in default color.

```
<button type="submit" buttonLoader [loaderColor]="'white'">
  <span></span>
  Sign In
</button>
```

> Import `AngularButtonLoaderService` to the component where you want to show the spinner.

`import { AngularButtonLoaderService } from 'angular-button-loader';`

> Inject dependancy

`constructor(private buttonLoaderService: AngularButtonLoaderService) {}`

> Use `displayLoader()` method to display the loading spinner.

`this.buttonLoaderService.displayLoader();`

> Use `hideLoader()` method to hide the loading spinner once the processing is done.

`this.buttonLoaderService.hideLoader();`

#Example

```
this.buttonLoaderService.displayLoader();
this.http.get(GLOBAL['CONFIG_URL'])
  .subscribe(data => {
    this.buttonLoaderService.hideLoader();
  });
```






