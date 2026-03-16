Test cases
1. Normal case
Input: [1,4,2,3,5]
Output: 9

2. Exactly two numbers
Input: [8,2]
Output: 10

3. Already sorted ascending
Input: [1,2,3,4,5]
Output: 9

4. Sorted descending
Input: [9,7,5,3,1]
Output: 16

5. Duplicate largest numbers
Input: [5,5,5]
Output: 10

6. All negative numbers
Input: [-10,-3,-5,-1]
Output: -4

7. Mixed positive and negative numbers
Input: [-10,4,2,-3,5]
Output: 9

8. Contains zero
Input: [0,5,3]
Output: 8

9. Floating point numbers
Input: [1.5,2.3,4.7]
Output: 7.0

10. Array contains a string
Input: [1,4,"hello",5]
Output:
	Strict validation → TypeError
	Ignoring non-numbers → 9

11. Numeric strings present
Input: [1,"5","10"]
Output (if converted): 15

12. Mixed data types
Input: [1,5,None,"abc",10]
Output (ignoring non-numbers): 15

13. Empty array
Input: []
Output: ValueError

14. Only one element
Input: [7]
Output: ValueError

15. Very large numbers
Input: [10**12,10**11,5]
Output: 1100000000000

16. Large dataset (performance test)
Input: [1,2,3,...,1000000]
Output: 1999999

17. Boolean values (Python specific)
Input: [True,False,5,3]
Output: 8

18. Infinity value present
Input: [5,float("inf"),10]
Output: inf

19. NaN present
Input: [5,float("nan"),10]
Output: implementation dependent (should handle or ignore)

20. All non-numeric values
Input: ["a","b","c"]
Output: ValueError or "Not enough numeric values"
