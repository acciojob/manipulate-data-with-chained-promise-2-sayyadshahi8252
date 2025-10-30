// your JS code here. If required.
function manipulateData() {
  let output = document.getElementById("output");

  // Step 1: Initial Promise that resolves after 3 seconds
  let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });

  // Step 2 & 3: Chain the transformations
  newPromise
    .then((arr) => {
      // Filter even numbers after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          let evens = arr.filter(num => num % 2 === 0);
          output.textContent = evens;
          resolve(evens); // ✅ must resolve to pass evens to next then()
        }, 1000);
      });
    })
    .then((evens) => {
      // Multiply even numbers by 2 after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          let doubled = evens.map(num => num * 2);
          output.textContent = doubled;
          resolve(doubled);
        }, 2000);
      });
    });
}

// Call the function
manipulateData();
