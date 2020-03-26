import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Card, CardContent, Avatar, Grid} from '@material-ui/core/';


class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: props.content
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.content !== prevProps.content) {
            this.setState({
                content: this.props.content
            })
        }
    }

    render() {
    var colors = [
        'orange',
        'green',
        'red',
        'blue',
        'pink',
    ]
    
    var randomcolor = colors[Math.floor(Math.random()*colors.length)];
    
    return (
        <div>
            <Typography/>
            <PostCard elevation={2}>
            <CardContent>
                <Poster container spacing={5}>
                    <Grid item>
                        <StyledAvatar randomcolor={randomcolor}>{this.props.name[0]}</StyledAvatar>
                    </Grid>
                    <Grid item>
                        <Name>
                            {this.props.name}
                        </Name>
                    </Grid>
                </Poster>
                
                <Typography align="left" style={{paddingLeft: '80px'}}>
                    {this.state.content}
                </Typography>
                </CardContent>
            </PostCard>
        </div>
        )
    }
  }



const PostCard = styled(Card)`
    min-width: 275px;
    max-width: 1312px;
    margin: 8px;
`
const StyledAvatar = styled(Avatar)`
    background-color: ${props => props.randomcolor}
`
const Poster = styled(Grid)`
    padding-bottom: 10px;
`
const Name = styled(Typography)`
    line-height: 40px;
`

export default Post;