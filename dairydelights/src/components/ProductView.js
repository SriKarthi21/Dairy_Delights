import React from 'react'
import { Grid2 } from '@mui/material';
import ProductCard from './ProductCard';
const ProductView = ({data}) => {
  
  return (
    <Grid2 display='flex' bgcolor={'white'} minHeight={'60vh'}>
      
      <Grid2 display='grid'
       sx={{ padding: 2,
 gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", width:"100%"

      }} >
      {/* <p>{value[1]?.productName}</p> */}
{
  data.map((item,index)=>(

   <ProductCard key={index}    productCard={item}     />


   ))
}</Grid2>

    </Grid2>
  )
}

export default ProductView;