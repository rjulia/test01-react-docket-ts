import { type } from 'os'
import React, { ReactElement, ReactNode, useState } from 'react'

const Heading = ({ title }: { title: string }) => {
  return (
    <h1>{title}</h1>

  )
}
// old way, no use
const HeadingTwo: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}


const Message = ({ children }: { children: ReactNode }): ReactElement | null => {
  return (
    <p>{children}</p>
  )
}

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


TextContainer.defaultProps = defaultContainerProps

const Product = () => {
  type User = {
    name: string
    age: number
  }

  const [user, setUser] = useState<User | null>(null)
  return (
    <div>
      <Heading title='Hello' />
      <HeadingTwo title='Hello two' />
      <Message>How are you?</Message>
      <TextContainer>TextContainer</TextContainer>
      <TextWidthNumber>{(num: number) => <div>Today's number is {num}</div>}</TextWidthNumber>
    </div>
  )
}


export default Product