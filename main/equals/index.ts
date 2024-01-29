interface Foo {
  name: string;
  age: number;
}
interface Bar {
  name: string;
  job: string;
}
// 值类型赋予
// let foo:Foo = {
//   name:'chen',
//   age:18
// }
// let bar:Bar = {
//   name:'chen',
//   job:'fe'
// }
// 值比较，ts中可以不用创建变量，使用关键字declare
// foo = bar

declare let foo: Foo;
declare let bar: Bar;
