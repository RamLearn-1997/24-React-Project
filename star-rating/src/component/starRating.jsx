import { useState } from 'react';
import '../App.css';

export default function starRating({noOfStar = 1}){

    // creating state for rating and hover (when we move mouse on star to show some styling 
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // handClick function will handle setting a rating 
    function handleClick(getCurrentIndex){
      setRating(getCurrentIndex);
      
    }

    // handleMouseEnter function will handle hovering state of star
    function handleMouseEnter(getCurrentIndex){
      setHover(getCurrentIndex)
      
    }

    // handleMouseLeave function will handle final state and rating of the star
    function handleMouseLeave(){
      setHover(rating)
     
    }


    return (
        <div className="star-rating">
          {
            [...Array(noOfStar)].map((_,index) => {
                index += 1
                return <span className={index <= (hover || rating) ? 'star active' : 'star inactive'}
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}>&#9733;</span> 
            })
          }
            
        </div>
    );
}