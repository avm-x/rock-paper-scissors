// GameController Class
class GameController implements IGameController {
    // properties
    id: number;
    users: User[];
    games: Game[];
    maxScore: number;
    useAi: boolean;
    nRounds: number;

    // constructor
    constructor(users: User[], games: Game[], maxScore: number, useAi: boolean, nRounds: number){
        this.id = 0;
        this.users = users;
        this.games = games;
        this.maxScore = maxScore;
        this.useAi = useAi;
        this.nRounds = nRounds;
    }

    // methods
    setId(n : number){
        this.id = n;
    }

    getId() : number {
        return this.id;
    }

    addUser(user : User ){
        if(this.users.length < 2){
            this.users.push(user);
        }
    }

    removeUser(user : IUser){
        this.users = this.users.filter((storedUser) => storedUser.id !== user.id)
    }

    // starts a loop until one of the players reach the maxScore.
    startGame(maxPoints : number = 5){
        // create Game
        const currGame = new Game(this.users, maxPoints);
        
        let leadingUser = this.users[0];

        while(leadingUser.getPointsInCurrGame() < maxPoints){
            
            // create round
            let currRound = new Round( this.users );

            // make choices

            // eval choices
            currRound.evalRound();

            // add round to game
            currGame.pushRound(currRound);
        
            // update leadingUser;
            leadingUser = (this.users[0].getPointsInCurrGame() > this.users[1].getPointsInCurrGame()) ? this.users[0] : this.users[1];
        }

        // assign game to each user
        this.users.forEach((user) => user.addGame(currGame));
    

    }        

    
}