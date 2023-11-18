// Import the function sum from the app.js file
const { sum } = require("./app.js");
const { fromEuroToDollar } = require("./app.js");

// Start your first test
test("adds 14 + 9 to equal 23", () => {
  // Inside the test we call our sum function with 2 numbers
  let total = sum(14, 9);

  // We expect the sum of those 2 numbers to be 23
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
  // Import the function from app.js
  const { fromEuroToDollar } = require("./app.js");

  // Use the function like its supposed to be used
  const dollars = fromEuroToDollar(3.5);

  // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One usd should be 146.26 yen", function () {
  const { fromDollarToYen } = require("./app.js");

  const yen = fromDollarToYen(1);

  const expected = 1 * 146.26;

  expect(yen).toBe(expected);
});

test("Converting yen to pounds", function () {
  const { fromYenToPound } = require("./app.js");

  const pounds = fromYenToPound(1000);

  const expected = 1000 * 0.0055591;

  expect(pounds).toBeCloseTo(expected);
});
