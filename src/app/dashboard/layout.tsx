import LogoutButton from "@/components/auth/LogoutButton";
import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
  return (
    <Stack>
      <LogoutButton />
      {children}
    </Stack>
  );
}

export default Layout