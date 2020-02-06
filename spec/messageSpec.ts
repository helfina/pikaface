import Message from '../src/pikaface/Message';

describe('Message', () => {
  describe('#turnToReaded', () => {
    it('return readed message', () => {
      let message = new Message("Mon super message");
      expect(message.readed).toBe(false);
      message.turnToReaded();
      expect(message.readed).toBe(true);
    });

  });
});