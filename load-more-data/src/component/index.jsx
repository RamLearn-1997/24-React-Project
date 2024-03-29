import { useState, useEffect } from 'react';
import '../App.css'


export default function loadMoreData(){

    //Adding necessary state for Load More Data components
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableBtn,setDisableBtn] = useState(false)

    // fetching the dummy api 
    async function fetchProducts(){
        // Error handling 
        try{
            setLoading(true)
          const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20}`);

          const result = await response.json()

          if(result && result.products && result.products.length){
            setProducts((prevData) => [...prevData, ...result.products] )
            setLoading(false)
          }
        }catch(e){
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    },[count])

    useEffect(() => {
        if (products && products.length === 100) setDisableBtn(true)
    },[products])

    if(loading){
        return <p>Data is Loading.... please wait</p>
    }

    return (
        <div className='load-more-container'>
           <div className='product-container'>
            {
                products && products.length ? 
                 products.map(item => <div className='product' key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                 </div>)
                : null
            }
           </div>
           <div className='button-container'>
             <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load More Products</button>
           </div>
           {
            disableBtn ? <p>you have reached to 100 product !</p> : null
           }
        </div>
    );
}