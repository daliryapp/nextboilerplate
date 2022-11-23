import { Stack, Typography, Container, Box, IconButton } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Footer = () => {

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.30)',
        zIndex: 10,
        backgroundColor: 'onPrimary.main'
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          p: 1,
          pl: { xs: 2, sm: 0 },
          pr: { xs: 2, sm: 0 },
        }}
      >
        <Stack flexDirection="row-reverse" justifyContent="space-between">
          <IconButton >
            <Stack flexDirection="column" justifyContent="center" alignItems="center">
              <PermIdentityOutlinedIcon />
              <Typography variant="body2">ورود</Typography>
            </Stack>
          </IconButton>
          <IconButton >
            <Stack flexDirection="column" justifyContent="center" alignItems="center">
              <PhoneOutlinedIcon />
              <Typography variant="body2">تماس</Typography>
            </Stack>
          </IconButton>
          <IconButton >
            <Stack flexDirection="column" justifyContent="center" alignItems="center">
              <LocalGroceryStoreOutlinedIcon />
              <Typography variant="body2">سبد خرید</Typography>
            </Stack>
          </IconButton>
          <IconButton >
            <Stack flexDirection="column" justifyContent="center" alignItems="center">
              <GridViewOutlinedIcon />
              <Typography variant="body2">دسته ها</Typography>
            </Stack>
          </IconButton>
          <IconButton >
            <Stack flexDirection="column" justifyContent="center" alignItems="center">
              <HomeOutlinedIcon />
              <Typography variant="body2">خانه</Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
