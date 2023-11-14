export type User = {
  name: string;
};

declare namespace MyNamespace {
  interface User {
    name: string;
  }
  export type hoge = "";
}

// namespace MyNamespace {
//   export interface User {
//     age: number;
//   }
// }

type Foo = MyNamespace.User;
