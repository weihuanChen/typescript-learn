### TypeScript 类型判断层级
- 条件类型判断
- 赋值兼容性检查

#### 值类型判断
```TypeScript
  type Result = 'lian' extends string ? 1 : 2
  // 为1 ,则为子类型
```