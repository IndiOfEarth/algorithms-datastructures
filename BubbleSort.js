// WEEK 10 - University of London - Algoritms and Data Structures

// BUBBLE SORT IN JAVASCRIPT

// Generates a random array (n=number of values)
function genRandomArray(n) {
    var arr = [];
    for (var i=0; i < n; i++) {
        arr[i] = Math.round(10 * Math.random());
    }
    return arr;
}

// Swap Function - swaps 2 items in an array
function swap(array, index1, index2) {
    var x = array[index2]; // saves the value to a temp
    array[index2] = array[index1];
    array[index1] = x;
    return array;
}

// Bubble Sort Function
function bubbleSort(array) {
    // For every value of i
    // n-2 is the maximum number of swaps that could be done
    var n = array.length;
    for (var i = 0; i <= n-2; i++) {
        var count = 0; // count increases by 1 if a swap occurs. If no swap occurs during a pass, then count=0
        // Creating a bubble
        for (var j=0; j <= n-2; j++) {
            // If the value before is greater than the value after
            if (array[j+1] < array[j]) {
                swap(array, j, j+1); // swap the 2 values in the array
                count++; // increase the count
            }           
        }

        // If no swap occurs, then break out of current loop and go to next
        if (count == 0) {
            break;
        }
    }
    return array;
}

var array = genRandomArray(8);
console.log(array); // prints array before sort
console.log(bubbleSort(array));