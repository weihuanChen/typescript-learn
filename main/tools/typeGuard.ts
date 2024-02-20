// is 关键字 + 预期类型,能让类型控制流收集到
function isString(input: unknown): input is string {
  return typeof input === "string";
}
function foo(input: string | number) {
  if (isString(input)) {
    // 正确了
    input.replace("1111", "232323");
  }
  if (typeof input === "number") {
  }
  // ...
}

// 守卫
export type Falsy = false | "" | 0 | null | undefined;
export const isFalsy = (value: unknown): value is Falsy => !value;
// 不包括不常用的 symbol 和 bigint
export type Primitive = string | number | boolean | undefined;
export const isPrimitive = (value: unknown): value is Primitive =>
  ["string", "number", "boolean", "undefined"].includes(typeof value);
export {};
