## Lesson 5 - data structures and loops III/III

### Let's revise

- bubble sort with 2 loops
- f(x) = 2x
- f(g(x))

### Sorting - merge

Let's talk about the big O notation O(n) and O(n log n)
Let's sort a larger random array using merge sort

### Resources

https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly#:~:text=Logarithmic%20running%20time%20(%20O(log,an%20O(log%20n)%20time

https://stackabuse.com/merge-sort-in-javascript/

### Logs

mergeSort() sort was called on side: [both] with length: 4 for the 1x time(s)
mergeSort() sort was called on side: [left] with length: 2 for the 1x time(s)
mergeSort() sort was called on side: [left] with length: 1 for the 2x time(s)
mergeSort() sort was called on side: [right] with length: 1 for the 2x time(s)
merge() was called with arrays: 78 and 83 for the 1x time(s)
=> merge() temp was: [78]
=> merge() has returned: [78,83]
mergeSort() sort was called on side: [right] with length: 2 for the 3x time(s)
mergeSort() sort was called on side: [left] with length: 1 for the 3x time(s)
mergeSort() sort was called on side: [right] with length: 1 for the 4x time(s)
merge() was called with arrays: 54 and 20 for the 2x time(s)
=> merge() temp was: [20]
=> merge() has returned: [20,54]
merge() was called with arrays: 78,83 and 20,54 for the 3x time(s)
=> merge() temp was: [20,54]
=> merge() has returned: [20,54,78,83]
(4) [20, 54, 78, 83]
merge sort was called 7 times and merge was called 3 times
