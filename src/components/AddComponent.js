import React, { useContext } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import TodoContext from '../context/contextApi'
import { Box } from '@mui/system';


function AddComponent() {
    const recivedData=useContext(TodoContext)
    console.log(recivedData.finalData);
    console.log('Rakesh')


const deleteData=(index)=>{
   const finalDataCopy=[...recivedData.finalData]
   const filteredFinalData=finalDataCopy.filter((data,ind)=>{
       return ind !==index
   })

   recivedData.setFinalData(filteredFinalData)
}

const editData=(index,data)=>{
       recivedData.setShow(true)
       recivedData.setEditIndex(index)
       recivedData.setMoData(data)
}

// const doneData=(index)=>{
//    // recivedData.setEditIndex(index)
//    const finalDataCopy=[...recivedData.finalData]
// //    finalDataCopy[index].style.color='red'
// //    recivedData.setFinalData(finalDataCopy)

//    console.log(finalDataCopy[index]);
// }

    return (
        <div>
            <Paper style={{width:'900px', marginLeft:'100px'}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {recivedData.finalData.map((data,index)=>{
                            return <TableRow key={index}>
                                <TableCell><Typography variant='h5' >{data}</Typography></TableCell>
                                <TableCell style={{display:'flex'}}><Box pl={2}><EditIcon onClick={()=>{editData(index,data)}}/></Box>
                                <Box pl={2}><DoneIcon onClick={()=>{deleteData(index)}}/></Box></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </div>
    )
}

export default AddComponent