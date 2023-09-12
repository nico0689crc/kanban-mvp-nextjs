'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// routes
import { paths } from '@/routes/paths';
import { useRouter } from '@/routes/hooks';
import { RouterLink } from '@/routes/components';
// auth
import { useAuthContext } from '@/auth/hooks';
// components
import Iconify from '@/components/iconify';
import FormProvider, { RHFTextField } from '@/components/hook-form';

// ----------------------------------------------------------------------

const ForgotPasswordView = () => {
  const { forgotPassword } = useAuthContext();

  const router = useRouter();

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await forgotPassword?.(data.email);

      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();

      const href = `${paths.auth.newPassword}?${searchParams}`;
      router.push(href);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack rowGap={3} sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: 480, px: 3 }}>
        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h3">Forgot your password?</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Please enter the email address associated with your account and We will email you a link
            to reset your password.
          </Typography>
        </Stack>
        <RHFTextField name="email" label="Email address" />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Send Request
        </LoadingButton>

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

export default ForgotPasswordView;

