import PostList from './PostList'
import NewPost from './NewPost'
import {Grid} from '@material-ui/core'
import React from 'react'


const Home = () => {
    return (
        <div style={{backgroundColor: "grey", minHeight: '100%', padding: '20px'}}>
            <Grid align="center" >
                <NewPost name="Jonathan"/>
                <PostList/>
            </Grid>
       </div>
    );

}

export default Home