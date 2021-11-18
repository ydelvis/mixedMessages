/* This project randomly Displays a message from a randomly selected category of messages
    each time the program is run

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

const messages = {
    motivational: {
        one: 'You can, and you Will. Believe in yourself! - Elvis',
        two: 'A journey of a thousand miles begins with a step. Take that bold step today! - Yeboah',
        three: 'Be the change you wish to see in the world! - Rey',
        four: 'When the goin gets tough, get tougher: Never give up! - Cerdy'
    },

    bible:{
        one: 'Ask, and it shall be given unto you ... - Matt 7:7',
        two: 'The Lord is my Shepherd, I shall not want ... - Psa 23:1',
        three: 'For God so Loved the world ... - John 3:16',
        four: 'In the beginning was the word, ... - Gen 1:1'
    },

    fact:{
        one: 'You are Alive today! At least, Something to be Thankful for:)',
        two: 'There are 24 hours in a day. Make the most out of them today!',
        three: 'The human body is made up of 70% water, Drink more Water daily',
        four: 'It is what it is. Dont stress too much!'
    },

    message(){
        let messageType = Math.floor(Math.random()*3);
        let messageChoice = Math.floor(Math.random()*4);
        //let category = ''

        switch (messageType){ 
            case 0:
                //category = 'motivational'
                switch (messageChoice){
                    case 0:
                        return this.motivational.one;
                    
                    case 1:
                        return this.motivational.two;
                    
                    case 2:
                        return this.motivational.three;
                    
                    case 3:
                        return this.motivational.four;
                    
                    default:
                        return 'Unfortunately, we got nothing for you today!';
                }

            case 1:
                //category = 'bible'
                switch (messageChoice){
                    case 0:
                        return this.bible.one;
                    
                    case 1:
                        return this.bible.two;
                    
                    case 2:
                        return this.bible.three;
                    
                    case 3:
                        return this.bible.four;
                    
                    default:
                        return 'Unfortunately, we got nothing for you today!';
                }

            case 2:
               // category = 'fact'
                switch (messageChoice){
                    case 0:
                        return this.fact.one;
                    
                    case 1:
                        return this.fact.two;
                    
                    case 2:
                        return this.fact.three;
                    
                    case 3:
                        return this.fact.four;
                    
                    default:
                        return 'Unfortunately, we got nothing for you today!';
                }
                
                default:
                    return 'Unfortunately, we got nothing for you today!';
        }
    }
   
}

console.log('Message of the Day:\n' + messages.message() +', and Remember ' + messages.message());