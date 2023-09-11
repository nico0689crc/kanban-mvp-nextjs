'use client';

import { useAuthContext } from "@/auth/hooks";
import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuthContext();
  const router = useRouter();

  const onLoginHandler = useCallback(
    async () => {
      setLoading(true);
      await logout();
      router.replace(paths.auth.login);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Button variant="contained" disabled={loading} onClick={onLoginHandler}>
      { loading ? "Closing..." : "Logout" }
    </Button>
  )
}

export default LogoutButton