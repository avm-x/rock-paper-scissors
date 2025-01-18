// Game class

class Game implements IGame {
    id: number;
    users : User[];
    winner : User | null;
    rounds : Round[];
    maxPoints : number;
    isActive : boolean;

    constructor( users : User[], maxPoints : number = 5) {
        this.id = 0;
        this.users = users;
        this.winner = null;
        this.rounds = [];
        this.maxPoints = maxPoints;
        this.isActive = true;
    }


    //setters and getters of all properties
    setId(id:number) : void{
        this.id = id;
    }

    getId() : number {
        return this.id;
    }

    setWinner(winner : User) : void {
        this.winner = winner;
    }

    getWinner() : User | null {
        return this.winner;
    }

    setRounds( rounds : Round[]) : void{
        this.rounds = rounds;
    }

    getRounds() : Round[] {
        return this.rounds;
    }

    pushRound( round : Round ){
        this.rounds.push(round);
    }

    setMaxPoints(n : number) : void {
        this.maxPoints = n;
    }

    getMaxPoints() : number {
        return this.maxPoints;
    }

    setIsActive( bool : boolean ) {
        this.isActive = bool;
    }

}