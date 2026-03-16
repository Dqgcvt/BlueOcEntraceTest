from collections import defaultdict
def most_frequent_length_strings(arr):
   if not arr:
       return []


   groups = defaultdict(list)


   for s in arr:
       groups[len(s)].append(s)


   max_size = max(len(v) for v in groups.values())


   return [v for v in groups.values() if len(v) == max_size]
