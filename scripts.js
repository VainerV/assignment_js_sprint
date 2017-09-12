// FILL IN THE FUNCTIONS BELOW
sprintFunctions = {

largestEl: function(){

  var num=0;
  var myArr = [2,4,2,1,5,2,5] ;
  for(var i = myArr.length-1; i>=0; i--)
    {
       if(num < myArr[i])
       {
         num = myArr[i];
       }
    }
    return num;
  },

  reversed: function(){
    var str = "I am a special string!";
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

       return newString;
  },
/*f
    var mystr = "I am a special string!" ;
    var revstr = mystr.split('').reverse().join('');

}  */




  loudSnakeCase: function(){

    var singlewords = "";
    var snake = "";
    var noSnake = "I am a strange code. I like it though!";
    singlewords = noSnake.split(" ");
    var newJoinedString = [ ];
    for(var word=0; word<singlewords.length ; word++)
    {
        snake = singlewords[word].split("");

        var tempWord = [ ];
        for(var letter=0; letter<snake.length; letter++)
        {

                if(letter === 0)
                {


                    tempWord.push(snake[letter].toUpperCase());
                    continue;
                }

               if (snake[letter] !== "!" && snake[letter] !== ".")
                {


                     tempWord.push(snake[letter]);
                }


        }


          newJoinedString.push(tempWord.join(""));

      }


      return  newJoinedString.join("_");

  },



  compareArrays: function()
  {
      var firstArr = [ ];
      var secondArr = [ ];
      var equal1 = false;
      var equal2 = 0;

      if(firstArr.length !== secondArr.length)
       {

          equal2 = 1;
          return equal1;
       }

      else
       {
           for(var arrLength = 0; arrLength <= firstArr.length; arrLength++ )
           {
              if((firstArr[arrLength] === secondArr[arrLength]) && (equal2 !==1) )
              {
                equal1 = true;

              }
              if(firstArr[arrLength] !== secondArr[arrLength])
              {
                 equal1 = false;
                 equal2 = 1;

              }

           }

       }
       return equal1;
  },



  fizzBuzz: function(number)
  {

    var buzz = "BUZZ";
    var fizz = "FIZZ";
    var myArr = [ ];

    for( var arrLength = 1; arrLength <= number; arrLength++)
    {
      if((arrLength % 3 === 0 ) && (arrLength % 5 === 0) && (arrLength !== 0))
        {

          myArr.push(fizz+buzz);

        }
      if((arrLength % 3 === 0) && (arrLength % 5 !== 0) )
      {
          myArr.push(fizz);
      }

      if((arrLength % 3 !== 0) && (arrLength % 5 === 0) )
      {
          myArr.push(buzz);
      }
      if((arrLength % 3 !== 0) && (arrLength % 5 !== 0) )
      {


      myArr.push(arrLength);     }

    }

       console.log(myArr);
    return myArr;


  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
