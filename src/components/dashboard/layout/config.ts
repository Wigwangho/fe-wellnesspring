import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  //{ key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  //{ key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  //{ key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  //{ key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  //{ key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  //{ key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
  //사이드바에 들어갈 요소들입니다
  { key: 'alert', title: 'alert', href: paths.dashboard.alert, icon: 'alarm' },
  { key: 'meal', title: 'meal', href: paths.dashboard.meal, icon: 'applelogo' },
  { key: 'sport', title: 'sport', href: paths.dashboard.sport, icon: 'basketball' },
  { key: 'statistics', title: 'statistics', href: paths.dashboard.statistics, icon: 'chartbar' }
] satisfies NavItemConfig[];
