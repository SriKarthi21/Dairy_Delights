import { Grid2,Card,Typography,Box,CardContent,CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'
import{useEffect,useRef,useState} from 'react'
import axios from 'axios';
import UserForm from './UserForm';
const ProductDetail = () => {
    const{id}=useParams();
const[product,setProduct]=useState([])
useEffect(()=>{
    try{
        async function fetchById(){
        let response=await axios.get(`http://localhost:3000/products/${id}`)
        setProduct(response.data)
        console.log(response.data);
        }
        fetchById();


    }catch(error){
        console.error("Error on fetchbyId",error);
    }
},[id]);
    // const{price,productName,category,image,nutritionalValue,description}=product
  return (<Grid2 display={'flex'}
     justifyContent={'center'}
    bgcolor={'white'} 
    container alignContent={'center'} >
       <Grid2>
    <Box maxWidth={750} >
      
      <Card sx={{ underline:"none",
          maxWidth: 750, m: 1, bgcolor: "white",
          borderRadius: 3,
        }} >

            <CardMedia
              component="img"
              height="420"
              image={`/${product.image}`}
              alt="product image"
style={{objectFit: 'contain',width:'100%'}}
            />
            <CardContent >   
      <Grid2 display={'flex'} justifyContent={'space-evenly'}>
              <Typography  variant={'h6'}component={'li'} gutterBottom sx={{textTransform:"capitalize"}}>
              {product.description}
              </Typography> 
    <Typography variant={'h6'} component={'li'} textTransform={'capitalize'}>{product.nutritionalValue}</Typography>   
    </Grid2>      
 <Typography varient="h4" fontWeight={'bold'}>
Delivery Information
</Typography>
<Typography variant='body1' component={'ul'} sx={{fontSize:12,margin:0}}>
  <li >
  Our dairy products are packed with care and attention to detail. 
  While we strive for consistency, slight variations in appearance and flavor may occur due to the natural characteristics of dairy ingredients.  </li>
  <li >
  Since products are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to other address.
  </li>
</Typography>
{/* <Typography varient="h4" fontWeight={'bold'}>
Care Instructions
</Typography>
<Typography variant='body1' component={'ul'}sx={{fontSize:12}}>
<li><b>Refrigeration:</b> Store all dairy products in the refrigerator unless otherwise specified.</li>
<li><b>Temperature: Consume</b> dairy products at the recommended temperature, typically chilled. Avoid exposing them to excessive heat.</li>
<li><b>Expiration:</b> Please consume dairy products within their stated shelf life for optimal freshness and flavor</li>
<li>Enjoy your product!</li>

</Typography> */}

            </CardContent>

        </Card>
    </Box>
   </Grid2 >
<Grid2  m={2}  borderRadius={'10px'}>
  <UserForm product={product} />

</Grid2>





    </Grid2>
  )
}

export default ProductDetail