import React from 'react'
import {Card, CardContent, Typography} from '@mui/material';
function InfoBox({title, cases,total }) {


  return (
<Card className='infoBox'>
    <CardContent >

{/* TITLE */}
        <Typography className='infoBox__title' color="textPrimary" variant="h5">
            {title}
        </Typography>

{/* NUMBER OF CASES */}
        <h2 className='infoBox__cases' >{cases} </h2>
        <small>per one Million </small>


{/* TOTAL NUMBER OF CASES */}
<h4 className='infoBox__cases' >{total} </h4>
        
    </CardContent>
</Card>



  )
}

export default InfoBox