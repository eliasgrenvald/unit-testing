<div align="center" markdown="1">
  <h1>Jest installation or migration</h1>
</div>

- [Installation using Angular](#Installation-using-Angular)

## Installation using Angular
```js
npm install --save-dev jest-preset-angular
```

### Remove Jasmin and its typings
```js
npm uninstall jasmine @types/jasmine.
```

### Remove any Karma
Remove any Karma related packages and test.ts.
```js
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
```

### Add Jest configurtion in the package.json
```js
{
  "jest": {
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/setupJest.ts"
  }
}
```

