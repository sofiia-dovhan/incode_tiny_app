import { AppReq } from '../src/app-req.type';
import { Payload } from '../src/payload.type';

export function getMockRequest(options: {
  authHeader?: any,
  body?: any,
} = {}): AppReq {
  const { 
    authHeader={ authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJtb2NrSWQiLCJpYXQiOjE2NzU4OTcxNjJ9.z8L3hTDSXCvLixxk1xexxEGlzElmiwli5oAUmTBbgUU' }, 
    body, 
  } = options;

  return { headers: authHeader, body } as AppReq;
}

export const payloadForSuccessMockAccess: Payload = { _id: 'mockId' };
