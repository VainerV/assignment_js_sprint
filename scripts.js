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



  compareArrays: function(firstArr, secondArr)
  {

      var equal1 = true;

      if(firstArr.length !== secondArr.length)
       {

          return false;
       }

      else
       {
           for(var arrLength = 0; arrLength < firstArr.length; arrLength++ )
           {

              console.log(firstArr[arrLength] !== secondArr[arrLength]);
              if(firstArr[arrLength] !== secondArr[arrLength])
              {

                 return false;

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

  myMap: function(myArray, double)
  {

    var newArray = [ ];
    var temp = 0;

      for(var loop = 0; loop < myArray.length; loop++)
      {


          temp = myArray[loop];
          newArray.push(double(temp));


      }

    return newArray;
  },



  primes: function(myNumber){
    var myArray = [ ];

    var myPrime = true;
   for(var mainLoop = 2; mainLoop <= myNumber; mainLoop ++)
   {

        myPrime = true;

        for(var sndLoop =2 ; sndLoop < mainLoop; sndLoop++)
        {
            if(mainLoop % sndLoop === 0)
            {
                myPrime = false;
            }
        }
        if(myPrime === true)
        {
            console.log(mainLoop);
            myArray.push(mainLoop);
        }
    }
    return myArray;
  },
}
