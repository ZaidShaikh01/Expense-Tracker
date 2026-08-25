import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('signup', './routes/signup/sign-up.tsx'),
] satisfies RouteConfig;
