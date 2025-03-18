from typing import List
import unittest

# This function will fid the sum of the two largest integers in the list.
def sum_of_top_two(numbers: List[int]) -> int:
    if len(numbers) < 2:
        raise ValueError("List must have at least two numbers")  # This condition makes sure the list must have 2 numbers

    # this function  will arrange the list from maximum to minimum number
    sorted_numbers = sorted(numbers, reverse=True)  
    # Example: numbers = [1, 4, 2, 3, 5] → sorted_numbers = [5, 4, 3, 2, 1]

    # Sum up the top two largest numbers
    return sorted_numbers[0] + sorted_numbers[1]  
    # Example: 5 + 4 = 9

# Test cases with different inputs
print(sum_of_top_two([1, 4, 2, 3, 5]))  
# Output: 9

print(sum_of_top_two([10, 20, 30, 5, 15]))  
# Output: 50

print(sum_of_top_two([-10, -5, -2, -1]))  
# Output: -3

print(sum_of_top_two([100, 200]))  
# Output: 300

print(sum_of_top_two([7, 7, 7, 7]))  
# Output: 14


