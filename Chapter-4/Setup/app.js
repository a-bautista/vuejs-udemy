new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false,
        turns: []
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            
        },
        attack: function(){
            var maxAttackPlayer = 10;
            var minAttackPlayer = 3;
            var damage = this.calculateDamage(minAttackPlayer, maxAttackPlayer);

            this.monsterHealth -= damage;
            this.turns.unshift({
               isPlayer: true,
               text: 'Player hits Monster for ' + damage
            });

            if (this.checkWin()){
                return ;
            }
            
            this.monsterAttacks();
        },
        specialAttack: function(){
            var maxSpAttackPlayer = 15;
            var minSpAttackPlayer = 5;

            this.monsterHealth -= this.calculateDamage(minSpAttackPlayer, maxSpAttackPlayer);
           
            if (this.checkWin()){
                return ;
            }
            
            this.monsterAttacks();

        },
        heal: function(){
            if (this.playerHealth <=90){
                this.playerHealth +=10;
            }else{
                this.playerHealth=100;
            }
            this.monsterAttacks();

        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random()*max)+1,min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0){
                if (confirm('You won! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            }else if (this.playerHealth <=0){
                if (confirm('You lost! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
             });
        }

    }
});