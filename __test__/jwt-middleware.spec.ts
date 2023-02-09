import express, { request, Request } from 'express';
import { AppReq } from '../src/app-req.type';
import { jwtMiddleware } from '../src/jwt-middleware';
import jwt from 'jsonwebtoken';

describe('Check jwt-middleware', () => {
  it('should throw "jwt malformed" exception', async () => {
    const mockReq = { headers: { authorization: 'Bearer token' } } as AppReq;

    await expect(jwtMiddleware(mockReq, {} as any, {} as any)).rejects.toThrow('jwt malformed');
  });

  it('should throw "Unauthorized" exception', async () => {
    await expect(jwtMiddleware({} as any, {} as any, {} as any)).rejects.toThrow('Unauthorized');
  });

  it('should throw "Unauthorized" exception', async () => {
    const mockReq = { headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJtb2NrSWQiLCJpYXQiOjE2NzU4OTcxNjJ9.z8L3hTDSXCvLixxk1xexxEGlzElmiwli5oAUmTBbgUU' } } as AppReq;

    await jwtMiddleware(mockReq, {} as any, () => {});

    expect(mockReq.user?._id).toBe('mockId');
  });

  it('should throw "Unauthorized" exception', async () => {
    await expect(jwtMiddleware({} as any, {} as any, {} as any)).rejects.toThrow('Unauthorized');
  });
});
