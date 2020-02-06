import Message from "./Message";

class Wall {
  public messages: Array<Message>;
  
  constructor() {
    this.messages = [];
  }

  add(message: Message): void {
    this.messages.unshift(message);
  }

  notifications(): number {
    let i = 0;

    this.messages.forEach(message => {
      if (!message.readed) { i += 1 } 
    });

    return i;
  }
}

export default Wall;