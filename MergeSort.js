// Playing around with Merge Sort

// PSEUDO
// An array to be sorted, A | the starting index, p | the ending index, r | the halfway point, q

// Using Divide and Conquer Technique
// Divide a problem into subproblems. When solution to each subproblem is ready, combine results to solve main problem
// 1. Divide - Split the array, A into 2 sub arrays A[p, q] and A[q+1, r]
// 2. Conquer - Sort both the subarrays A[p, q] and A[q+1, r]. If base case isn't reached, divide again and try to sort
    // Base case - when the subarray has a size of 1 (p == r)
    // Recursively divides the array into halves and sorts, until base case is reached
    // After that, the merge function merges the sorted sub arrays
// 3. Merge - Using the two sorted subarrays, A[p, q] and A[p, r], combine the results by creating a sorted array A[p, r]


// Merge 2 subarrays into array, A
function merge(A, p, q, r) {
    // PSEUDO
    // 1. Create the two subarrays
    // 2. Iterate over each subarray concurrently.
    // 3. Add the smaller value to the new sorted array
    // 4. Increase index of subarrays and new sorted array
    // 5. When we run out of elements in either subarray, add remaining elements of other subarray to new sorted array

    let s1 = [];
    let s2 = [];
    let n1 = q - p + 1; 
    let n2 = r - q;

    for (let i = 0; i < n1; i++) {
        s1[i] = A[p + i];
    }
    for (let j = 0; j < n2; j++) {
        s2[j] = A[q + 1 + j];
    }

    let i,j,k;
    i = 0;
    j = 0;
    k = p;

    while (i < n1 && j < n2) {
        if (s1[i] <= s2[j]) {
            A[k] = s1[i];
            i++;
        }
        else {
            A[k] = s2[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        A[k] = s1[i];
        i++;
        k++;
    } 
    while (j < n2) {
        A[k] = s2[j];
        j++;
        k++;
    }
}

// Dividing the array into two sub arrays, sort them and merge them
function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p+r) / 2);
        mergeSort(A, p, q);    
        mergeSort(A, q+1, r);
        merge(A, p, q, r);
    }   
}


let arr = [1, 8, 3, 5, 6, 9];
console.log(arr);
mergeSort(arr, 0, 6);
console.log(arr);