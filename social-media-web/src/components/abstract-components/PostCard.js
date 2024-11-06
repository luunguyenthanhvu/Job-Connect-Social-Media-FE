import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from "@mui/material";

const formatContent = (content) => {
  return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
  ));
};

const PostCard = ({ maxWidth, post }) => {
  const [showFullContent, setShowFullContent] = React.useState(false); // Trạng thái để hiển thị nội dung đầy đủ

  // Kiểm tra xem nội dung có quá dài không
  const isLongContent = post.content.length > 200;

  // Nội dung hiển thị
  const displayedContent = showFullContent ? post.content : post.content.substring(0, 200) + (isLongContent ? '...' : '');

  return (
      <Card sx={{ maxWidth: maxWidth, marginBottom: '10px' }}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={post.avt} />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.date}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {formatContent(displayedContent)}
          </Typography>
          {isLongContent && !showFullContent && ( // Hiển thị nút "See More" nếu nội dung dài
              <Typography
                  variant="body2"
                  sx={{ color: 'primary.main', cursor: 'pointer', marginTop: 1 }}
                  onClick={() => setShowFullContent(true)}
              >
                See More
              </Typography>
          )}
        </CardContent>
        <CardMedia
            component="img"
            image={post.image}
            alt="Post image"
        />
        <CardActions
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'text.secondary', mx: 1 }}>
              {post.likes}
            </Typography>

            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'text.secondary', mx: 1 }}>
              {post.comments}
            </Typography>
          </Box>
          <IconButton
              aria-label="share"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  );
};

export default PostCard;
