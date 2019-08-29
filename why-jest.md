# Benefits with Jest

---

## It automatically isolates each test file

#### Meaning you don't have to worry about tests in files influencing other tests. That can happen with Mocha.

## It looks at "git status"

#### it only runs the tests of files that has changed, that is awesome as it doesn't need to run the full testsuite the whole time.

---

## It has built in code-coverage.

#### this is useful to see who much of a file you have tested and that is comes of the box is amazing.

```js
jest --coverage
```

---

## It has really great mocking functions.

#### you can both create mock functions, but you can also overwrite require() so that you don't have to change the code.

## Filter by a filename or test name regex pattern.

---

## Snapshot testing, a useful feature which is not available in Jasmine

#### More active community which will make Jest even better, benefits with snapshot testing:

- Compares expectation to the stored snapshot.
- Stores a snapshot if it doesn't exist.
- Perfoms diff on the snapshot.
- Easily update snapshots on refactor.

---

# Jest with Babel support

#### You can run jest with babel so that you can use the latest ESX syntax. It works by jest running babel on your files before it runs.

https://github.com/kevinsimper/babel-jest-example
