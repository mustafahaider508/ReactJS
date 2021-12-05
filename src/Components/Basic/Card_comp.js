import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography  from "@mui/material/Typography";
import CardActions  from "@mui/material/CardActions";
import Button  from "@mui/material/Button";
import { Container, Grid } from '@mui/material';



function Card_comp({menudata}) {

    return (

        <>
        <Container maxWidth="lg">
            <Grid container spacing={2} style={{paddingTop:"40px"}}>   
      
            {menudata.map((i) => {
         
              const {id,img,cat,heading,des} = i;
            return(
              <>
             <Grid item  lg={4}  md={4} sm={4} xs={12}>
             <Card style={{textAlign:"center"}} variant="outlined"  key={id}
            sx={{ maxWidth: 345 }}>
            <CardMedia
        component="img"
        
        image={img}
        alt="green iguana"
      />
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {cat}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {des}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}} >
        
          
        <Button  variant="outlined" size="small">Order Now</Button>
      
       
      </CardActions>
            </Card>
              
         </Grid>
       
         
            
              </>
            )
         
             })}


</Grid>
</Container>
         
        </>
            
        
    )
}

export default Card_comp
