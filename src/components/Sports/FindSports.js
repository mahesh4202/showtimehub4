import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://www.gmrsports.in/static-assets/waf-images/78/8c/45/16-9/nilxt4oCfY.png?v=12.63&w=1200',
    title: 'Kabaddi',
    width: '33.33%',
  },
  {
    url: 'https://ss-i.thgim.com/public/incoming/aonr4t/article68746207.ece/alternates/LANDSCAPE_1200/IMG_TH06GOAL_2_1_CG8UUIEK.jpg',
    title: 'Football',
    width: '33.33%',
  },
  {
    url: 'https://www.cyclinginindia.com/blog/wp-content/uploads/2022/09/shutterstock_1533400778-min.jpg',
    title: 'Cycling',
    width: '33.33%',
  },
  {
    url: 'https://images.mykhel.com/webp/img/2024/09/gukesh-d-chess-vs-hungary-600-fide-pic-1726280378.jpg',
    title: 'Chess',
    width: '33.33%',
  },
  {
    url: 'https://immaf.org/wp-content/uploads/2021/02/IMMAF-4-5.jpg',
    title: 'MMA',
    width: '33.33%',
  },
  {
    url: 'https://images.forbesindia.com/media/images/2024/Jan/img_227431_mumbaimarathon.jpg',
    title: 'Running',
    width: '33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function FindSports() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}