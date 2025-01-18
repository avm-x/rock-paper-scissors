// userSession

class UserSession implements IUserSession {
    isActive : boolean;
    games : Game[];
    currPoints : number;

    constructor(){
        this.isActive = true;
        this.games = [];
        this.currPoints = 0;
    }

    setIsActive( bool : boolean ) : void {
        this.isActive = bool;
    }

    getIsActive() : boolean {
        return this.isActive;
    }

    getGames() : Game[] {
        return this.games;
    }

    setGames( games : Game[] ) : void {
        this.games = games;
    }

    addGame( game : Game ) : void {
        this.games.push(game);
    }

    addPoints(n:number=1) : void {
        this.currPoints += n;
    }

    getPoints() : number {
        return this.currPoints;
    }

    removePoints(n : number) : void {
        if(this.currPoints >= n){
            this.currPoints -= n;
        } else {
            this.currPoints = 0
        }

    }

}