import { Button, Grid2 } from '@mui/material'
import React from 'react'

const MenuBar = ({onFilterValue,onFilter}) => {
   const menuItems=["MILK","BUTTER","GHEE","PANEER","YOGURT","BUTTERMILK","CHEESE","CURD"]
  return (
<Grid2 bgcolor={'#0a2bfc'} display={'flex'} justifyContent={'center'}  spacing={5}>
        
   <Grid2 
    item  xs={4} sm={6} md={3} lg={2}>
       <Button sx={{color:'white'}} onClick={onFilter} value="">ALL</Button>

        {menuItems.map((items,index)=>(
            <Button sx={{color:'white'}} key={index} onClick={onFilter} value={onFilterValue=items}>{items}</Button>
        ))}

</Grid2>

   
</Grid2>
  )
}

export default MenuBar