// User class
class User implements IUser {
    id: number;
    name: string;
    games: IGame[];
    isAi: boolean;
    userSession : IUserSession;

    constructor(name: string, isAi: boolean = false) {
        this.id = 0;
        this.name = name;
        this.games = [];
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

    pushGame(game: IGame) : void{
        this.games.push(game);
    }


    setIsAi(isAi: boolean) : void{
        this.isAi = isAi;
    }

    getIsAi() : boolean {
        return this.isAi;
    }    

    getUserSession() : IUserSession {
        return this.userSession;
    }

    setUserSession( uSS : IUserSession ) : void {
        this.userSession = uSS;
    }

    makeAiChoice() : string{ 
        if(this.isAi){
            const choices = ["rock", "paper", "scissors"];
            const randChoice = Math.floor( Math.random() * choices.length );
            return choices[randChoice];
        }

        return "";
    }

    makeChoice(choice: string) : void {
        this.userSession.setCurrChoice(choice);
    }

    getChoice() : string {
        return this.userSession.getCurrChoice();
    }
}



