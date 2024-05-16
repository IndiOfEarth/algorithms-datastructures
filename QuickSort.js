// A recursive divide-and-conquer algorithm
// PSEUDO
// PARTITION
// 1. Set the pivot element (the rightmost element of the array)
// 2. The pivot is compared with elements beginning from first index
// 3. 2 pointers: first set to leftmost index - 1, and second to the leftmost index
// 4. pivot is compared with second pointer. If element is smaller than pivot, increase first pointer by 1 and swap first pointer element with second pointer element
// 5. If pivot is greater than element, then skip to step 6
// 6. Increase second pointer and compare with pivot
// 7. Repeat steps 4-6
// 8. Eventually pivot will be swapped with first pointer (should be in the center/close to)
// 9. return the pivot element

// QUICKSORT RECURSION
// 9. Create two subarrays/partitions, one either side of the pivot
// 10. Repeat the same steps 1-8 for each partition. Eventually this will sort the array




// array - the array to be sorted
// l - the leftmost/lowest element
// r - the rightmost/highest element
function partition(array, l, r) {
    var pivot = array[r];
    var p1 = l; // first pointer
    var p2 = l - 1; // second pointer

    for (var i = p1; i < r; i++) {
        if (array[i] <= pivot) {
            p2 = p2 + 1;
            var temp = array[i];
            array[i] = array[p2];
            array[p2] = temp;
        }
    }

    // Must swap the pivot with the second pointer, p2 - final case
    // Its p2 + 1, because this is how it was done in for loop before a swap.
    var a = array[p2 + 1];
    array[p2 + 1] = array[r];
    array[r] = a;
    return p2 + 1;
}

function quickSort(array, l, r) {
    if (l < r) {
        var p = partition(array, l, r);
        quickSort(array, l, p-1);
        quickSort(array, p+1, r);
    }
}

var my_Array = [2,8,4,6,4,9,8,0,3];
console.log(my_Array);

var size = my_Array.length;
quickSort(my_Array, 0, size-1);
console.log(my_Array);