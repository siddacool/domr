# Domr

Component Based JavaScript Micro-Framework equipped with a static Router. 
Made for modern web, it is powered by ES6 iteration of JavaScript and has a very little footprint.


**Detailed Setup Can Be Found On following Link**
https://github.com/siddacool/domr/wiki

## Getting Started

Install Domr from npm.

`npm i --save domr-a` or `yarn add domr-a`

## Usage

`domr` modules can be called using ES6 import statement

```javascript

import { Component } from 'domr-a';

```

## Modules

### Router

##### Import Router

```javascript
import { Router } from 'domr-a';

const router = new Router();
```

Example
```javascript

const routes = [
  {
    path: '/counter/',
    view: Counter,
  },
  {
    path: '/got/:house/',
    view: DynamicRouteName,
  },
  {
    path: '/tree/',
    view: TreeView,
  },
  {
    path: '/404',
    view: Error404,
    isDefault: true,
  },
];

const router = new Router(routes, {
  redirectDefault: true,
  clearLog: true,
});
```

#### Start Router

```javascript
router.start();
```

### Component

Guide Coming Soon
