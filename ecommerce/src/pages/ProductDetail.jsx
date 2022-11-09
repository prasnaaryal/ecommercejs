import React ,{useEffect,useState}from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

function ProductDetail()
{const params=useParams();
  const [singleproduct,setsingleproducts]=useState([]);
  useEffect(()=>{
   
      axios({
          url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/"+
          params.slug,
          method:"GET"
      }).then((res)=>{
        console.log(res.data.data.product)
        setsingleproducts(res.data.data.product)
      })
  },[]);
  

  return (
    <>
    <img src={singleproduct.image}/>
    <table>
      <tr>
      <td>Name</td>
      <td>{singleproduct.name}</td></tr>

      <tr>
      <td>Price</td>
      <td>{singleproduct.price}</td></tr>


    </table>
l
    <h4>Description</h4>
    <p>{singleproduct.detail}</p>
    </>
  )
}

export default ProductDetail