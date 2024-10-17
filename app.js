// const prompt = require('prompt-sync')()
// const username = prompt('What is your name? ')
// console.log(`Your name is ${username}`)

// const pwd = 'password1'
// console.log(pwd === "password1")
// console.log(pwd === "bob")
// console.log(pwd === "monke")

let gold = 50
let spices = 40
let gems = 50
let arms = 0
let status = 0
let i = 0
//1 = dead, 0 = alive

//while loop for allowing replay (currently breaking loop)
// while (i === 0)
// {
//     console.log(`i=${i}`)

const prompt = require('prompt-sync')()
const username = prompt('Greetings traveler!  I can see that you must be a merchant.  What is your name? ')
console.log(`Well met ${username}! You must be looking to sell your wares in Traunton, but be wary, there are bandits on the road if you continue further north. \n` )

console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} worth of gems] \n`)

console.log('The trading post on the way to the city has [Weapons and Armor] and is willing to trade you')
console.log(' evenly for your gold and your gems, but you may be able to get a better deal further North...\n')
const choice1 = prompt('[trade] for arms and armor or [pass] on the deal? ')

if(choice1.toLowerCase()=== 'trade'){
    arms = gold+gems 
    gold = 0
    gems = 0
    console.log('\nYou smell profit and strike a deal!')
    console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
    
} else if(choice1.toLowerCase() === 'pass'){
    console.log('\nYou think you can do better.')
    console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
} else {
    console.log('The clerk at the trading post can\'t understand you. Perhaps you should have practiced this land\'s tongue more. ')
    console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
}

console.log('You come to a fork in the road. One way is the [highway] which will be well guarded by ')
console.log('the King\'s soldiers, but the might \"take a little off the top\".  Another way is the ')
console.log('[woods] which won\'t be guarded, but that carries it\'s own risks...\n')
const choice2 = prompt('which road will you take? ')

if(choice2.toLowerCase() === 'highway'){
    spices = spices-10
    console.log('You make it safely to Traunton, but the guards on the road confiscate your spices')
    console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
} else if(choice2.toLowerCase() === 'woods'){
    console.log('You don\'t run into guards in the woods, which is probably why you run into outlaws!\n')
    if(gold === 0){
        spices = spices-20
        console.log('The bandits want gold and gems, which you don\'t have luckily.\n Your arms aren\'t worth carrying. They take what spices they can carry and let you go.')
        console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
    } else {
        gold = 0
        gems = 0
        console.log('They take your gold and gems but leave you your life!')
        console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)
    }
} else {
    status++
    console.log('Perhaps because you had too much to drink the night before, you can\'t control your horse and you crash into a ditch\n ')
}

 setTimeout(afterpause, 3500)
 function afterpause()
 {
if(status === 0){
    console.log('You make it to Traunton where the Merchant\'s Guild is willing to buy your wares.\n' )
    if(arms > 0){
        console.log('Luckily for you news of bandits in the nearby woods has driven up the price of weapons and armor!')
    } else{
        console.log('')
    }
    gold = gold+gems+spices+(arms*2)
    spices = 0
    gems = 0
    arms = 0
    console.log(`[You have ${gold} gold, $${spices} in Spices, and $${gems} in gems and $${arms} in arms]\n`)

    if(gold >= 150){
        console.log('You have made enough gold to reach your goal of opening your own shop! Truly you are a wise merchant! \n[PERFECT ENDING]')
    } else{
        console.log('You rest up at the inn and prepare to travel again tomorrow. \n[GOOD ENDING]')
    }
}
else {
    console.log('[GAME OVER]')
}
}

//couldn't get this loop working yet without breaking code
// const choice3 = prompt('Enter [Y] to restart, enter any other key to end.')
// if (choice3 === 'Y'){
//     console.log('[Restarting]')
// }else {
//     i++
// }
// }