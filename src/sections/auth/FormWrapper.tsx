'use client';

import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Stack, useMediaQuery } from "@mui/material";

type Props = {
  children: React.ReactNode,
  rowGap?: number
}

const Wrapper = ({ children } : Props) => {
  const { breakpoints } = useTheme();
  
  const isDownSm = useMediaQuery(breakpoints.down('sm'));

  const content = isDownSm ? (
    children
  ) : (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
    
  return content;
}

const FormWrapper = ({ children, ...restProps } : Props) => {
  return (
    <Wrapper>
      <Stack maxWidth="480px" rowGap={3} {...restProps}>
        {children}
      </Stack>
    </Wrapper>
  )
}

export default FormWrapper