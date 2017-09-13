
// Object Bank
var bank =
{
  account: 0 ,
  function AddMoney(number)
  {
    this.account = this.account + number;
  },
  function collectWin(winAmount)
  {
    this.account = this.account + winAmount;
  };
}


// Object Spinning Wheel and Placing a Bet 
var spin =
{
  putBet: 0,
  spinNumber: 0,
  function newSpinBet(Bet, spinNbr)
  {
  this.putBet = Bet;
  this.spinNumbet = spinNbr;

  };

}


// Random number between 1 and 35
var roulette =
{
  randomNumber: 0,
  winAmount: 0,
  low: 1,
  high: 35,
  function randomSpin(spinNumber, bet)
  {
    this.randomNumber = Math.floor (Math.random()*(high-low)+low);

  };
}


//Roulette paly
function game (roulett.randomNumber)
{
  var winAmount= 0;
  var winNumber = roulett.randomNumber;
  if(winNumber === spin.spinNumber)
  {
    bank.account = spin.putBet * 35;
  }

return winAmount;

}
