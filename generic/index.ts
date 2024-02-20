// 条件类型
// 泛型可以设置条件类型
// 通过传入的泛型，确定结果
type IsEqual<T> = T extends true ? 1 : 2;
type A = IsEqual<true>; // 1
type B = IsEqual<false>; // 2
type C = IsEqual<'112323'>; // 2

// 默认类型
type Factory<T = boolean> = T | number | string
// 可以不携带参数
const foo: Factory = false;
export {}