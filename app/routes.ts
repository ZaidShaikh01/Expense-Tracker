import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout/layout.tsx', [
    index('routes/Dashboard/index.tsx'),
    route('transactions', './routes/transactions/index.tsx'),
  ]),
  route('signup', './routes/signup/sign-up.tsx'),
  route('login', './routes/login/index.tsx'),
] satisfies RouteConfig;
