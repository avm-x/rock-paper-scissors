// round class

class Round implements IRound {
    private id : number;
    private choices : string[];
    private winner : IUser|null;

    constructor(choices : string[] = []){
        this.id = 0;
        this.choices = choices;
        this.winner = null;
    }
    
    setId(n : number) : void {
        this.id = n;
    }

    getId() : number {
        return this.id;
    }

    setChoices( choices : string[]) : void {
        this.choices = choices;
    }

    getChoices() : string[] {
        return this.choices;
    }

    setWinner(winner : IUser) : void {
        this.winner = winner;
    }

    getWinner() : IUser|null {
        return this.winner;
    }

    // return winner choice.
    _evalChoices(aChoice : string, bChoice : string) : string {
        // rock choice
        if(aChoice == "rock" || bChoice == "rock"){
            // rock wins against a scissor
            if(aChoice == "scissors" || bChoice == "scissors"){
                return "rock";
            }

            // rock loses against paper
            if(aChoice == "paper" || bChoice == "paper"){
                return "paper";
            }
        }
        
        // scissors choice
        if(aChoice == "scissors" || bChoice == "scissors"){
            // scissors loses against a rock
            if(aChoice == "rock" || bChoice == "rock"){
                return "rock";
            }

            // scissor wins agains a paper
            if(aChoice == "paper" || bChoice == "paper"){
                return "scissors";
            }
        }

        // paper choice
        if(aChoice == "paper" || bChoice == "paper"){
            // paper loses against scissors
            if(aChoice == "scissors" || bChoice == "scissors"){
                return "scissors";
            }

            // paper wins against rock
            if(aChoice == "rock" || bChoice == "rock"){
                return "paper";
            }
        }

        return "";
    }

    evalRound() : void {
       /*
        let winnerChoice = this._evalChoices( this.users[0].getChoice() , this.users[1].getChoice());
        this.winner = (winnerChoice == this.users[0].getChoice() ? this.users[0] : this.users[1] )
        this.winner.addPointsInCurrGame(1);
        */
    }
}