// Into to Jest 

// Write unittests with Jest 
// Jest is an open-source testing platform written by Facebook 
// Built on top of Jasmine 
// People prefer Jest. 

// $ npm i --global jest 
// jest --version 

// NAME_OF_FILE.test.js 
// Put in same file as js file 
// Or folder called __tests__ 
// If you have a package.json, you don't need additional configuration. 
// If not, create jest.config.js file. It can be empty, you just need one. 

// Run all test using the command jest 
// You can run an individual test using jest NAME_OF_FILE

/////////////////////////////////// 

// Matchers
// .toEqual(obj)
// Has the same value (eg, different objects with same values match)
// .toBe(obj)
// Is the same object (eg, different objects with same values do not)
// .toContain(sought)
// Does object/array contain this item?
// .not.
// Add before matcher to invert (eg expect("hi").not.toEqual("bye"))
// https://jestjs.io/docs/en/using-matchers

// .toBeCloseTo 
// .toMatch 
// .toContain
// .toThrow 
// .toBeWithinRange

// Sometimes, you're not sure what part of an object will be. 
// Use expect.any(type) and it will match any of that type. 

