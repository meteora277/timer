let args = process.argv.slice(2);
args = args.map((item) => parseInt(item));

const timer = function (numsArray) {
  if (numsArray.length === 0) {
    return undefined;
  }

  const recursiveTimer = function (num) {
    setTimeout(() => {
      if (num !== 0) {
        return recursiveTimer(num - 1);
      } else {
        console.log("-beep-");
      }
    }, 1000);
  };

  numsArray.forEach((item) => {
    if (item > 0 && typeof item === "number") {
      recursiveTimer(item);
    }
  });
};

timer(args);
