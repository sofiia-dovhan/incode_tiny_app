import { registration } from '../src/auth/auth.controller';
import { getMockRequest } from './fixtures';
import { MockUserModel } from './mocks';

jest.mock('../src/user.model', () => {
  return { UserModel: MockUserModel }
});

describe('Check auth route', () => {
  // TODO repair mock, imports, jest
  it.skip('Should register user', async () => {
    const actual = await registration(getMockRequest({ body: { 
      email: 'test@gmail.com',
      password: 'qwerty',
    } }), {} as any, {} as any);
  })
})
