import '../App.css';
import StarRating from './starRating';


function StarRatingPage() {

  return (
    <>
      <div className="header">
        <p>Star Rating in React</p>
      </div>
      <div className="container">
        <div className="content">
          <h3>What is your rating?</h3>
          <p>rate your experience for better improvement in the<br/> product, thank you for support</p>
        </div>
        <div className="maincomponent">
           <StarRating noOfStar={5}/>
        </div>
        <div className="button-container">
          <button className='btn1'>Submit</button>
          <button className='btn2'>No Thanks</button>
        </div>
      </div>
      
    </>
  )
}

export default StarRatingPage