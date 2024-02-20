// 函数泛型
// 函数的泛型需要被函数内部或者返回值消费.function get <T> (a:T) { return T }
// 泛型需要被消费才有意义，否则不如使用any

// 示例:声明了一个泛型占位符T,当input被传入时，T会被自动填充.同时返回值的类型也是T(传入的类型和返回类型一致)
function handle<T>(input: T): T {
  return input;
}
// 可以针对泛型设置处理范围
const handle1 = <T extends string | number>(input: T): T => {
  return input;
};

// tsx可能会对<>解析报错,可以改造
const handle2 = <T extends any>(input: T) => {
  return input;
};

// 示例:互换位置,strat的类型被填充至T,end类型被填至U,返回的类型签名互换,可以限制函数的返回值是互换的
function swap<T, U>([strat, end]: [T, U]): [U, T] {
  return [end, strat];
}
// 根据泛型自动会推断出number和string
const swap1 = swap(["陈", 123]);
