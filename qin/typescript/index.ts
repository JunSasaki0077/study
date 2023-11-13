export type User = {
  name: string;
};

declare namespace MyNamespace {
  interface User {
    name: string;
  }
}
// namespace MyNamespace {
//   export interface User {
//     age: number;
//   }
// }

type Foo = MyNamespace.User;
