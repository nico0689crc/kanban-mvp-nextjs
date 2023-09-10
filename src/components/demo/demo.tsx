'use client';

import useLocales from '@/hooks/use-locales';

export default function Demo() {
  const { t } = useLocales();
  
  return (
    <h1>{t('demo')}</h1>
  ) 
}

