// 类型映射
type Stringify<T> = {
  [K in keyof T]: string;
};

interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}
// 将接口Foo传入 通过keyof 转换成联合类型，通过k in 映射字段key值，属性名设置为string
type StringifiedFoo = Stringify<Foo>;

// 等价于
// interface StringifiedFoo {
//   prop1: string;
//   prop2: string;
//   prop3: string;
//   prop4: string;
// }

// 伪代码
// const StringifiedFoo = {};
// for (const k of Object.keys(Foo)){
//   StringifiedFoo[k] = string;
// }

// 能拿到k,也可以取值
type Clone<T> = {
  [K in keyof T]: T[K];
};
// 完成类型拷贝
type cloneString = Clone<Foo>
export {};
