

import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'contain',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://www.kindpng.com/picc/m/17-174872_transparent-write-clipart-pen-writing-clip-art-hd.png';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;