<div align="center" markdown="1">
  <h1>Unit Testing Best Practices</h1>
</div>

- [Naming](#Naming)
- [Test The Behaviour ‘NOT’ Implementation](#Test-The-Behaviour-‘NOT’-Implementation)
- [Test a Single Concern at a Time](#Test-a-Single-Concern-at-a-Time)
- [One Single Initialization](#One-Single-Initialization)
- [Mock Any External Resources](#Mock-Any-External-Resources)

## Naming
- Concise
- Descriptive
- Explicit
- First indication of what may have gone wrong if the test fails
- No punctuations ‘.’ in the end of the names
- Do not capitalize the first letter in the first word in the name
### Bad Naming
```js
describe('loadProducts', () => {
  test('invoke the loadProducts (reset filters, fetches products, etc)', () => {
    // ...
  });
});
```
### Good Naming

```js
describe('loadProducts', () => {
  test('should reset the filters', () => {
      // ...
  });
  test('should fetch the products', () => {
      // ...
  });
});
```
## Test The Behaviour ‘NOT’ Implementation
- Internal implementation doesn’t matter. Use static code analysis or pull request for that.
- Test behaviour and responsibilities of the unit that is being tested.
- Test should assess whether the output of a unit (function) is the same given the same input.
- Don’t need to test and assess the private properties, or internal variables in the objects.
- Look at it as a black box
- sum(2, 3) => 5 
  - The only thing that matters is to assess whether supplying ‘2’ and ‘3’ to the sum function will result in ‘5’ in the output and from the unit test point of view, it doesn’t really matter how sum internally calculates the output:
  ```js
  const sum = (a, b) => {
    return a+b;
  }
  ```
  ```js
  const sum = (a, b) => {
    const d = 2 * (b / 2) 
    return a+d;
  }
  ```
### Bad
```js
test('should add a product to the shopping cart', () => {
  shoppingCart.addProduct('dinning chair', 2, 200);

  expect(shoppingCart._items[shoppingCart._items.length - 1].name).toBe('dinning chair');
  expect(shoppingCart._items[shoppingCart._items.length - 1].quantity).toBe(2);
  expect(shoppingCart._items[shoppingCart._items.length - 1].price).toBe(200);
});
```
### Good
```js
test('should add a product to the shopping cart', () => {
  shoppingCart.addProduct('dinning chair', 2, 200);
  expect(shoppingCart.isProductExist('dinning chair', 2, 200)).toBe(true);
});
```
## Test a Single Concern at a Time
- Do not assess multiple things in a single unit test.
- Test only one concern of a bigger picture.
- Once ‘expect’ on each ‘it’
- Facilitates the debugging when test fails, you exactly know what has failed.

### Bad
```js
describe(‘getProduct function', ()=> {
  test('should return null when provided product id does not exist in the list and should return the product when provided product id exists in the list', () => {
    expect(getProduct(23)).toEqual(null);
    expect(getProduct(10)).not.toBeNull();
  }); 
});
```
### Good
```js
describe(‘getProduct function', ()=> {
  test('should return null when provided product id does not exist in the list', () => {
    expect(getProduct(23)).toEqual(null);
  }); 
 test('should return the product when provided product id exists in the list', () => {
    expect(getProduct(10)).not.toBeNull();
  }); 
});
```
## One Single Initialization
- All initializations should go to beforeEach as a central initialization place.
- Keep it DRY
### Bad
```js
describe('getProductName', () => {
 test('should get production name by id', () => {
     let cacheService = new cacheService();
     let productService = new ProductService(cacheService);
     productService.addProduct({ id: 72, name: 'dinning chair'};
  
     expect(productService.getProductName(72)).toBe('dinning chair');
 });
 test('should return null if the id does not exist', () => {
     let cacheService = new cacheService();
     let productService = new ProductService(cacheService);
  
     expect(productService.getProductName(100)).toBeNull();
 });     
});
```
### Good
```js
describe('getProductName', () => {
 beforeEach(() => {
   let cacheService = new cacheService();
   let productService = new ProductService(cacheService);
 });

 test('should get production name by id', () => {
   expect(productService.getProductName(72)).toBe('dinning chair');
 });

 test('should return null if the id does not exist', () => {
   expect(productService.getProductName(100)).toBeNull();
 });
});
```
## Mock Any External Resources

- Unit tests should be stateless
- Unit tests must not change anything in the external resources or real world.
- Other benefit is that tests run way faster in a mocked environment.
