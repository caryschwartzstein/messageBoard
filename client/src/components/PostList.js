import React from 'react'
import Post from './Post'
import {Grid} from '@material-ui/core'
import {fetchAllPosts} from '../api/posts'
import {connect} from 'react-redux';
import {GET_ALL_POSTS} from '../actions/types'


class PostList extends React.Component {

    componentDidMount() {
        fetchAllPosts()
            .then(data => this.props.dispatch({type: GET_ALL_POSTS, posts: data}))
    }
    
    render() {
        var toRender = this.props.posts || []
        return (
            <Grid>
                {toRender.map( post => (
                    <Post name={post.name} key={post._id} content={post.content}/>
                ))}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})

export default connect(mapStateToProps)(PostList)