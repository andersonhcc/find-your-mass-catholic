import { Loading } from '../components/molecules/Loading';
import React from 'react';

import { AppStackRoutes } from './app-stack.routes';
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
          <AppStackRoutes />
      ) : (
        <AuthRoutes />
      )}
    </>
  );
}
