class Message {
  public content: string;
  public readed: boolean;
  
  constructor(content: string) {
    this.content = content;
    this.readed = false;
  }

  turnToReaded(): void {
    this.readed = true;
  }
}

export default Message;