import Book from '../types/IBook'

interface BookDetailProps {
  book: Book
}

const BookDetail = ({ book }: BookDetailProps) => {
  return <li>{book.title}</li>
}

export default BookDetail
