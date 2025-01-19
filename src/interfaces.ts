// GameController
interface IGameController {
    // id
    // users
    setId(n : number) : void;
    getId() : number;
    setUsers(users : IUser[]) : void;
    getUsers() : IUser[];


}

// User
interface IUser {
    // id
    // name
    // games
    // UserSession
    // isAi

    setId(n : number) : void;
    getId() : number;
    setName(str : string) : void;
    getName() : string;
    pushGame(game : IGame) : void;
    getGames() : IGame[];
    setUserSession(uss : IUserSession) : void;
    getUserSession() : IUserSession;
    setIsAi(bool : boolean) : void;
    getIsAi() : boolean;

    makeAiChoice() : void;
    makeChoice( choice : string ) : void;
    getChoice() : string;
}

// UserSession
interface IUserSession {
    // id
    // currGame
    // currChoice
    // currPoint

    setId(n : number) : void;
    getId() : number;
    setCurrGame(game : IGame) : void;
    getCurrGame() : IGame|null;
    setCurrChoice(choice : string) : void;
    getCurrChoice() : string;
    addToCurrPoints(n : number) : void;
    getCurrPoints(): number;
}

// Game
interface IGame {
    // id
    // isOn
    // winner
    // users
    // rounds
    // maxPoints

    setId(n : number) : void;
    getId() : number;
    setIsOn(bool : boolean) : void; 
    getIsOn() : boolean;
    setWinner(winner : IUser) : void;
    getWinner() : IUser|null;
    setUsers(usersArr : IUser[]) : void;
    pushUser(user : IUser) : void;
    getUsers() : IUser[];
    pushRound(round : IRound) : void;
    getRounds() : IRound[];
    setMaxPoints(n : number) : void;
    getMaxPoints() : number;

}

// Round
interface IRound {
    // id
    // choices
    // winner

    setId(n : number) : void;
    getId() : number;
    setChoices( choices : string[]) : void;
    getChoices() : string[];
    setWinner(winner : IUser|null) : void;
    getWinner() : IUser|null;

    evalRound() : void;

}
