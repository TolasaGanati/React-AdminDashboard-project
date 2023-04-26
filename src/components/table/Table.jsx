import React from 'react'
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = ()=> {
    const rows = [
        {
            id:123,
            product:'kdkskk',
            img:'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on delivery',
            status:'approved'
        },
        {
            id:123223,
            product:'kdkskk',
            img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on delivery',
            status:'pending'
        },
        {
            id:123444,
            product:'kdkskk',
            img:'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on delivery',
            status:'pending'
        },
        {
            id:123445,
            product:'kdkskk',
            img:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on delivery',
            status:'approved'
        },
        {
            id:12367,
            product:'yayay',
            img:'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on delivery',
            status:'pending'
        },
    ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className='tableCell'>Tracking Id</TableCell>
            <TableCell  className='tableCell'>Product</TableCell>
            <TableCell  className='tableCell'>Customer</TableCell>
            <TableCell  className='tableCell'>Date</TableCell>
            <TableCell  className='tableCell'>Amount</TableCell>
            <TableCell  className='tableCell'>Payment Method</TableCell>
            <TableCell  className='tableCell'>Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                    <img src={row.img} alt="" className='image' />
                </div> 
              </TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className={`status ${row.status}`}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List