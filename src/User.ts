// User class
class User implements IUser {
    id: number;
    name: string;
    games: IGame[];
    choice: string;
    isAi: boolean;
    userSession : UserSession;

    constructor(id: number,name: string,games: IGame[] = [],choice: string = "", isAi: boolean = false) {
        this.id = id;
        this.name = name;
        this.games = games;
        this.choice = choice;
        this.isAi = isAi;
        this.userSession = new UserSession();
    }

    setId(id: number) : void {
        this.id = id;
    }
    
    getId() : number{
        return this.id;
    }


    setName(name: string) : void {
        this.name = name;
    }

    getName() : string {
        return this.name;
    }


    setGames(games: IGame[]) : void {
        this.games = games;
    }

    getGames() : IGame[]{
        return this.games;
    }

    addGame(game: IGame) : void{
        this.games.push(game);
    }

    setChoice(choice: string) : void{
        this.choice = choice;
    }

    getChoice() : string{
        return this.choice;
    }

    setAi(isAi: boolean) : void{
        this.isAi = isAi;
    }

    toggleAi() : void{
        this.isAi = !this.isAi;
    }

    getUserSession() : UserSession {
        return this.userSession;
    }

    setUserSession( uSS : UserSession ) : void {
        this.userSession = uSS;
    }

    aiChoice() : string{ 
        if(this.isAi){
            const choices = ["rock", "paper", "scissors"];
            const randChoice = Math.floor( Math.random() * choices.length );
            return choices[randChoice];
        }

        return "";
    }

    getPointsInCurrGame() : number {
        return this.userSession.getPoints();
    }

    addPointsInCurrGame(n : number) : void {
        this.userSession.addPoints(n);
    }

    removePointsInCurrGame(n : number) : void {
        this.userSession.removePoints(n);
    }


}



