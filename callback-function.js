A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. 
The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. 
Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.


function mainFunction(callback) {
  return callback();
}

function callbackFunction() {
  console.log("Hello, I am the callback function");
}

mainFunction(callbackFunction);



// example 2

// Simulating an asynchronous operation with a callback
const readFileAsync = (filePath, callback) => {
  setTimeout(() => {
    const fileContent = `Content of ${filePath}`;
    // Simulating a successful operation
    callback({ error: null, content: fileContent });
    // To simulate an error, you can uncomment the following line
    // callback({ error: 'Error reading file', content: null });
  }, 1000);
};

// Separate callback function
const handleFileResult = ({ error, content }) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`File Content: ${content}`);
  }
};

// Example usage
readFileAsync('/path/to/file.txt', handleFileResult);
