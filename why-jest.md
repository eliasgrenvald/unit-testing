# Benefits with Jest

- it automatically isolates each test file
  Meaning you don't have to worry about tests in files influencing other tests. That can happen with Mocha.
- it looks at "git status"
  it only runs the tests of files that has changed, that is awesome as it doesn't need to run the full testsuite the whole time
- it has built in code-coverage
  this is useful to see who much of a file you have tested and that is comes of the box is amazing
- it has really great mocking functions
  you can both create mock functions, but you can also overwrite require() so that you don't have to change the code


---

# Jest with Babel support

You can run jest with babel so that you can use the latest ESX syntax. It works by jest running babel on your files before it runs.

https://github.com/kevinsimper/babel-jest-example
