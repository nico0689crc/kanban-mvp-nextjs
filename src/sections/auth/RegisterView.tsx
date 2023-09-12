'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import FormProvider from "@/components/hook-form/FormProvider";
import { useRouter } from '@/routes/hooks';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/auth/hooks';
import { paths } from '@/routes/paths';
import { useState } from 'react';
import { Alert, IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
import { RHFTextField } from '@/components/hook-form';
import Iconify from '@/components/iconify';
import { RouterLink } from '@/routes/components';
import { useBoolean } from '@/hooks/useBoolean';
import { useLocales } from '@/locales';

const RegisterView = () => {
  const { t } = useLocales();
  const { register } = useAuthContext();
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();
  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    familyName: Yup.string().required('Last name required'),
    email: Yup.string().required(t("login_view.validation.email_required")).email(t("login_view.validation.email_format")),
    password: Yup.string().required(t("login_view.validation.password_required")),
  });

  const defaultValues = {
    firstName: 'Nicolas',
    familyName: 'Fernandez',
    email: 'nico.06.89crc+1@gmail.com',
    password: 'fGksFjFFrb!@t89',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await register(data.email, data.password, data.firstName, data.familyName);
      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();

      const href = `${paths.auth.verify}?${searchParams}`;

      router.push(href);
    } catch (error: any) {
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack rowGap={3} sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: 480, px: 3 }}>
        <Typography variant="h4">Get started absolutely free</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Already have an account? </Typography>

          <Link href={paths.auth.login} component={RouterLink} variant="subtitle2">
            Sign in
          </Link>
        </Stack>

        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="familyName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={password.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  )
}

export default RegisterView