import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const axiosExternal = (config: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const baseURL = `${process.env.NEXT_PUBLIC_BE_URL}/api/v1`;
  const ip =
    config?.req?.headers['x-forwarded-for'] ||
    config?.req?.socket?.remoteAddress;

  const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Cookie: `access_token=${config?.req.cookies?.access_token}`,
      'x-lang': config?.req.cookies.NEXT_LOCALE ?? 'en',
      'x-user-ip': ip,
    },
  });

  return instance;
};

const axiosInternal = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_FE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosExternal, axiosInternal };
