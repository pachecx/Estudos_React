import { useEffect, useState} from 'react'

export const UseEffectHook = () => {

  const [num, setNum] = useState(0)

  useEffect(() => {
    if(num > 0){
      console.log('execução do effec')
    }
  }, [num])

  useEffect(() => {
    console.log('effect de fora')
  })

  return (
    <div>
        <h1>Effect</h1>

        <div>
          <button onClick={() => setNum(num + 1)}>clique</button>
        </div>
    </div>
  )
}
