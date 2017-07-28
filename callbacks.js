/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem(arr, cb) {
	cb(arr[0]);
}

// Write a function called getLength that passes the length of the array into the callback

function getLength(arr, cb) {
	cb(arr.length);
}

getLength(foods, function(length)) {
	console.log('The length of the array is ' + length);
}



// Write a function called last which passes the last item of the array into the callback

function last(arr, cb) {
	cb(arr[arr.length -1])
	}

last(foods, function(lastitem) {
	console.log(lastitem);
})


// Write a function called sumNums that adds two numbers and passes the result to the callback


function sumNums(x, y, cb) {
  cb(x + y);  
};

sumNums (4, 7, (sumNums) => {
console.log(sumNums);  
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

function multiplyNums(x, y, cb) {
	cb(x + y);

}

multiplyNums (4, 7, (multiplyNums) => {
console.log(multiplyNums);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false


function contains(arr, x, cb){
	if (arr.indexOf(x) != -1){
		cb(true);
	}
	else {
		cb(false);
	}
}
var y = 'curry'
contains(foods, y, function(result) {
  console.log(result)
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

function removeDuplicates(arr, cb){
	  var uniquefoods = [];
		for (var i = 0; i < arr.length; i++){
			if (uniquefoods.indexOf(arr[i]) === -1) {
         uniquefoods.push(arr[i]);
      }
    }
    cb(uniquefoods);
}
removeDuplicates(foods, function(uniquefoods) {
  console.log('here is the array with duplicates removed ' + uniquefoods)
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

function forEach(arr, cb){
    for (var i = 0; i < arr.length; i++) {
      cb(arr[i], i);
    }
  
}

forEach(foods, function(value, index) {
    console.log(value + ' ' + index)
});