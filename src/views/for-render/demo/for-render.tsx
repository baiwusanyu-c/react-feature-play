export default function renderForRender() {
  const arr = [0, 1, 2, 3, 4, 5]
  const liElm = arr.map((keyBNum) => {
    return (
            <li
                className="
                rounded
                border m-3 px-2 h-8 leading-8
                text-green border-green hover:bg-green hover:text-white"
                key={`keyBNum${keyBNum}`}>index: {keyBNum}</li>
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
