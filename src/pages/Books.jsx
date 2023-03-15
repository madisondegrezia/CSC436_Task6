import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //const [search, setSearch] = useState("");


    /* const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(search);
    } */

    const getData = async () => {
        const url = 'https://api.matgargano.com/api/books';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return <>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>

            <div className="text-center he">Explore some of the classics</div>
            {/* <label htmlFor="search">Search Books </label>
            <input type="text" name="search" onChange={searchHandler} value={search} /> */}
            {books.map(book => {
                return <div key={book.id}>
                     <div className="flex justify-center text-center text-2xl relative group hover:text-sky-400">
                                <Link id="a" to={`/Books/${book.id}`}>{book.title}</Link>
                                {/* hover effect */} 
                                <span className="absolute -bottom-1 left-1/5 w-0 h-2 bg-sky-300 group-hover:w-1/5 group-hover:transition-all"></span>  
                                <span className="absolute -bottom-1 right-1/5 w-0 h-2 bg-sky-300 group-hover:w-1/5 group-hover:transition-all"></span></div>
                                <br></br>
                                <Link id="a" to={`/Books/${book.id}`}><img src={book.imageURL} className="imgs"></img></Link>
                    </div>
                    
            })}
            </>
        }

    
    </>
}

export default Books;