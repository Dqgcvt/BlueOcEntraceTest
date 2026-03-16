Test cases
1. Empty list 
Input data: []
Expected: return empty

2. List with one element
Input data: [‘one’]
Expected: return [‘one’]

3. List with all same frequence
Input data: [‘ab’, ‘ab’, ‘bd’, ‘ee’]
Expected: return [‘ab’, ‘ab’, ‘bd’, ‘ee’]

4. List with equally same in frequence group of elements
Input data: [‘ab’, ‘a’]
Expected: return [‘ab’] and [‘a’] 

5. Normal case
Input data: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’]
Expected: [‘ab’, ‘cd’, ‘gh’]

6. List with only two different element
Input data: [‘ab’, ‘a’]
Expected: return [‘ab’] and [‘a’] based on addition requirement

7. List with empty string
Input data: [‘’, ‘ab’, ‘a’, ‘’]
Expected: return [‘’]

8. List with large amount of elements
Input data: [‘’, ‘ab’, ‘a’, ‘’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’,  ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’,  ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’,  ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’,  ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’ ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’, ‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’, ‘gh’.........]
Expected: return all elements that are same in frequence
