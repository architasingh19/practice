import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] =[]

  private readonly usersKey = 'users';
  private readonly authKey = 'isAuthenticated';
  private readonly loggedInUserKey = 'loggedInUser';

  constructor() {}

  loginUser(username: string, password: string) {
    const users = this.getUsers();
    const user = users.find(
      (user: any) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem(this.authKey, 'true');
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  registerUser(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }

  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem(this.loggedInUserKey) || '{}');
  }

  private getUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  logout() {
    localStorage.removeItem(this.authKey);
    localStorage.removeItem(this.loggedInUserKey);
  }
}
