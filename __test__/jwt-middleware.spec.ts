import express, { request, Request } from 'express';
import { jwtMiddleware } from '../src/jwt-middleware';

const mockReq = { headers: { authorization: 'Bearer token' } } as Request;

describe('Check jwt-middleware', () => {
  it('should not throw exception', () => {
    jwtMiddleware(mockReq, {} as any, {} as any);
  });

  it('should not throw exception', async () => {
    await expect(jwtMiddleware({} as any, {} as any, {} as any)).rejects.toThrow('Unauthorized');
  });
});
