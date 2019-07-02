// Pair coded with Hans Xu 

const sentence = "hello there from lighthouse labs";

// setTimeout(() => {

//   for (const char of sentence) {
//     process.stdout.write(char);
//   }

// }, 1000);

const typeWriter = (sentence, delay) => {


  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if (i === sentence.length -1) {
        process.stdout.write(sentence[i] + '\n')  
      } else {
      process.stdout.write(sentence[i])}
    }, delay * i);

  }
  

};

typeWriter(sentence, 50);


