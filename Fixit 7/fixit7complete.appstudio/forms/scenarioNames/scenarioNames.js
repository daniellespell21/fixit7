/*Create a new form named 'for'.
Create an array named 'names' that holds this data:

Bob, Janet, Tom, Bob, Randy, Elizabeth, Kim, Nancy
Each time the loop runs, it must output a name. So eventually your program will have output each name, one name per line.
The output must be to the console, in this format:

Bob
Janet
Tom
Bob
*/


let names = ['Bob', 'Janet', 'Tom', 'Bob', 'Randy', 'Elizabeth', 'Kim', 'Nancy']
for (i = 0; i < names.length; i++) {
  console.log(`${names[i]}\n`) 
  }
  
