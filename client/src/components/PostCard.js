import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import moment from 'moment';

export default function PostCard({ post: { body, createdAt, username, id, likeCount, commentCount, likes} }) {
    function likePost () {
        console.log('Like post!');
    }
    
    function commentPost () {
        console.log('Commment post!');
    }

    return (
        <Card fluid>
        <Card.Content>
            <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Card.Header>{username}</Card.Header>
            <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
            <Card.Description>{body}</Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
        </Card.Content>
        <Card.Content extra>
            <Button as='div' labelPosition='right' onClick={likePost}>
                <Button color='teal' basic>
                    <Icon name='heart' />
                </Button>
                <Label basic color='teal' pointing='left'>
                    {likeCount}
                </Label>
            </Button>
            <Button as='div' labelPosition='right' onClick={commentPost}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {commentCount}
                </Label>
            </Button>
        </Card.Content>
    </Card>
    );
}