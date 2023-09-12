'use client';

import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// routes
import { paths } from '@/routes/paths';
import { RouterLink } from '@/routes/components';
import { useRouter, useSearchParams } from '@/routes/hooks';
// hooks
import { useBoolean } from '@/hooks/useBoolean';
import { useCountdownSeconds } from '@/hooks/useCountdown';
// auth
import { useAuthContext } from '@/auth/hooks';
import Iconify from '@/components/iconify';
import FormProvider, { RHFTextField, RHFCode } from '@/components/hook-form';
import { Alert } from '@mui/material';

const NewPasswordView = () => {
  const { newPassword, forgotPassword } = useAuthContext();
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const password = useBoolean();

  const { countdown, counting, startCountdown } = useCountdownSeconds(60);

  const VerifySchema = Yup.object().shape({
    code: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const defaultValues = {
    code: '',
    email: email || '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchema),
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
      await newPassword(data.email, data.code, data.password);

      router.push(paths.auth.login);
    } catch (error: any) {
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const handleResendCode = useCallback(async () => {
    try {
      startCountdown();
      await forgotPassword?.(values.email);
    } catch (error: any) {
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  }, [forgotPassword, startCountdown, values.email]);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack rowGap={3} sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: 480, px: 3 }}>
        <Typography variant="h3">Request sent successfully!</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We&apos;ve sent a 6-digit confirmation email to your email.
          <br />
          Please enter the code in below box to verify your email.
        </Typography>

        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <RHFTextField
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          InputLabelProps={{ shrink: true }}
        />

        <RHFCode name="code" />

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

        <RHFTextField
          name="confirmPassword"
          label="Confirm New Password"
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
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Update Password
        </LoadingButton>

        <Typography variant="body2">
          {`Don’t have a code? `}
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
            Resend code {counting && `(${countdown}s)`}
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
          Return to sign in
        </Link>
      </Stack>
    </FormProvider>
  );
}

export default NewPasswordView;