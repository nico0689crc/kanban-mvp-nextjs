'use client';

import { useAuthContext } from "@/auth/hooks";
import { useCallback, useState } from "react";
import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";
import { Button } from "@mui/material";
import { useLocales } from "@/locales";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useLocales();
  const { login } = useAuthContext();
  const router = useRouter();

  const onLoginHandler = useCallback(
    async () => {
      setLoading(true)
      await login(process.env.NEXT_PUBLIC_AMPLIFY_USER_EMAIL!, process.env.NEXT_PUBLIC_AMPLIFY_USER_PASSWORD!);
      router.replace(paths.dashboard.root);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Button variant="contained" disabled={loading} onClick={onLoginHandler}>
      { loading ? "Authenticating..." : t("login") }
    </Button>
  )
}

export default LoginButton