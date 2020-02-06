import Wall from "./Wall.js";

class User {
  static readonly MAXIMUM_NOTIFICATIONS: number = 10; 

  public isLogged: boolean;
  public mood: string;

  constructor() {
    this.isLogged = false;
    this.mood = 'happy';
  }

  login(email: string, password: string, data: any): void {
    let emails = data.users.map((user: any) => { return user.email });

    if (emails.includes(email)) {
      let i = emails.indexOf(email);
      this.isLogged = data.users[i].password === password;
    } else {
      this.isLogged = false;
    }
  }

  logout(): void {
    this.isLogged = false;
  }

  updateMood(wall: Wall, maxNotifications: number): void {
    if(wall.notifications() >= maxNotifications) {
      this.mood = 'angry';
    } else {
      this.mood = 'happy';
    }
  }
}

export default User;
