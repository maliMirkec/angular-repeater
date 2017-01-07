# Angular Repeater
Directive that could handle recursion

## Important note
This is a directive which outputs inputs with labels, based on model provided.

I'm considering to extend this directive for different outputs, but that will be decided if any request is made.

For example, this could be used to output a file tree.

## Usage
First include Angular Repeater in your project:

```javascript
(function (DemoApp) {
  'use strict';

  DemoApp = angular.module('DemoApp', ['Repeater']);

  DemoApp.config(function () {});
}(this));
```
Than call recursive-repeater directive and provide it with an Angular model and label:

```html
<recursive-repeater json-data="jsonData" label="MyLabel"></recursive-repeater>
```

## Demo
https://frontend-developer.xyz/angular-repeater/

## Guide
https://silvestarbistrovic.from.hr/en/articles/recursively-includible-angular-directive
