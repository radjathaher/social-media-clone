import React from 'react'
import { useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';

import PostCard from '../components/PostCard';

export default function Home() {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    
    const posts = data ? data.getPosts : [];
    return (
    <Grid columns={3} divided>
        <Grid.Row className='page-title'>
            <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
            {loading ? (
                <h1>Loading posts...</h1>
            ) : (
                posts &&
                posts.map(post => (
                    <Grid.Column key={post.id}>
                        <PostCard post={post} />
                    </Grid.Column>
                ))
            )

            }
        </Grid.Row>
    </Grid>
    );
};

const FETCH_POSTS_QUERY = gql`
    {    
        getPosts {
            id body createdAt username likeCount
            likes {
                username
            }
            commentCount
            comments {
                id username createdAt body
            }
        }
    }
`;
