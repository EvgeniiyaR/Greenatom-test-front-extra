class UserStore {
  public email: string | null = localStorage.getItem('email');
  public password: string = '';
  public repeatPassword: string = '';
  public firstName: string | null = localStorage.getItem('firstName');
  public lastName: string | null = localStorage.getItem('lastName');
}

export default new UserStore();
