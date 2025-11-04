/*
 * Binary Operations in C++
 * Learn bitwise operations with better output using bitset!
 * Compile: g++ 2_binary_ops.cpp -o binary_ops
 * Run: ./binary_ops
 */

#include <iostream>
#include <bitset>
using namespace std;

int main() {
    cout << "==================================================" << endl;
    cout << "BINARY OPERATIONS IN C++" << endl;
    cout << "==================================================" << endl;

    int a = 5;  // 00000101
    int b = 3;  // 00000011

    // bitset makes it easy to see binary!
    cout << "\nOriginal Numbers:" << endl;
    cout << "a = " << a << ", binary: " << bitset<8>(a) << endl;
    cout << "b = " << b << ", binary: " << bitset<8>(b) << endl;

    cout << "\n==================================================" << endl;
    cout << "BITWISE OPERATIONS" << endl;
    cout << "==================================================" << endl;

    // Bitwise AND
    int and_result = a & b;
    cout << "\n1. Bitwise AND (a & b):" << endl;
    cout << "   Result = " << and_result
         << ", binary: " << bitset<8>(and_result) << endl;
    cout << "   Use: Gets bits that are 1 in BOTH numbers" << endl;

    // Bitwise OR
    int or_result = a | b;
    cout << "\n2. Bitwise OR (a | b):" << endl;
    cout << "   Result = " << or_result
         << ", binary: " << bitset<8>(or_result) << endl;
    cout << "   Use: Gets bits that are 1 in EITHER number" << endl;

    // Bitwise XOR
    int xor_result = a ^ b;
    cout << "\n3. Bitwise XOR (a ^ b):" << endl;
    cout << "   Result = " << xor_result
         << ", binary: " << bitset<8>(xor_result) << endl;
    cout << "   Use: Gets bits that are DIFFERENT" << endl;

    // Bitwise NOT
    int not_result = ~a;
    cout << "\n4. Bitwise NOT (~a):" << endl;
    cout << "   Result = " << (not_result & 0xFF)
         << ", binary: " << bitset<8>(not_result) << endl;
    cout << "   Use: FLIPS all bits (0→1, 1→0)" << endl;

    // Left shift (multiply by 2)
    int left_shift = a << 2;   // Multiply by 4
    cout << "\n5. Left Shift (a << 2):" << endl;
    cout << "   Result = " << left_shift
         << ", binary: " << bitset<8>(left_shift) << endl;
    cout << "   Use: Multiply by 2^n (here: 5 * 4 = " << left_shift << ")" << endl;

    // Right shift (divide by 2)
    int right_shift = a >> 1;  // Divide by 2
    cout << "\n6. Right Shift (a >> 1):" << endl;
    cout << "   Result = " << right_shift
         << ", binary: " << bitset<8>(right_shift) << endl;
    cout << "   Use: Divide by 2^n (here: 5 / 2 = " << right_shift << ")" << endl;

    cout << "\n==================================================" << endl;
    cout << "PRACTICAL EXAMPLES" << endl;
    cout << "==================================================" << endl;

    // Check if even or odd
    int num = 42;
    cout << "\n7. Check if number is even:" << endl;
    cout << "   Is " << num << " even? " << ((num & 1) == 0 ? "Yes" : "No") << endl;
    cout << "   (Last bit: 0 = even, 1 = odd)" << endl;

    // Working with flags
    cout << "\n8. Using Bits as Flags:" << endl;
    const int FLAG_BOLD = 1;      // 00000001
    const int FLAG_ITALIC = 2;    // 00000010
    const int FLAG_UNDERLINE = 4; // 00000100

    int text_style = 0;
    cout << "   Starting style: " << bitset<8>(text_style) << endl;

    text_style |= FLAG_BOLD;      // Turn on bold
    cout << "   Add bold:       " << bitset<8>(text_style) << endl;

    text_style |= FLAG_ITALIC;    // Turn on italic
    cout << "   Add italic:     " << bitset<8>(text_style) << endl;

    text_style &= ~FLAG_BOLD;     // Turn off bold
    cout << "   Remove bold:    " << bitset<8>(text_style) << endl;

    // Check if a flag is set
    bool is_italic = (text_style & FLAG_ITALIC) != 0;
    cout << "   Is italic on? " << (is_italic ? "Yes" : "No") << endl;

    // Color manipulation
    cout << "\n9. Color Manipulation:" << endl;
    unsigned int color = 0xFF6496;  // Pink color
    int red = (color >> 16) & 0xFF;
    int green = (color >> 8) & 0xFF;
    int blue = color & 0xFF;

    cout << "   Color: 0x" << hex << color << dec << endl;
    cout << "   Red:   " << red << " (binary: " << bitset<8>(red) << ")" << endl;
    cout << "   Green: " << green << " (binary: " << bitset<8>(green) << ")" << endl;
    cout << "   Blue:  " << blue << " (binary: " << bitset<8>(blue) << ")" << endl;

    cout << "\n==================================================" << endl;
    cout << "C++ makes binary operations easy with bitset! 🎉" << endl;
    cout << "==================================================" << endl;

    return 0;
}
