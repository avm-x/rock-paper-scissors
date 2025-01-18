// round class

class Round implements IRound {
    users : User[];
    winner : User | null;
    choices : string[];
    isActive : boolean;

    constructor(users : User[]){
        this.users = users || [];
        this.winner = null;
        this.choices = [];
        this.isActive = true;
    }

    // setters n getters
    setUsers(users : User[]) : void {
        this.users = users;
    }

    addUser(user : User) : void {
        this.users.push(user);
    }

    getUsers() : User[] {
        return this.users;
    }

    setWinner( user : User) : void {
        this.winner = user;
    }

    getWinner() : User | null {
        return this.winner;
    }

    setChoices(choicesArr : string[]) : void {
        this.choices = choicesArr;
    }

    getChoices() : string[] {
        return this.choices;
    }

    setIsActive(bool : boolean) : void {
        this.isActive = bool;
    }

    getIsActive() : boolean {
        return this.isActive;
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
        let winnerChoice = this._evalChoices( this.users[0].getChoice() , this.users[1].getChoice());
        this.winner = (winnerChoice == this.users[0].getChoice() ? this.users[0] : this.users[1] )
        this.winner.addPointsInCurrGame(1);
    }
}