'use client';
import { useCallback } from 'react';
import { useRouter, useSearchParams } from '@/routes/hooks';
import { paths } from '@/routes/paths';
import { useAuthContext } from '@/auth/hooks';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocales } from '@/locales';


import { Link, Stack, Typography } from '@mui/material';
import Iconify from '@/components/iconify';
import LoadingButton from '@mui/lab/LoadingButton';
import FormProvider from "@/components/hook-form/FormProvider";
import { RHFTextField } from '@/components/hook-form';
import { RouterLink } from '@/routes/components';
import { useCountdownSeconds } from '@/hooks/useCountdown';
import RHFCode from '@/components/hook-form/RHFCode';

const VerifyView = () => {
  const { t } = useLocales();

  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const { confirmRegister, resendCodeRegister } = useAuthContext();

  const { countdown, counting, startCountdown } = useCountdownSeconds(60);

  const VerifySchemaSchema = Yup.object().shape({
    code: Yup.string().min(6, t('verify_view.validation.code_format')).required(t('verify_view.validation.code_required')),
    email: Yup.string().required(t('verify_view.validation.email_required')).email(t('verify_view.validation.code_format')),
  });

  const defaultValues = {
    code: '',
    email: email || '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchemaSchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await confirmRegister(data.email, data.code);
      router.push(paths.auth.login);
    } catch (error) {
      console.error(error);
    }
  });

  const handleResendCode = useCallback(async () => {
    try {
      startCountdown();
      await resendCodeRegister(values.email);
    } catch (error) {
      console.error(error);
    }
  }, [resendCodeRegister, startCountdown, values.email]);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack rowGap={3} sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: 480, px: 3 }}>
        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h3">{t('verify_view.labels.title')}</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('verify_view.labels.sub_title')}
          </Typography>
        </Stack>
        <RHFTextField
          name="email"
          label={t('verify_view.labels.email')}
          placeholder="example@gmail.com"
          InputLabelProps={{ shrink: true }}
        />

        <RHFCode name="code" />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          {t('verify_view.labels.verify')}
        </LoadingButton>

        <Typography variant="body2">
          {t('verify_view.labels.resend_title')}{`  `} 
          <Link
            variant="subtitle2"
            onClick={handleResendCode}
            sx={{
              cursor: 'pointer',
              ...(counting && {
                color: 'text.disabled',
                pointerEvents: 'none',
              }),
            }}
          >
            {t('verify_view.labels.resend')}{counting && `(${countdown}s)`}
          </Link>
        </Typography>

        <Link
          component={RouterLink}
          href={paths.auth.login}
          color="inherit"
          variant="subtitle2"
          sx={{
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <Iconify icon="eva:arrow-ios-back-fill" width={16} />
          {t('verify_view.labels.return')}
        </Link>
      </Stack>
    </FormProvider>
  )
}

export default VerifyView