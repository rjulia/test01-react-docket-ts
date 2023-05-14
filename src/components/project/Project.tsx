/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { ReactElement, ReactNode, useState } from 'react'
import TextContainer from '../text-container/TextContainer'
import Heading from '../heading/Heading'
import HeadingOld from '../heading-old/HeadingOld'
import TextWidthNumber from '../text-width-number/TextWidthNumber'
import FilterableListView from '../list/List'

function Message({ children }: { children: ReactNode }): ReactElement | null {
  return (
    <p>{children}</p>
  )
}

function Product() {
  type User = {
    name: string
    age: number
  }

  const [user, setUser] = useState<User | null>(null)
  return (
    <div>
      <Heading title="Hello" />
      <HeadingOld title="Hello two" />
      <Message>How are you?</Message>
      <TextContainer>TextContainer</TextContainer>
      <TextWidthNumber>
        {(num: number) => (
          <div>Today&apos;s number is{num}</div>
        )}
      </TextWidthNumber>
      <FilterableListView
        items={[
          { id: 'foo', name: 'foo', value: 11 },
          { id: 'bar', name: 'bar', value: 12 },
          { id: 'baz', name: 'baz', value: 20 },
        ]}
        filterFn={(item) => item.value > 10}
        render={(item) => <div>{item.name}</div>}
      />
    </div>
  )
}

export default Product
