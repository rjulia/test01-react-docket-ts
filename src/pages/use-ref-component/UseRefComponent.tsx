import React from 'react'

function UseRefComponent() {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default UseRefComponent