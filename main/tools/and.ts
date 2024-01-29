// 交叉类型
interface NameStruct {
  name:string
}
interface AgeStruct {
  age:number
}
// 同时组合两种类型以上
type ProfileType = NameStruct & AgeStruct
// 新声明的类型必须满足所有成员的类型要求
const profile:ProfileType = {
  name:'chen',
  age:20
}
// never 不存在又是string又是number的类型
type StrAndNum = string & number;

// 两种交叉类型会合并,objectProp对象内的值会组合
type Struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  }
}

type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  }
}

type Composed = Struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp']; // never
type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

// 两个联合类型组成的交叉类型
type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
type UnionIntersection2 = (string | number | symbol) & string; // string

export {}