// GameController Class
class GameController implements IGameController {
    // properties
    private id: number;
    private users: IUser[];
    private maxPoints : number;

    // constructor
    constructor(users : IUser[], maxPoints : number = 5){
        this.id = 0;
        this.users = users;
        this.maxPoints = maxPoints;
    }

    setId(n: number): void {
        this.id = n;
    }

    getId(): number {
        return this.id;
    }

    setUsers(users : IUser[]) : void {
        this.users = users;
    }

    getUsers() : IUser[] {
        return this.users;
    }


}