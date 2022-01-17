## type 自定义类型

type 与 interface 有很多相似的地方，type 侧重于定义变量的类型，而 interface 是在定义对象的类型。

```typescript
type Type = string | number;
let a: Type = 111;

interface NewType {
  name: string;
}

let obj: NewType = { name: "aaa" };
type NewType1 = { name: string };
let obj1: NewType1 = { name: "bbb" };
```

type 可以在不修改原有类型的基础上使原有类型中的类型变得可选。

```typescript
type NewType2 = {name:string; age: number};
let obj2:Partial<NewType2> = {name:"bbb"}; // Partial 令 NewType2 中的所有属性变成可选属性。
let obj3:Omit<NewType2, "name">={age:3}; // Omit 是令 NewType2 中的 name 属性剔除

let obj4:Pick<NewType2, "age">={age:0}; //挑选出 NewType2 中的 age 属性 作为新类型
type NewType1 = {name:string};
let obj5:Exclude<NewType2, "gender">={name:"bob", age: 23}; // Exclude<T, U>: T是否包含U类型，如果包含返回 never 类型， 不是则使用 T类型
keyof NewType2 // 取出 NewType2 中的所有属性键的值。
```
