'use client';

import { useTheme, alpha } from "@mui/material/styles";
import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode,
  rowGap?: number
}

const FormWrapper = ({ children, ...restProps } : Props) => {
  const theme = useTheme();

  return (
    <Stack 
      rowGap={3} 
      sx={{ 
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        maxWidth: 480, 
        px: 3,
        py: 5,
        backgroundColor: alpha(theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800], 0.5),
        borderRadius: theme.shape.borderRadius * 0.25,
        boxShadow: `6px 6px 1px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800], 0.75)}`
      }} 
      {...restProps}
    >
      {children}
    </Stack>
  )
}

export default FormWrapper