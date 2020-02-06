import User from "./User";

class Page {
    static readonly DEFAULT_HEADER: string = 'login'; 
    static readonly DEFAULT_YIELD: string = 'presentation'; 

    public header: string;
    public yield: string;
    private loggedUser: boolean;

    constructor(header: string, yld: string) {
        this.header = header;
        this.yield = yld;
        this.loggedUser = false;
    }

    update(user: User): void {
        if(user.isLogged != this.loggedUser) {
            this.updateHeader(user);
            this.updateYield(user);
            this.loggedUser = user.isLogged;
        }
    }

    updateHeader(user: User): void {
        if (user.isLogged) {
            this.header = 'logged';
        } else {
            this.header = Page.DEFAULT_HEADER;
        }
    }

    updateYield(user: User): void {
        if (user.isLogged) {
            this.yield = 'wall';
        } else {
            this.yield = Page.DEFAULT_YIELD;
        }
    }
}

export default Page;