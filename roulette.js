
// Object Bank
var bank =
{
  account: 0,
  function AddMoney(number)
  {
    bank.account = this.account + number;
  },
  function collectWin(winAmount)
  {
    bank.account = this.account + winAmount;
  };
}


// Object  Placing a Bet and number on the table
var spin =
{
  putBet: 0,
  spinNumber: 0,
  function newSpinBet(Bet, spinNbr)
  {
  spin.putBet = Bet;
  spin.spinNumbet = spinNbr;

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
    roulette.randomNumber = Math.floor (Math.random()*(high-low)+low);

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
