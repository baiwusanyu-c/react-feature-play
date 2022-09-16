```typescript jsx

export default function renderForKey(){
    const arr = [6,7,8,9,10]
    const liElm = arr.map((keyBNum) =>{
        return (
            <li
                className='
                rounded 
                border m-3 px-2 h-8 
                leading-8 text-green border-green'
                key={'keyBNum' + keyBNum}>
                index: {keyBNum}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {liElm}
            </ul>
        </div>
    )
}

```
