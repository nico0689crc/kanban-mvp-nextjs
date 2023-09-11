import LoginButton from "@/components/auth/LoginButton";
import { Stack } from "@mui/material";

const LoginView = () => {
  return (
    <Stack width="100%" alignItems="center">
      <LoginButton />
      <div>Login Page</div>
    </Stack>
  )
}

export default LoginView