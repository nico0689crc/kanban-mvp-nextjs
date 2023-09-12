const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    verify: `${ROOTS.AUTH}/verify`,
    newPassword: `${ROOTS.AUTH}/new-password`,
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
};