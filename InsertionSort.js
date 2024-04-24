// WEEK 10 - University of London - Algoritms and Data Structures
// INSERTION SORT IN JAVSCRIPT

// Generates a random array
function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

// This implements the swap function
function swap(array, index1, index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

// This implements the shift function (logic handled in insertion sort)
function shift(array, index1, index2) {
	// array - the array in which elements are to be shifted
    // array[index1] - the starting index from which the shift begins (bigger)
    // array[index2] - the ending index up to which the shift occurs (smaller)
    
    // 1. Check condition - checks if index 1 is less than index 2.
    // If index 1 < index 2, no shifting occurs/is required
    if (index1 < index2) {
		return array;
	}
	var x = array[index1]; // 2. store element at index 1 before shifting

    // 3. Shift elements - shifts each element one position to the right
	for (var i = index1; i >= index2 + 1; i--) {
		array[i] = array[i - 1]; // shifts element at i-1 to the position i
	}
	array[index2] = x; // 4. After shifting all elements, element stored in x is placed at index 2
	return array; // 5. return updated array
}

function insertionSort(array) {
    var a;
    
    // 1. Loop through each element in the array, starting from the second element (insertion sort always starts here)
    for (var i = 1; i <= array.length; i++) {
        var j = i; // 2. Initialise a variable to track the position to insert the current element. Increase by 1 for each iteration

        // 3. loop continues whilst the value of array[j] (value we want to move) is smaller than previous value
        // - loop shifts elements to the right until the correct position for array[j] is found
        while (j > 1 && (array[j] < array[j-1])) {
            a = shift(array, j, j-1); // 4. shift will swap the two values and also move the others
            j --; // 5. decrement j - will stop once it finds a value bigger 
        }   
    }
    return a;
}

// This will generate a random array with 12 elements, print it to the console, and also print what is returned by insertionSort also to the console
var arr = genRandomArray(12);
console.log(arr)
console.log(insertionSort(arr));

// // Do not modify the code below this point--------------------------------
module.exports = {
	genRandomArray: genRandomArray,
	swap: swap,
	shift: shift,
	insertionSort: insertionSort
}