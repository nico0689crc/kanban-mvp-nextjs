'use client';

import { Typography } from "@mui/material";
import { AuthContext } from "./auth-context";


export const AuthConsumer = ({ children } : { children: React.ReactNode }) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <Typography variant="h1">Loading</Typography> : children)}
    </AuthContext.Consumer>
  );
} 