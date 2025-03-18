from collections import Counter
from typing import List
import unittest

# This function will determine which string(s) have the most common length in the "words" list.
def get_strings_with_most_common_length(words: List[str]) -> List[str]:
    if not words:
        return []  # If the input list is empty, return an empty list.
    
    # Count the frequency of each string length in the list
    length_count = Counter(len(word) for word in words)  
    # Example: if words = ['apple', 'pear', 'grape', 'kiwi', 'mango', 'plum']
    # length_count = {5: 3, 4: 3} (length 5 appears 3 times, length 4 appears 3 times)
    
    # This fucntion will find the highest frequency of string lengths
    max_occurrence = max(length_count.values())  
    # Example: max_occurrence = max([3, 3]) → 3 (the most common length appears 3 times)
    
    # After that i identify all lengths that appear with the highest frequency
    common_lengths = {length for length, count in length_count.items() if count == max_occurrence}  
    # Example: common_lengths = {4, 5} (both lengths 4 and 5 appear most frequently)
    
    # FInally choose and return only the "words" String that match the most common lengths
    return [word for word in words if len(word) in common_lengths]  
    # Example: ['apple', 'grape', 'mango'] Because 5 letter words happen the most frequent

# Test cases with different inputs
print(get_strings_with_most_common_length(['apple', 'pear', 'grape', 'kiwi', 'mango']))  
# Output: ['apple', 'grape', 'mango']

print(get_strings_with_most_common_length(['www', 'eee', 'cc', 'ddd', 'ee']))  
# Output: ['cc', 'ee']

print(get_strings_with_most_common_length([]))  
# Output: []

print(get_strings_with_most_common_length(['Trung']))  
# Output: ['Trung']

print(get_strings_with_most_common_length(['BA', 'FE', 'BE', 'FullStack', 'JS']))  
# Output: ['BA', 'FE', 'BE','JS']

# Unit testing using unittest
class TestMostFrequentLengthStrings(unittest.TestCase):
    def test_cases(self):
        # Checking multiple cases to ensure the function behaves correctly
        self.assertEqual(get_strings_with_most_common_length(['a', 'ab', 'abc', 'cd', 'def', 'gh']), ['ab', 'cd', 'gh'])
        self.assertEqual(get_strings_with_most_common_length(['aaa', 'bb', 'cc', 'ddd', 'ee']), ['bb', 'cc', 'ee'])
        self.assertEqual(get_strings_with_most_common_length([]), [])
        self.assertEqual(get_strings_with_most_common_length(['x']), ['x'])
        self.assertEqual(get_strings_with_most_common_length(['abc', 'de', 'fg', 'hi', 'jkl']), ['de', 'fg', 'hi'])

# unning unit tests
if __name__ == "__main__":
    unittest.main()
