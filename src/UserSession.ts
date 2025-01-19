// userSession

class UserSession implements IUserSession {
    private id : number;
    private currGame : IGame|null;
    private currChoice : string;
    private currPoints : number;

    constructor(){
        this.id = 0;
        this.currGame = null;
        this.currChoice = "";
        this.currPoints = 0;
    }

    setId(n : number) : void {
        this.id = n;
    }

    getId() : number {
        return this.id;
    }

    setCurrGame(game : IGame) : void {
        this.currGame = game;
    }

    getCurrGame() : IGame|null {
        return this.currGame;
    }

    setCurrChoice(choice : string) : void {
        this.currChoice = choice;
    }

    getCurrChoice() : string {
        return this.currChoice;
    }

    addToCurrPoints(n : number) : void {

    }

    getCurrPoints(): number {
        return this.currPoints;
    }

}