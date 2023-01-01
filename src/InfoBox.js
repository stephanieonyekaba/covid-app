import React from 'react'
import {Card, CardContent, Typography} from '@mui/material';
function InfoBox({title, cases,total }) {


  return (
<Card className='infoBox'>
    <CardContent>

{/* TITLE */}
        <Typography className='infoBox__title' color="textPrimary" variant="h6">
            {title}
        </Typography>

{/* NUMBER OF CASES */}
        <h2 className='infoBox__cases' >{cases}</h2>

{/* TOTAL NUMBER OF CASES */}
        <Typography className='infoBox__total' color="red" variant="h6">
            <bold>{total} Total  </bold>
        </Typography>
    </CardContent>
</Card>



  )
}

export default InfoBox