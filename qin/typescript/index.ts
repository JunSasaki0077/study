export function double(x: number | string) {
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}

export const Obj = {
  foo: "foo",
  bar: "bar",
};

type Key = keyof typeof Obj;

const key: Key = "foo";

function test(x: keyof typeof Obj) {
  return;
}

test("foo");
