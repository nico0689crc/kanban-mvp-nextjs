'use client';

import { useAuthContext } from "@/auth/hooks";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";

const LogoutButton = () => {
  const { logout } = useAuthContext();
  const router = useRouter();

  const onLoginHandler = useCallback(
    async () => {
      await logout();
      router.replace(paths.auth.login);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Button onClick={onLoginHandler}>Logout</Button>
  )
}

export default LogoutButton