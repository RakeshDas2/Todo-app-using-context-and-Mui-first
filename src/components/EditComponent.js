import React, { useContext } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from '@mui/material'
import TodoContext from '../context/contextApi'
function EditComponent() {
  const recivedData=useContext(TodoContext)
console.log(recivedData);

const closeDialoge=()=>{
recivedData.setShow(false)
}

const handelChange=(e)=>{
recivedData.data=e.target.value
}

const editData=()=>{
  const finalDataCopy=[...recivedData.finalData]
  finalDataCopy.splice(recivedData.editIndex,1,recivedData.data)
  recivedData.setFinalData(finalDataCopy)
  recivedData.setShow(false)
}
  return (
    <div>
      <Dialog open={recivedData.show} onClose={closeDialoge}>
        <DialogTitle>
         <Typography variant='h3' color='primary'>
         Edit Your Task
         </Typography>
        </DialogTitle>
        <DialogContent dividers>
<TextField onChange={(e)=>{handelChange(e)}}/>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={()=>{editData()}}>Done</Button>
          <Button variant='outlined' onClick={()=>{closeDialoge()}} >Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditComponent