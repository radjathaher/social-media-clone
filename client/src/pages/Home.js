import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm.js';
import { FETCH_POSTS_QUERY } from '../util/graphql';

export default function Home() {
    const { user } = useContext(AuthContext);
    const { loading, data, error /* temp */} = useQuery(FETCH_POSTS_QUERY, {
    });

    if (error) { // temp
        console.error("Error fetching posts:", error);
        return <p>Error fetching posts</p>;
    }
    
    const posts = data ? data.getPosts : [];
    return (
    <Grid columns={3} divided>
        <Grid.Row className='page-title'>
            <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
            { user && (
                <Grid.Column width={16}>
                    <PostForm />
                </Grid.Column>
            )
            }
            {loading ? (
                <h1>Loading posts...</h1>
            ) : (
                <Transition.Group>
                    {posts &&
                    posts.map(post => (
                        <Grid.Column key={post.id}>
                            <PostCard post={post} />
                        </Grid.Column>
                    ))}
                </Transition.Group>
            )

            }
        </Grid.Row>
    </Grid>
    );
};


