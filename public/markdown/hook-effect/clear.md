```typescript jsx
const [timer, setTimer] = useState<number>(0)
useEffect(() => {
    setTimer(setInterval(()=>console.log('running...'),3000))
    return () =>{
        clearTimeout(timer)
        setTimer(0)
    }
})

```
