'use client';

import useLocales from '@/locales/hooks/use-locales';
import Box from "@mui/material/Box";

export default function Demo() {
  const { t } = useLocales();
  
  return (
    <Box sx={{padding: 2}}>
      <h1>{t('demo')}</h1>
    </Box>
  ) 
}

