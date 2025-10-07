const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is David", () => {
    expect(values.firstName).toEqual("David");
  });
  test("lastName is Delgadillo", () => {
    expect(values.lastName).toEqual("Delgadillo");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 1996", () => {
    expect(values.birthYear).toEqual(1996);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is David Delgadillo and I am 29 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Carlos Stevenson", () => {
    expect(values.fullName).toEqual("David Delgadillo");
  });
  test("age is 29", () => {
    expect(values.age).toEqual(29);
  });
});
