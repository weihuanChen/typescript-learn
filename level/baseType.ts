// Object 这样判断不合适，因为他是对象，函数，数组的类型
// [] extends Object,可以简单的将数组字面量视为Object的字面量类型
// 字面量类型 < 对应的原始类型
type Result1 = "lian" extends string ? 1 : 2; //1
type Result2 = 1 extends number ? 1 : 2; //1
type Result3 = true extends boolean ? 1 : 2; //1
type Result4 = { name: string } extends Object ? 1 : 2; //1
type Result5 = { name: "lian" } extends Object ? 1 : 2; //1
type Result6 = [] extends Object ? 1 : 2; //1

// 不需要所有的成员都是字面量类型，如r9是true，或者都是来自于同一个基础类型，只需要这个基础类型存在于联合类型之中
type Result7 = 1 extends 1 | 2 | 3 | 4 ? 1 : 2; //1 值包含在字面量联合类型中的一种
type Result8 = "s" extends "s" | "i" | "w" ? 1 : 2; //1
type Result9 = true extends true | false ? 1 : 2; //1

// 字面量类型 (123) < 包含此字面量类型的联合类型、原始类型 (123 | 234、number) < 包含此原始类型的联合类型 ( number | string )
type Result10 = string extends string | false | number ? 1 : 2; //1

// 由同一个基础类型的字面量组成的联合类型，可以判为该基础类型的小弟
// 同一基础类型的字面量组成的联合类型 < 该基础类型
// {} | [] < object
type Result11 = "s" | "i" | "w" extends string ? 1 : 2;
type Result12 = {} | (() => void) | [] extends object ? 1 : 2;

// 合并结论 字面量类型 < 包含此字面量类型的联合类型，同一基础类型 < 对应原始类型
type Result13 = "si" extends "si" | "w"
  ? "si" | "wei" extends string
    ? 2
    : 1
  : 0;
// 直接看最后一个条件为真时的值 (2),此条件为真，说明之前的条件判断都成立

// 类型继承链中出现一个{}字面量,且也是成立的
type Result14 = string extends String ? 1 : 2; //1
type Result15 = String extends {} ? 1 : 2; //1

type Result16 = {} extends object ? 1 : 2; //1
type Result18 = object extends {} ? 1 : 2; //1
// 在结构化类型系统中,String 被认为是 {} 的子类,但是 String < {} < Object 的链中 String extends Object 不成立
type Tmp = string extends object ? 1 : 2;//2

// 16-18,19-21判断成立,但不意味着 {} 和 object 相等、和 Object 相等
// 他们是出于两种不同的比较方式
type Result17 = object extends Object ? 1 : 2; // 1
type Result20 = Object extends object ? 1 : 2; // 1

type Result19 = Object extends {} ? 1 : 2; // 1
type Result21 = {} extends Object ? 1 : 2; // 1

// {} extends object、{} extends Object 是两种不同的比较方式，意味着 {} 是object 和Object 的字面量类型
// 是从类型信息的层面出发，即字面量类型提供了更加详细的类型信息
// object extends Object、Object extends object是从结构化类型系统比较出发,{} 被视为一个空对象，基本等于所有类型的基类

// object extends Object、Object extends object 情况特殊.Object 包含了所有除topType之外的类型，object包含了所有非原始类型的类型
// 产生了互相包含的现象
// 原始类型 (string等) < 原始类型对应的装箱类型(String) < Object 类型 
export {};
