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

       console.log(newJoinedString.join("_"));
      return  newJoinedString.join("_");

  },



  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
