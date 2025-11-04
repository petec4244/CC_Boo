#!/usr/bin/env python3
"""
Memory and Variables in Python
See how Python stores data in memory!
"""

print("=" * 50)
print("MEMORY ADDRESSES IN PYTHON")
print("=" * 50)

# Create variables
x = 10
y = 20
name = "Python"

# Check memory addresses (where data is stored)
print(f"\n1. Variable Memory Addresses:")
print(f"   x = {x}, stored at: {hex(id(x))}")
print(f"   y = {y}, stored at: {hex(id(y))}")
print(f"   name = '{name}', stored at: {hex(id(name))}")

# Interesting: When you copy a simple value
a = 5
b = a  # b gets the same value
print(f"\n2. Variable Assignment:")
print(f"   a = {a}, address: {hex(id(a))}")
print(f"   b = a")
print(f"   b = {b}, address: {hex(id(b))}")
print(f"   Same address? {id(a) == id(b)}")
print(f"   (Python is smart and reuses memory for small numbers!)")

# Lists work differently
print("\n3. Lists and References:")
list1 = [1, 2, 3]
list2 = list1  # list2 points to SAME list
print(f"   list1 = {list1}, address: {hex(id(list1))}")
print(f"   list2 = list1")
print(f"   list2 = {list2}, address: {hex(id(list2))}")
print(f"   Same address? {id(list1) == id(list2)}")

list2.append(4)
print(f"\n   After list2.append(4):")
print(f"   list1 = {list1}")
print(f"   list2 = {list2}")
print(f"   Both changed because they share the same memory!")

# To make a real copy:
list3 = list1.copy()
list3.append(5)
print(f"\n   list3 = list1.copy()")
print(f"   list3 = {list3}, address: {hex(id(list3))}")
print(f"   After list3.append(5):")
print(f"   list1 = {list1} (not changed)")
print(f"   list3 = {list3} (changed)")

# Memory size of different objects
print("\n" + "=" * 50)
print("MEMORY SIZES")
print("=" * 50)

import sys

objects = [
    ("Small integer (1)", 1),
    ("Large integer (1000000)", 1000000),
    ("Float (3.14)", 3.14),
    ("Short string ('Hi')", "Hi"),
    ("Long string", "This is a much longer string!"),
    ("Empty list", []),
    ("List with 5 items", [1, 2, 3, 4, 5]),
    ("Empty dict", {}),
    ("Dict with 3 items", {"a": 1, "b": 2, "c": 3})
]

for name, obj in objects:
    size = sys.getsizeof(obj)
    print(f"{name:30} {size:4} bytes")

print("\n" + "=" * 50)
print("Key Takeaway: Python manages memory automatically!")
print("You don't have to worry about allocating or freeing memory.")
print("=" * 50)
