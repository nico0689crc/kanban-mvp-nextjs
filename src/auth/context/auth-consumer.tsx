'use client';

import { Box, Typography } from "@mui/material";
import { AuthContext } from "./auth-context";


export const AuthConsumer = ({ children } : { children: React.ReactNode }) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        auth.loading ? 
          (
            <Box sx={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', backgroundColor: 'transparent'}}>
              <Typography variant="h1" sx={{ width: '100%', textAlign: 'center' }}>Loading</Typography>
            </Box>
          ) : (
            children
          )
      )}
    </AuthContext.Consumer>
  );
} 