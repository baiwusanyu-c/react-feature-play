```typescript jsx
 const preventClick = () => {
    setCount({ ...count, name: '千里快哉风' })
  }
  // 需要先解构一边 count 
  const handleClick = () => {
    setCount({ ...count, num: count.num + 1 })
  }
```
