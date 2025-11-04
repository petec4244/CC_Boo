#!/usr/bin/env python3
"""
Binary and Hexadecimal in Python
Learn how to convert between different number systems!
"""

print("=" * 50)
print("BINARY AND HEXADECIMAL CONVERSIONS")
print("=" * 50)

# Decimal to Binary
number = 42
binary = bin(number)  # Returns '0b101010'
print(f"\n1. Decimal to Binary:")
print(f"   Number: {number}")
print(f"   Binary: {binary}")
print(f"   Binary (without 0b): {binary[2:]}")

# Decimal to Hexadecimal
hex_value = hex(number)  # Returns '0x2a'
print(f"\n2. Decimal to Hexadecimal:")
print(f"   Number: {number}")
print(f"   Hex: {hex_value}")
print(f"   Hex (uppercase): {hex_value.upper()}")

# Binary to Decimal
binary_string = "101010"
decimal_from_binary = int(binary_string, 2)  # Base 2
print(f"\n3. Binary to Decimal:")
print(f"   Binary: {binary_string}")
print(f"   Decimal: {decimal_from_binary}")

# Hex to Decimal
hex_string = "2A"
decimal_from_hex = int(hex_string, 16)  # Base 16
print(f"\n4. Hexadecimal to Decimal:")
print(f"   Hex: {hex_string}")
print(f"   Decimal: {decimal_from_hex}")

# Binary Operations (Bitwise)
print("\n" + "=" * 50)
print("BITWISE OPERATIONS")
print("=" * 50)

a = 5   # 0101 in binary
b = 3   # 0011 in binary

print(f"\na = {a} (binary: {bin(a)})")
print(f"b = {b} (binary: {bin(b)})")

print(f"\nBitwise Operations:")
print(f"  a & b (AND)  = {a & b} (binary: {bin(a & b)})")
print(f"  a | b (OR)   = {a | b} (binary: {bin(a | b)})")
print(f"  a ^ b (XOR)  = {a ^ b} (binary: {bin(a ^ b)})")
print(f"  ~a (NOT)     = {~a} (binary: {bin(~a & 0xFF)})")
print(f"  a << 1 (Left shift)  = {a << 1} (binary: {bin(a << 1)})")
print(f"  a >> 1 (Right shift) = {a >> 1} (binary: {bin(a >> 1)})")

# Fun with colors!
print("\n" + "=" * 50)
print("COLORS IN HEXADECIMAL")
print("=" * 50)

red = 255
green = 100
blue = 150

hex_color = f"#{red:02X}{green:02X}{blue:02X}"
print(f"\nRGB Color: ({red}, {green}, {blue})")
print(f"Hex Color: {hex_color}")

print("\n" + "=" * 50)
print("All done! 🎉")
print("=" * 50)
