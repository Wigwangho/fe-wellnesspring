export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    alert:'/dashboard/alert',
    meal:'/dashboard/meal',
    sport:'/dashboard/sport',
    statistics:'/dashboard/statistics'
  },
  errors: { notFound: '/errors/not-found' },
} as const;
