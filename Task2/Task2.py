def sum_top_two(nums):
   if len(nums) < 2:
       raise ValueError("Array must contain at least two numbers")
   if not all(isinstance(x, (int, float)) for x in nums):
       raise TypeError("Array must contain only numbers")
   first = second = float('-inf')
   for n in nums:
       if n > first:
           second = first
           first = n
       elif n > second:
           second = n
   return first + second
