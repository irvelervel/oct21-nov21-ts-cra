import { useEffect, useState } from 'react'
import Book from '../types/IBook'
import BookDetail from './BookDetail'

const FetchComponent = () => {
  const [books, setBooks] = useState<Book[]>([])
  // the 'never[]' type is getting inferred automatically by TS and
  // our initial [] assignment
  // we have to do better than that if we plan to do anything...

  // books is actually an array of Book! -> Book[]

  const getBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        setBooks(data)
      } else {
        console.log('error fetching books')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <h1>FETCHING DATA HERE 8)</h1>
      <ul>
        {books.map((book) => (
          <BookDetail book={book} key={book.id} />
        ))}
      </ul>
    </>
  )
}

export default FetchComponent
