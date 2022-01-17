## emotion 写 React 组件样式

### emotion 写行内样式

需要现在组件顶部写上下面代码，告知当前组件用了 emotion 行内样式

```react
/* @jsxImportSource @emotion/react */
```

行内样式的格式为：`css={/* 行内样式代码 */}`

```react
<Form css={{ marginBottom: "2rem" }} layout={"inline”}>
</Form>
```
