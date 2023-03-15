import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {useState, useEffect} from 'react';
import React from 'react';

const Book = () => {

    const {id} = useParams();
    
    const [bookData, setBookData] = useState({ id: {}});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getBookData = async () => {
        const url = `https://api.matgargano.com/api/books/${id}`;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBookData(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {

        getBookData() 
    },[])


    if(bookData !== null) {
        return (<Container className="bg">
            <div className="text flex flex-col items-center bg-sky-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-sky-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="grow b">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bookData.imageURL}></img>
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className="book mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{bookData.title}</p>
                        <p className="book"><u>Author:</u> {bookData.author}</p>
                        <p className="book"><u>Publisher:</u> {bookData.publisher}</p>
                        <p className="book"><u>Year:</u> {bookData.year}</p>
                        <p className="book"><u>Page Count:</u> {bookData.pages}</p>
                        <p className="book"><u>Country:</u> {bookData.country}</p>
                    </div>   
            </div>
            
        </Container>)
    }
}

export default Book;