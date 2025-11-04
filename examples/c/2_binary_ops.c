/*
 * Binary Operations in C
 * Learn how to work with bits and binary numbers!
 * Compile: gcc 2_binary_ops.c -o binary_ops
 * Run: ./binary_ops
 */

#include <stdio.h>

// Function to print a number in binary (8 bits)
void printBinary(int n) {
    for (int i = 7; i >= 0; i--) {
        int bit = (n >> i) & 1;
        printf("%d", bit);
    }
}

int main() {
    printf("==================================================\n");
    printf("BINARY OPERATIONS IN C\n");
    printf("==================================================\n");

    int a = 5;  // 00000101
    int b = 3;  // 00000011

    printf("\nOriginal Numbers:\n");
    printf("a = %d, binary: ", a);
    printBinary(a);
    printf("\n");

    printf("b = %d, binary: ", b);
    printBinary(b);
    printf("\n");

    printf("\n==================================================\n");
    printf("BITWISE OPERATIONS\n");
    printf("==================================================\n");

    // Bitwise AND
    int and_result = a & b;  // 00000001 = 1
    printf("\n1. Bitwise AND (a & b):\n");
    printf("   Result = %d, binary: ", and_result);
    printBinary(and_result);
    printf("\n   Use: Checks if both bits are 1\n");

    // Bitwise OR
    int or_result = a | b;   // 00000111 = 7
    printf("\n2. Bitwise OR (a | b):\n");
    printf("   Result = %d, binary: ", or_result);
    printBinary(or_result);
    printf("\n   Use: Checks if either bit is 1\n");

    // Bitwise XOR
    int xor_result = a ^ b;  // 00000110 = 6
    printf("\n3. Bitwise XOR (a ^ b):\n");
    printf("   Result = %d, binary: ", xor_result);
    printBinary(xor_result);
    printf("\n   Use: Checks if bits are different\n");

    // Bitwise NOT
    int not_result = ~a;
    printf("\n4. Bitwise NOT (~a):\n");
    printf("   Result = %d, binary: ", not_result & 0xFF);
    printBinary(not_result & 0xFF);
    printf("\n   Use: Flips all bits (0→1, 1→0)\n");

    // Left Shift (multiply by 2)
    int left_shift = a << 1;    // 00001010 = 10
    printf("\n5. Left Shift (a << 1):\n");
    printf("   Result = %d, binary: ", left_shift);
    printBinary(left_shift);
    printf("\n   Use: Multiply by 2 (shifts bits left)\n");

    // Right Shift (divide by 2)
    int right_shift = a >> 1;   // 00000010 = 2
    printf("\n6. Right Shift (a >> 1):\n");
    printf("   Result = %d, binary: ", right_shift);
    printBinary(right_shift);
    printf("\n   Use: Divide by 2 (shifts bits right)\n");

    printf("\n==================================================\n");
    printf("PRACTICAL EXAMPLES\n");
    printf("==================================================\n");

    // Check if a number is even or odd
    int num = 42;
    printf("\nIs %d even? %s\n", num, (num & 1) == 0 ? "Yes" : "No");
    printf("(We check the last bit: 0 = even, 1 = odd)\n");

    // Extract RGB from color
    unsigned int color = 0xFF6496;  // A pink color
    int red = (color >> 16) & 0xFF;
    int green = (color >> 8) & 0xFF;
    int blue = color & 0xFF;
    printf("\nColor 0x%06X breaks down to:\n", color);
    printf("  Red   = %d (0x%02X)\n", red, red);
    printf("  Green = %d (0x%02X)\n", green, green);
    printf("  Blue  = %d (0x%02X)\n", blue, blue);

    printf("\n==================================================\n");
    printf("Bitwise operations are SUPER fast! 🚀\n");
    printf("==================================================\n");

    return 0;
}
