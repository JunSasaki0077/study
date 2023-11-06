const foo = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    return { value: arg.toLocaleLowerCase() };
  }

  return { value: arg.toFixed };
};

// const foo1 = foo("");
// const foo2 = foo(1);
// const foo3 = foo([false]);
