# Jest installation with Angular

- [Installation using Angular](#Installation-using-Angular)

## Installation using Angular

```js
npm install --save-dev jest-preset-angular
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
