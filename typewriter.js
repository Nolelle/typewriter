const sentence = "hello there from lighthouse labs";
let timeDelay = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write("\n");
      // console.log();
    }
  }, timeDelay);
  timeDelay += 50;
}
