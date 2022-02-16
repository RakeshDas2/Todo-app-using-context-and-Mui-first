import React, { useContext, useEffect } from 'react'
import { Button, Card, Typography, Container, Grid, CardContent, CardActionArea, CardActions, Box, TextField } from '@mui/material'
// import { makeStyles } from '@mui/styles'
import AddBoxIcon from '@mui/icons-material/AddBox';
import TodoContext from '../context/contextApi'

// const useStyle=makeStyles(theme=>({
//   root:{
//     width:'100vw',
//     height:'100vh',
//     backgroundColor:theme.palette.grey[200]
//   }
// }))



function ShowComponent() {
  // const classes =useStyle()

  const recivedData = useContext(TodoContext)
  console.log(recivedData);
  const eventHandler = (e) => {

    //recivedData.setData(e.target.value)
    recivedData.data = e.target.value
    console.log(recivedData.data);

  } 


  const add = () => {

    // recivedData.finalData.push(recivedData.data)
    if (recivedData.data !== '') {
      const finalDataCopy = [...recivedData.finalData]
      finalDataCopy.push(recivedData.data)
      recivedData.setFinalData(finalDataCopy)
    }

    console.log(recivedData.finalData);

  }
  return (
    <Container>
      <Grid container >
        <Grid item sm={8} pt={15} pl={19}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant='h3' color='red' align='center'>Todo App</Typography>
                <Box>
                  <TextField placeholder='Enter your task' fullWidth varient='outlined' margin='normal' label='To Do' onChange={(e) => { eventHandler(e) }} />
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box mt={2} >
                <Button color='primary' variant='contained' startIcon={<AddBoxIcon />} onClick={() => { add() }}> Add </Button>
              </Box>
            </CardActions>

          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShowComponent