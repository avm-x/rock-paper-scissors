// Game class

class Game implements IGame {
    private id: number;
    private isOn : boolean;
    private winner : IUser|null;
    private users : IUser[];
    private rounds : IRound[];
    private maxPoints : number;

    constructor(users : IUser[] = [], maxPoints : number = 5){
        this.id = 0;
        this.isOn = true;
        this.winner = null;
        this.users = users;
        this.rounds = [];
        this.maxPoints = maxPoints;
    }
    
    setId(n : number) : void {
        this.id = n;
    }
    getId() : number {
        return this.id;
    }

    setIsOn(bool : boolean) : void {
        this.isOn = bool;
    }

    getIsOn() : boolean {
        return this.isOn;
    }

    setWinner(winner : IUser) : void {
        this.winner = winner;
    }

    getWinner() : IUser|null {
        return this.winner;
    }

    setUsers(usersArr : IUser[]) : void {
        this.users = usersArr;
    }

    pushUser(user : IUser) : void {
        this.users.push(user);
    }

    getUsers() : IUser[] {
        return this.users;
    }

    pushRound(round : IRound) : void {
        this.rounds.push(round);
    }

    getRounds() : IRound[] {
        return this.rounds;
    }

    setMaxPoints(n : number) : void {
        this.maxPoints = n;
    }

    getMaxPoints() : number {
        return this.maxPoints;
    }
}