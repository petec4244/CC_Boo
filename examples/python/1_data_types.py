#!/usr/bin/env python3
"""
Data Types in Python
Learn about different data types and how Python stores them!
"""

print("=" * 50)
print("PYTHON DATA TYPES")
print("=" * 50)

# Integer (whole numbers)
age = 12
print(f"\n1. Integer:")
print(f"   age = {age}")
print(f"   Type: {type(age)}")
print(f"   Memory size: {age.__sizeof__()} bytes")

# Float (decimal numbers)
height = 5.2
print(f"\n2. Float:")
print(f"   height = {height}")
print(f"   Type: {type(height)}")
print(f"   Memory size: {height.__sizeof__()} bytes")

# String (text)
name = "Emma"
print(f"\n3. String:")
print(f"   name = '{name}'")
print(f"   Type: {type(name)}")
print(f"   Length: {len(name)} characters")
print(f"   Memory size: {name.__sizeof__()} bytes")

# Boolean (True or False)
is_student = True
print(f"\n4. Boolean:")
print(f"   is_student = {is_student}")
print(f"   Type: {type(is_student)}")
print(f"   Memory size: {is_student.__sizeof__()} bytes")

# List (collection of items)
scores = [95, 87, 92, 88]
print(f"\n5. List:")
print(f"   scores = {scores}")
print(f"   Type: {type(scores)}")
print(f"   Length: {len(scores)} items")
print(f"   Memory size: {scores.__sizeof__()} bytes")

# Dictionary (key-value pairs)
student = {"name": "Emma", "age": 12, "grade": "6th"}
print(f"\n6. Dictionary:")
print(f"   student = {student}")
print(f"   Type: {type(student)}")
print(f"   Keys: {list(student.keys())}")
print(f"   Memory size: {student.__sizeof__()} bytes")

print("\n" + "=" * 50)
print("Python figures out types automatically! 🎉")
print("=" * 50)
