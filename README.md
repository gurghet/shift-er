# shifter

> Shifter front-end.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` javascript
// main model (environment)
slots: [
  {
    shift: 'Notte',
    date: {
      year: 2017,
      month: 8,
      date: 28,
      day: 1 // originally 2 but... americans -.-
    },
    coverage: {
      ideal: 3,
      penaltyMore: 0.1,
      penaltyLess: 2.7
    },
    workers: [
      {
        name: 'Dott. Passaglia',
        id: 570428,
        preferredness: 2,
      },
      {
        name: 'Dott. Baudo',
        id: 625789,
        preferredness: -2
      }
    ]
  },
  {
    shift: 'Mattino',
    date: { ... },
    workers: [ ... ],
    coverage: { ... },
    features: [
      {
        name: 'Festività', // not holidays in real life
        adjust: (workerId, context) {
          if (context.previousDay.hasSameFeature && context.previousSlot) {
            if (context.previousSlot.workers.findIndex(w => w.id === workerId) !== -1) {
              return 1
            }
            return 0
          }
        }
      }
    ]
  },
  ...
]

// solution
slots: [
  {
    shift: 'Mattino',
    date: { ... },
    workers: [437283, 873932, 837399]
  },
  ...
]
```
