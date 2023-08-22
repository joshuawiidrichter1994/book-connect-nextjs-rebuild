import BookItem from './book-item';
import classes from './book-list.module.css';

function BookList(props) {
const {items} = props;

return (
    <ul className={classes.list}>
        {items.map((book) => (
            <BookItem 
            key={book.id} 
            id={book.id} 
            title={book.title} 
            location={book.location} 
            date={book.date} 
            image={book.image}
            />
            ))}
    </ul>
);
}

export default BookList;