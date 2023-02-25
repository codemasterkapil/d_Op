
import {Grid} from '@mui/material'

// components imported
import Banner from '../banner/Banner.jsx'
import Categories from './Categories'
import Posts from './post/Posts.jsx';

import react from 'react';
const Home=()=>{
    return (
        <>
        <Banner></Banner>
        <Grid container>
           <Grid item lg={2} sm={2} xs={12}>
              <Categories></Categories>
           </Grid>
           <Grid container item lg={10} sm={10} xs={12}>
              <Posts/>
           </Grid>
        </Grid> 
        
        </>
    )
}

export default Home