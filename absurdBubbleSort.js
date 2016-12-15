const readline = require('readline');

const reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function(answer) {
    if (answer.toUpperCase() === "YES") {
      callback(true);
    } else {
      callback(false);
    }
  });

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(swap) {
      if (swap) {
        let x = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = x;
        madeAnySwaps = true;
        console.log(arr);
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {

      sortCompletionCallback(arr);
    }// Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}
//
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// innerBubbleSortLoop([3, 4, 1], 0, false);
