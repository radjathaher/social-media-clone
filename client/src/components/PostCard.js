import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

export default function PostCard({ post }) {
    const { user } = useContext(AuthContext);

    const { body, createdAt, username, id, likeCount, commentCount, likes} = post ?? {};
    
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
            <Card.Header>{username ?? 'Unknown user'}</Card.Header>
            <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
            <Card.Description>{body ?? 'No content available'}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <LikeButton user={user} post={{ id, likes, likeCount}}/>
            <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {commentCount ?? 0}
                </Label>
            </Button>
            {user && user.username === username && <DeleteButton postId={id} /> }
        </Card.Content>
    </Card>
    );
}