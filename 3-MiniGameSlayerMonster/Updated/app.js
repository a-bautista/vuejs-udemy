function getRandomValue(max, min){
    // generic method for returning a value between the max and min.
    return Math.floor(Math.random() * (max - min)) + max;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed:{
        monsterBarStyles(){
            if (this.monsterHealth < 0){
                return {width: '0%'};
            }
            return { width: this.monsterHealth + '%'};
        },

        playerBarStyles(){
            if (this.playerHealth < 0){
                return {width: '0%'};
            }
            return { width: this.playerHealth + '%'};
        },

        mayUseSpecialAttack(){
            return this.currentRound < 3;
        }
    },

    watch:{
        playerHealth(value){
            if (value <=0 && this.monsterHealth <= 0){
                // a draw
                this.winner = 'draw';
            }else if(value <= 0){
                // player lost
                this.winner = 'monster';
            }
        },

        monsterHealth(value){
            if (value <=0 && this.playerHealth <= 0){
                // a draw
                this.winner = 'draw';
            }else if(value <= 0){
                // player won
                this.winner = 'player';
            }
        }
    },

    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages= []
        },
        attackMonster(){            
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.addLogMessages('player','Attack', attackValue);
            // trigger the attack player method whenever the player attacks the monster
            this.attackPlayer();

        },
        attackPlayer(){
            const attackValue = getRandomValue(15, 9);
            this.addLogMessages('monster','Attack', attackValue);
            this.playerHealth -= attackValue;  
        },
        specialAttackMonster(){
            this.currentRound = 0;
            const attackValue = getRandomValue(18, 12);
            this.addLogMessages('player','SpecialAttack', attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            const healValue = getRandomValue(15, 10);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
                this.addLogMessages('player','Heal', healValue);
            }
            this.attackPlayer();
            this.addLogMessages('monster','Attack', attackValue);
        },
        surrender(){
            this.winner = 'monster';
        }, 
        addLogMessages(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            }); // add something at the beginning of the array
        }
    }
});
app.mount('#game');