// to be recognized as angular module, you need to use a decorator - '@'
// to use the decorator, you need to import the package that exports it - Component (for components).
import { Component } from '@angular/core';

@Component(
  // need 2 meta-data properties at a minimum - selector and template (or template URL)
  {
      selector: 'app',                  // what angular uses to locate a custom html element and apply the component to
      template: '<h1>My App</h1>'       // to fill the targeted html element above
  }
)

export class AppComponent {}