function genRandomArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = Math.round(10 * Math.random());
    }
    return arr;
}

function swap(array, index1, index2) {
    var saveElement = array[index1];
    array[index1] = array[index2];
    array[index2] = saveElement;
    return array;
}

function bubbleSort(array) {
    var n = array.length;
    for (var i = 1; i < n; i++) {
        var count = 0;
        for (var j = 0; j < n - 1; j++) {
            if (array[j + 1] < array[j]) {
                count++;
                swap(array, j, j + 1);
            }
        }

        if (count == 0) {
            break;
        }
    }
    return array;
}

function binarySearch(array, x) {
    // return a Boolean: true if x is in array, and false otherwise

    // x - the value to be found in the array
    var n = array.length;
    var r = n; // the rightmost element index
    var l = 0; // the leftmost element index

    while (r >= l) {
        var midpoint = Math.floor((r+l)/2);
        // If the value is found at the midpoint
        if (array[midpoint] == x) {
            return true;
        }
        // If the value is less than the midpoint
        else if (array[midpoint] > x) {
            r = midpoint - 1; // move the rightmost element pointer to before midpoint
        }
        // If the value is greater than the midpoint
        else {
            l = midpoint + 1; // move the leftmost element pointer to after midpoint
        }
    }
    return false;
}


var arr = genRandomArray(14);
console.log(bubbleSort(arr));
console.log(binarySearch(bubbleSort(arr), 7));

// Do not modify the code below this point--------------------------------
module.exports = {
	genRandomArray: genRandomArray,
	swap: swap,
	bubbleSort: bubbleSort,
	binarySearch: binarySearch
}