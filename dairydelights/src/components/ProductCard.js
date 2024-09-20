import { Description } from '@mui/icons-material';
import { Grid2,Card, CardActionArea, CardContent ,Typography,CardMedia} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const ProductCard = ({productCard}) => {
  const{id,image,productName,price,description}=productCard;
  return (

    <Grid2 margin={3}  item
      size={{ xs: 12,  sm: 6,  md: 4,  lg: 3 }} >
        <Link to={`/details/${id}`}  style={{textDecoration:'none'}}>
      <Card 
       sx={{ 
          maxWidth: 400, maxHeight: 300,bgcolor: "#80ffdf"
          ,borderRadius: 3, boxShadow: "5px 5px 10px rgb(210, 71, 28)"
        }}>                 
        <CardActionArea >
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt="card images"
            sx={{objectFit:'fill'}}
          />
          <CardContent sx={{textAlign:'center',color:'blue'}} >   

            <Typography   gutterBottom variant="h5" component="div">
              {productName}
            </Typography> 
            <Grid2 display={'flex'} justifyContent={'space-between'}>
            <Typography variant="subtitle2" style={{ color: 'green' }}>
              {price} (&#8377;)</Typography>
            <Typography variant="subtitle2" sx={{color:'brown'}}>{description}</Typography>
            </Grid2>
</CardContent>
                </CardActionArea>

  </Card>
  </Link>
    </Grid2>
  );
}

export default ProductCard