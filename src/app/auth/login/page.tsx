import LoginButton from "@/components/auth/LoginButton";
import { Stack } from "@mui/material";

export const metadata = {
  title: 'Login',
};

export const LoginPage = () => {
  return (
    <Stack>
      <LoginButton />
      <div>Login Page</div>
    </Stack>
  )
}

export default LoginPage;