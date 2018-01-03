# Domr-b

Experimental branch of domr, with better optimizations for event handling

Component Based JavaScript Micro-Framework equipped with a static Router. 
Made for modern web, it is powered by ES6 iteration of JavaScript and has a very little footprint.


**Detailed Setup Can Be Found On following Link**
https://github.com/siddacool/domr/wiki

## Getting Started

Install Domr from npm.

`npm i --save domr-b` or `yarn add domr-b`

## Usage

`domr` modules can be called using ES6 import statement

```javascript

import { Component } from 'domr-b';

```

## Modules

### Router

##### Import Router

```javascript
import { Router } from 'domr-b';

const router = new Router();
```

#### Setup Parameters

Router takes two parameters 
* [Routes](https://github.com/siddacool/domr/wiki/Router#routes)
* [Config](https://github.com/siddacool/domr/wiki/Router#config)

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

A Component in Domr is a self contained module contaning special methods to render in to the dom.

There are two types of Components
* [Component](https://github.com/siddacool/domr/wiki/Component#component)
* [ActiveComponent](https://github.com/siddacool/domr/wiki/Component#activecomponent)

##### Import a Component

```
import { Component } from 'domr-b';
```

```
import { ActiveComponent } from 'domr-b';
```

#### Extending a Component

a Component needs to be modified so that it can be included into the DOM

let's create a component SayMyName;

```javascript
// SayMyName
import { Component } from 'domr-b';

export default class extends Component {
  constructor(name = '') {
    super('say-my-name');
    this.name = name;
  }

  dom() {
    return `
      <div class="say-my-name">
        <h2> <em>Your are</em> ${this.name} </h2>
      </div>
    `;
  }
}
```

Active Component

```javascript
// SayMyName
import { ActiveComponent } from 'domr-b';

export default class extends ActiveComponent {
  constructor(name = '') {
    super('say-my-name');
    this.name = name;
  }

  dom() {
    return `
      <div class="say-my-name">
        <h2> <em>Your are</em> ${this.name} </h2>
      </div>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      console.log(e.target);
    });
  }
}
```

This Component can be rendered into the DOM using Add Methods

#### Adding a Component into the DOM

https://github.com/siddacool/domr/wiki/Component#adding-components-to-dom


### Utils

https://github.com/siddacool/domr/wiki/Utils



