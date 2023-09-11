import { Box, Stack, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
  return (
    <Box sx={{height: '100vh', width: '100vw'}}>
      <Stack height='100%' alignItems='center' justifyContent='center'>
        <Typography variant="h3">Auth</Typography>
        {children}
      </Stack>
    </Box>
  )
}

export default Layout