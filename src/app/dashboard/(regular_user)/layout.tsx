'use client';

import { AuthGuard } from "@/auth/guard";
import { Box, Stack, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
  return (
    <AuthGuard>
      <Box sx={{height: '100vh', width: '100vw'}}>
        <Stack height='100%' alignItems='center' justifyContent='center'>
          <Typography variant="h3">Dashboard</Typography>
          {children}
        </Stack>
      </Box>
    </AuthGuard>
  )
}

export default Layout