// 联合类型 - 类型别名
type StatusCode = 200 | 400 | 500 | 502;
type PossibleDataType = number | string | (() => unknown);
const status: StatusCode = 502;
// 函数类型
type Handler = (e:Event) => void
const clickHandler: Handler = (e) => { };
const moveHandler: Handler = (e) => { };
const dragHandler: Handler = (e) => { };
// 对象类型
type ObjType = {
  name: string;
  age: number;
}

// 类型别名接受泛型，改为工具类型,泛型参数为入参，返回新的类型
type Factory<T> = T |string | number
// 直接声明做标注
let foo:Factory<boolean> = true;
// 再度声明类型别名
type FactoryWithBool = Factory<boolean>;
const foo1:FactoryWithBool = true

// 含空值的类型
type MaybeNull<T> = T | null;
// 传入的input可能含null,接收泛型中含有handle函数的对象
function process(input:MaybeNull<{ handle:()=>{} }>){
  input?.handle
}


export {}