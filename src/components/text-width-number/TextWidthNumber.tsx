import React, { ReactNode, useState } from 'react'

function TextWidthNumber({
  children
}: { children: (num: number) => ReactNode }) {
  const [state, setState] = useState(1)
  return (
    <div>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
        <button onClick={() => setState(state - 1)}>Struc</button>

      </div>
    </div>
  )
}


export default TextWidthNumber
