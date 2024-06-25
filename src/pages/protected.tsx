import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Protected: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>You are not authorized to view this page</div>;
  }

  return <div>This page is protected for me</div>;
};

export default Protected;
