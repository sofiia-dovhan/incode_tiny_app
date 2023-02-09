export class MockUserModel {
  constructor(public user: any){}

  save() {
    return Promise.resolve({ _id: 'mockId', ...this.user } );
  }
}
