import { Loading } from '../components/molecules/Loading';
import React from 'react';

import { AppRoutes } from './app-stack.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const loading = false;
  const isAuthenticated = true;

  if (loading) {
    return <Loading size="large" color="primary" />;
  }
  return (
    <>
      {isAuthenticated ? (
          <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </>
  );
}
