import Wall from '../src/pikaface/Wall';
import Message from '../src/pikaface/Message';

describe('Wall', () => {
  describe('#add', () => {
    it('should add one message', () => {
      let message = new Message("Mon super message");
      let wall = new Wall();

      expect(wall.messages.length).toBe(0);
      wall.add(message);
      expect(wall.messages.length).toBe(1);
    });
  });

  // Faire un test pour la méthode notifications
});