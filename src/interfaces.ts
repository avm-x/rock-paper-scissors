// game controller
interface IGameController {
    id : number;
    games : Game[];
}

// game
interface IGame {
    id: number;
    users : User[];
    winner : User | null;
    rounds : Round[];
    maxPoints : number;
    isActive : boolean;
}

// round
interface IRound {
    users : User[];
    winner : User | null;
    choices : string[];
    isActive : boolean;
}

// user
interface IUser {
    id : number;
    name : string;
    choice : string;
    games : IGame[];
    isAi : boolean;
    userSession : IUserSession;
}

// userSession
interface IUserSession {
    isActive : boolean;
    games : Game[];
    currPoints : number;
}
