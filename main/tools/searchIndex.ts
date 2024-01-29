// 索引类型
// k v 键值类型一致
interface AllStringTypes {
  [key:string]:string
}
// 还未赋予属性，就已经确定为string
type PropType1 = AllStringTypes['chenqi']; // string
type PropType2 = AllStringTypes['123213123']; // string

const foo:AllStringTypes = {
  "name":"chenqi"
}

interface Foo {
  chenqi:string,
  400:number
}
// 使用 & {} 可以看到实际的值
// keyof any 可以产生一个number | string |symbol
// keyof 必定产生一个联合类型
type FooKeys = keyof Foo & {}
// 通过字面量的方式访问类型，传入和输出都是类型
type PropAType = Foo['chenqi']; // number
// 通过keyof一次性获取所有类型值
type PropTypeUnion = Foo[keyof Foo]
export {}
