import React, {useEffect} from "react";
import { fetchQuote} from "./quoteSlice";
import { useDispatch, useSelector } from "react-redux";

 export const Quote = () => {

    const dispatch = useDispatch()
    let quote = useSelector(state => state.quote.quote);

    useEffect(() => {
        function getQuote(){
            dispatch(fetchQuote())
        }
    
        getQuote();
        setInterval(getQuote, 10000)
    }, [])

    return (
        
        <div className="quote-container">
            <h3>{quote.quote}<br />-- {quote.author}</h3>
        </div>
    )
}
