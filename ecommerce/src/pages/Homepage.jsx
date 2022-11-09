import React,{useEffect, useState} from 'react'
import Card from '../components/card'
import Navbar from '../components/Navbar'
import axios from "axios"

function Homepage() {
    const [allproduct,setallproducts]=useState([]);
    useEffect(()=>{
        axios({
            url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
            method:"GET"
        }).then((res)=>{
            console.log(res.data.products.data)
            setallproducts(res.data.products.data)
        })
    },[]);
    

        
  return (
    <>
    
        <div className="row">
            {allproduct.map(function(product){
                return(
                <div className="col-3">
                    
                <Card image={product.image} name={product.name} slug={product.slug}></Card>
            </div>
                )
            })}
       
    </div>


    
    
    
    
    </>
  )
}

export default Homepage