import User from '../src/pikaface/User';
import Message from '../src/pikaface/Message';
import Wall from '../src/pikaface/Wall';

const USERS = {
  "users": [
    { 
      "email": "test@test.com",
      "password": "password123"
    }
  ]
}

describe('User', () => {
  describe('#login', () => {
    it('return logged user with valid credentials', () => {
      let user = new User();

      user.login('test@test.com', 'password123', USERS);

      expect(user.isLogged).toBe(true);
    });

    it('return unlogged user with invalid password', () => {
      /*
      * Vérifier que l'utilisateur n'est pas connecté
      * si le mot de passe est faux
      */

      // expect(user.isLogged).toBe(false);
    });

    // Réaliser le même test que ci-dessus pour l'email
  });

  describe('#logout', () => {
    it('turn user.isLogged to false', () => {
      let user = new User();
      
      user.login('test@test.com', 'password123', USERS);

      user.logout();

      expect(user.isLogged).toBe(false);
    });
  });

  describe('#updateMood', () => {
    it('return happy with less than ', () => {
      let message = new Message('Hello world');
      let wall = new Wall();
      let user = new User();

      wall.add(message);
      
      user.updateMood(wall, 4)

      expect(user.mood).toBe('happy');
    });
  });
});