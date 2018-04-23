# Domr

Diverged branch of domr, it will be close to final release

Component Based JavaScript Micro-Framework equipped with a static Router. 
Made for modern web, it is powered by ES6 iteration of JavaScript and has a very little footprint.


## Getting Started

Install Domr from npm.

`npm i --save domr-a` 

## Usage

`domr` modules can be called using ES6 import statement

```javascript

import { Component } from 'domr-a';

```

## Router

Built-in Hash Router with wild card and query support.
Hot Content Swap which replaces div content rather than refreshing page on route change

```javascript
import { Router } from 'domr-a';

const router = new Router();

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

const config = {
 redirectDefault: true,
};

const router = new Router(routes, config);
router.start();
```
### Params

**routes**
An array of routes information
| Option | Description|
|--|--|
| path | Browser hash url, `*`, `/:boom` wild cards are supported | 
| view| a Function without `()` containing instructions to be performed when path is matched | 
| isDefault | set `true` if the path should be the default redirection page |

**config**
Optional parameter for `Router()` class in the form of an object

| Option | Description|
|--|--|
| redirectDefault | set `true` to enable default redirection page |
| refreshPage | set `true` to disable hot content swap and enable full refresh instead |
| clearLog | set `true` to clear log after path change |

### Methods
**.start()** - Start Router
**.showRoutes()** - Log the list of Routes



### Data response
a function without `()` passed as `view` of a route gets route `data` as a response. and it can be passed as function parameter.

the url http://mysite/#/got/stark/?name=arya&alias=no_one with path set as `/got/:house/` will generate response

``` javascript
{
  'path' : '/got/:house/',
  'metadata': {
    'house' : 'stark'
  },
  'query': {
    'name' : 'arya',
    'alias' : 'no one'
  }
}
```




## Component

Element (javascript class) with support for events and different add methods
```javascript
import{ Component } from 'domr-a';

export default class extends Component {
  constructor() {
    super();
    this.orderno = 5;
  }

  dom() {
    return `
        <div class="examples-list" data-order="${this.orderno}">
          <h1>Examples</h1>
          <ul>
            Something
          </ul>
        </div>
    `;
  }
  
  events() {
    this.addEvent('click', (self, e) => {
      e.preventDefault();
      const parent = self.parentElement;

      parent.classList.toggle('expanded');
    });
  
  this.addEventOn('ul', 'mouseover', (self, e) => {
      console.log(self);
    });
  }
  
  delay() {
    console.log('I was delayed');
  }
}
```

```javascript
import SomeComponent from './someLocation/SomeComponent';

const someComponent = new SomeComponent();

document.querySelector('.root-elm').innerHTML = someComponent.render();
```

###  Internal Methods

**dom()**
Hosts and returns the HTML DOM structure.

**events()**
Container for the built-in `this.addEvent()` and `this.addEventOn()` methods.

**this.target()**
refers to `self` / top level element in `dom()`

**this.addEvent()**
Specify events on the top level HTML element defined in `dom()` 

```javascript
this.addEvent({'Event Name'}, (self, e) => {});
```

**this.addEventOn()**
Specify events on the child elements

```javascript
this.addEventOn({'child tagname/class'}, {'Event Name'}, (self, e) => {});
```

**delay()**
As the name suggests, `delay()` executes few seconds after rendering the `dom()` content. 


### Add/Render Methods
Renders Component and events to the given parent

**.render()**
Replace innerHTML of the parent
```javascript
const parent = document.querySelector('.root-elm');
parent.innerHTML = ourExtendedComponent.render();
```

**.replaceContentOf()**
Replace innerHTML of the parent (same as `.render()`)
```javascript
const parent = document.querySelector('.root-elm');
ourExtendedComponent.replaceContentOf(parent);
```

**.addTo()**
Add To (append to) the parent
```javascript
const parent = document.querySelector('.root-elm');
ourExtendedComponent.addTo(parent);
```

**.addFromStartTo()**
Add From Start To (prepend to) the parent
```javascript
const parent = document.querySelector('.root-elm');
ourExtendedComponent.addFromStartTo(parent);
```

**.addBefore()**
Add before a Sibling
```javascript
const sibling= document.querySelector('.sibling');
ourExtendedComponent.addBefore(parent);
```

**.addAfter()**
Add after a Sibling
```javascript
const sibling= document.querySelector('.sibling');
ourExtendedComponent.addAfter(parent);
```

**.replaceWith()**
Replace Sibling with `ourExtendedComponent`
```javascript
const sibling= document.querySelector('.sibling');
ourExtendedComponent.replaceWith(parent);
```


## DataComponent (beta)

A special element made for looping through ajax loaded JSON data. The best way to use it is to call it inside the `delay()` method of a regular `Component()`

```javascript
import { DataComponent } from 'domr-a';

const JSON = `https://api.tvmaze.com/search/shows`

export default class extends DataComponent {
  constructor() {
    super(JSON);
  }

  dom(elm) {
    return `
        <div class="examples-list">
          <h1>${elm.name}</h1>
          <ul>
            ${elm.description}
          </ul>
        </div>
    `;
  }
  
  events() {
    this.addEvent('click', (self, e) => {
      e.preventDefault();
      const parent = self.parentElement;

      parent.classList.toggle('expanded');
    });
  
  this.addEventOn('ul', 'mouseover', (self, e) => {
      console.log(self);
    });
  }
  
  delay(elm) {
    console.log(elm);
  }
}
```

Adding it inside a Regular `Component()`'s `delay()` method.

```javascript
import { Component } from 'domr-a';
import SomeDataCompoenent from './SomeDataCompoenent ';

export default class extends Component {
  constructor(showId) {
    this.showId = showId;
  }

  dom() {
    return `
      <div class="tv-show-extended-holder" id="tv-show-extended-holder">
      </div>
    `;
  }

  delay() {
    const target = this.target();
    const tvShowExtendedCard = new SomeDataCompoenent();
    tvShowExtendedCard.replaceContentOf(target);
  }
}
```

###  Internal Methods

**dom(elm)**
Same as `Component()` except it has a parameter `elm` which refers to a value in JSON API

**delay(elm)**
Same as `Component()` except it has a parameter `elm` which refers to a value in JSON API

**events()**
**this.addEvent()**
**this.addEventOn()**
Same as `Component()`



### Add/Render Methods

**.logData()**
Logs value to console

**.replaceContentOf()**
**.addTo()**
**.addFromStartTo()**
**.addBefore()**
**.addAfter()**
**.replaceWith()**
Same as `Component()` 
