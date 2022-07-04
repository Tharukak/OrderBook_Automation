import { Component } from '@angular/core';

import { User } from './_models';

// tslint:disable-next-line: component-selector
@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls:['app.component.css' ]})
export class AppComponent {
    user: User;

    constructor() {}


}


