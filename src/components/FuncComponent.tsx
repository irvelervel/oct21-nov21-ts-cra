import { useState } from 'react'

interface FuncComponentProps {
  title: string
  subTitle: string
  color?: string
}

// no type arguments in a functional component!
// you just describe the props object in the arrow function arguments

// const FuncComponent = (props: FuncComponentProps) => {
const FuncComponent = ({ title, subTitle, color }: FuncComponentProps) => {
  const [book, setBook] = useState<null | string>(null)
  // we should find a way of defining a UNION type for book!
  // book should be able to be null OR a string
  // this is especially useful when your INITIAL VALUE is different from a LATER VALUE
  const [counter, setCounter] = useState(0)

  return (
    <div style={{ color: color }}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <div>BOOK TITLE IS: {book}</div>
      <button onClick={() => setBook('Lord of the Rings')}>CHANGE BOOK</button>
      <div>counter is currently: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>INCREASE</button>
    </div>
  )
}

export default FuncComponent
