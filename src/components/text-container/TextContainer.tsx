import React, { ReactNode } from 'react'

const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
function TextContainer({
  heading,
  children
}: { children: ReactNode } & typeof defaultContainerProps) {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

TextContainer.defaultProps = defaultContainerProps

export default TextContainer