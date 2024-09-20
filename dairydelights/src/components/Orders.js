import axios from 'axios';
import {useState,useEffect} from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid2 } from '@mui/material';
const Orders = () => {
  const [order,setOrder]=useState([]);
useEffect(()=>{
  async function fetchOrders(){
  const response=await axios.get("http://localhost:3000/orders")
  setOrder(response.data);
  console.log(response.data)
  }
  fetchOrders();

},[])
  
  return (
    
    <Grid2 minHeight={'60vh'}>



<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead bgColor={'#0a2bfc'} >
          <TableRow >
            <TableCell sx={{color:'white'}}align="left">Id</TableCell>
            <TableCell sx={{color:'white'}}align="left">Name</TableCell>
            <TableCell sx={{color:'white'}}align="center">Email</TableCell>
            <TableCell sx={{color:'white'}}align="center">Phone </TableCell>
            <TableCell sx={{color:'white'}}align="center">Date</TableCell>
            <TableCell sx={{color:'white'}}align="center">Product</TableCell>
            <TableCell sx={{color:'white'}}align="center">Quantity</TableCell>
            <TableCell sx={{color:'white'}}align="center">Price</TableCell>
            <TableCell sx={{color:'white'}}align="center">Address</TableCell>
            <TableCell sx={{color:'white'}}align="center">City</TableCell>
            <TableCell sx={{color:'white'}} align="center">State</TableCell>
            <TableCell sx={{color:'white'}}align="center">ZipCode</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
        {/* {order.map((items,index)=>(
       <p key={index}    >{items.email}</p> 
      ))} */}

          {order.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='left'> {row.id}</TableCell>
              <TableCell align="left">{row.firstName}{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.contactNo}</TableCell>
              <TableCell align="center">{row.orderDate}</TableCell>
              <TableCell align="center">{row.productName}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.postalCode}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>
  )
}

export default Orders