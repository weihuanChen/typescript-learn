// 在 Commonjs 规范里，所有模块在引用时都默认被抛至全局,没有闭包的模块概念
// 因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错。
const name = ''
export {}