```typescript jsx
// useFecth 是后台数据请求方法，该代码块在函数组件中，你会发现初始化时后台请求了两次数据接口
const [sourceData, setSourceData] = useState<string>('')
useEffect(() => {
    useFetch(props.url, (res: string) => setSourceData(() => res))
}, [useFetch])


```
