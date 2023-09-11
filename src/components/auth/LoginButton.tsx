'use client';

import { useAuthContext } from "@/auth/hooks";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";

const LoginButton = () => {
  const { login } = useAuthContext();
  const router = useRouter();

  const onLoginHandler = useCallback(
    async () => {
      await login(process.env.NEXT_PUBLIC_AMPLIFY_USER_EMAIL!, process.env.NEXT_PUBLIC_AMPLIFY_USER_PASSWORD!);
      router.replace(paths.dashboard.root);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Button onClick={onLoginHandler}>Login</Button>
  )
}

export default LoginButton