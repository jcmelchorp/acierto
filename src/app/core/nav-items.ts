export interface NavItem {
  title: string;
  link: string;
  icon?: string;
}

export const FIRST: NavItem[] = [
  { title: 'test', icon: '🐱', link: '/test' },
  { title: 'test', icon: '🐱', link: '/test' },
  { title: 'test', icon: '🐱', link: '/test' },
  { title: 'test', icon: '🐱', link: '/test' },
];

export const USER_NAV: NavItem[] = [
  { title: 'Settings', icon: '🐱', link: '/' },
  { title: 'Cerrar sesión', icon: '🐱', link: '/logout' },
];
