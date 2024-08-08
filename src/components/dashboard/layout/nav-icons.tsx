import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { AppleLogo } from '@phosphor-icons/react/dist/ssr/AppleLogo';
import { Alarm } from '@phosphor-icons/react/dist/ssr/Alarm';
import { Basketball } from '@phosphor-icons/react/dist/ssr/BasketBall'
import { ChartBar } from '@phosphor-icons/react/dist/ssr/Chartbar'

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  user: UserIcon,
  users: UsersIcon,
  'applelogo': AppleLogo,
  'alarm': Alarm,
  'basketball': Basketball,
  'chartbar': ChartBar

} as Record<string, Icon>;
