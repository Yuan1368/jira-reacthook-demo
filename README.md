## TypeScript基本知识梳理

### TypeScript 的类型

9种类型：number / string / boolean / array /函数 / any / void / object / typle / enum / null 和 undefined /unknown / never

#### tuple

数量固定，类型各异的数组。

#### unknown

unknown 表示这个值可以是任何值， 使用 any 时 应当用 unknown 代替。unknown 不能被赋值。

#### never

使用比较少，

```js
const func = () => {
    throw new Error()
}
```

#### interface

interface 并不是一种类型，而是使用上述类型创建一个自定义类型。

### 声明类型的时机

声明变量时可以声明类型

TS 会自动推断类型，不需要声明。

### .d.ts

JS 文件 + d.ts 文件 === ts 文件。

## 