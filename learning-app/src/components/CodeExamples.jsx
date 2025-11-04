import { useState } from 'react';
import './CodeExamples.css';

function CodeExamples() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [selectedTopic, setSelectedTopic] = useState('datatypes');

  const examples = {
    python: {
      datatypes: {
        title: "Data Types in Python",
        description: "Python has several built-in data types. Here's how to use them!",
        code: `# Python Data Types Example
# Python figures out the type automatically!

# Integer (whole numbers)
age = 12
print(f"Age: {age}")
print(f"Type: {type(age)}")  # <class 'int'>

# Float (decimal numbers)
height = 5.2
print(f"Height: {height}")
print(f"Type: {type(height)}")  # <class 'float'>

# String (text)
name = "Emma"
print(f"Name: {name}")
print(f"Type: {type(name)}")  # <class 'str'>

# Boolean (True or False)
is_student = True
print(f"Is student: {is_student}")
print(f"Type: {type(is_student)}")  # <class 'bool'>

# List (collection of items)
scores = [95, 87, 92, 88]
print(f"Scores: {scores}")
print(f"Type: {type(scores)}")  # <class 'list'>`
      },
      binary: {
        title: "Binary Operations in Python",
        description: "Convert between binary, decimal, and hexadecimal!",
        code: `# Binary and Hex Operations in Python

# Convert decimal to binary
number = 42
binary = bin(number)  # Returns '0b101010'
print(f"{number} in binary: {binary}")

# Convert decimal to hex
hex_value = hex(number)  # Returns '0x2a'
print(f"{number} in hex: {hex_value}")

# Convert binary string to decimal
binary_string = "101010"
decimal = int(binary_string, 2)  # Base 2 (binary)
print(f"Binary {binary_string} = {decimal}")

# Convert hex string to decimal
hex_string = "2A"
decimal_from_hex = int(hex_string, 16)  # Base 16 (hex)
print(f"Hex {hex_string} = {decimal_from_hex}")

# Binary operations
a = 5   # 0101 in binary
b = 3   # 0011 in binary
print(f"a = {a}, b = {b}")
print(f"a & b (AND) = {a & b}")    # 0001 = 1
print(f"a | b (OR) = {a | b}")     # 0111 = 7
print(f"a ^ b (XOR) = {a ^ b}")    # 0110 = 6`
      },
      memory: {
        title: "Memory and Variables in Python",
        description: "See how Python stores data in memory!",
        code: `# Memory in Python
# Python manages memory automatically!

# Create variables
x = 10
y = 20
name = "Python"

# Check memory addresses (where data is stored)
print(f"x = {x}, stored at: {hex(id(x))}")
print(f"y = {y}, stored at: {hex(id(y))}")
print(f"name = {name}, stored at: {hex(id(name))}")

# Interesting: When you copy a simple value
a = 5
b = a  # b gets the same value
print(f"a is stored at: {hex(id(a))}")
print(f"b is stored at: {hex(id(b))}")
# They point to the same memory! Python is smart!

# Lists work differently
list1 = [1, 2, 3]
list2 = list1  # list2 points to SAME list
list2.append(4)
print(f"list1: {list1}")  # Both changed!
print(f"list2: {list2}")

# To make a real copy:
list3 = list1.copy()
list3.append(5)
print(f"list1: {list1}")  # Not changed
print(f"list3: {list3}")  # Only this changed`
      }
    },
    c: {
      datatypes: {
        title: "Data Types in C",
        description: "C requires you to specify the type of every variable!",
        code: `// C Data Types Example
#include <stdio.h>

int main() {
    // Integer (whole numbers)
    int age = 12;
    printf("Age: %d\\n", age);
    printf("Size: %zu bytes\\n", sizeof(age));

    // Character (single letter)
    char initial = 'E';
    printf("Initial: %c\\n", initial);
    printf("Size: %zu byte\\n", sizeof(initial));

    // Float (decimal numbers)
    float height = 5.2;
    printf("Height: %.1f\\n", height);
    printf("Size: %zu bytes\\n", sizeof(height));

    // Double (larger decimal numbers)
    double pi = 3.14159265359;
    printf("Pi: %.10f\\n", pi);
    printf("Size: %zu bytes\\n", sizeof(pi));

    // Short (smaller integer)
    short tiny = 100;
    printf("Tiny: %d\\n", tiny);
    printf("Size: %zu bytes\\n", sizeof(tiny));

    // Long (larger integer)
    long big = 1000000;
    printf("Big: %ld\\n", big);
    printf("Size: %zu bytes\\n", sizeof(big));

    return 0;
}`
      },
      binary: {
        title: "Binary Operations in C",
        description: "Work with bits directly in C!",
        code: `// Binary Operations in C
#include <stdio.h>

// Function to print a number in binary
void printBinary(int n) {
    for (int i = 7; i >= 0; i--) {
        int bit = (n >> i) & 1;
        printf("%d", bit);
    }
    printf("\\n");
}

int main() {
    int a = 5;  // 00000101
    int b = 3;  // 00000011

    printf("a = %d, binary: ", a);
    printBinary(a);

    printf("b = %d, binary: ", b);
    printBinary(b);

    // Bitwise AND
    int and_result = a & b;  // 00000001 = 1
    printf("a & b = %d, binary: ", and_result);
    printBinary(and_result);

    // Bitwise OR
    int or_result = a | b;   // 00000111 = 7
    printf("a | b = %d, binary: ", or_result);
    printBinary(or_result);

    // Bitwise XOR
    int xor_result = a ^ b;  // 00000110 = 6
    printf("a ^ b = %d, binary: ", xor_result);
    printBinary(xor_result);

    // Left shift (multiply by 2)
    int shifted = a << 1;    // 00001010 = 10
    printf("a << 1 = %d, binary: ", shifted);
    printBinary(shifted);

    return 0;
}`
      },
      memory: {
        title: "Memory and Pointers in C",
        description: "C lets you work directly with memory addresses!",
        code: `// Memory and Pointers in C
#include <stdio.h>

int main() {
    // Create variables
    int age = 12;
    char grade = 'A';
    float score = 95.5;

    // Print values and memory addresses
    printf("Value of age: %d\\n", age);
    printf("Address of age: %p\\n", (void*)&age);
    printf("Size of age: %zu bytes\\n\\n", sizeof(age));

    printf("Value of grade: %c\\n", grade);
    printf("Address of grade: %p\\n", (void*)&grade);
    printf("Size of grade: %zu byte\\n\\n", sizeof(grade));

    printf("Value of score: %.1f\\n", score);
    printf("Address of score: %p\\n", (void*)&score);
    printf("Size of score: %zu bytes\\n\\n", sizeof(score));

    // Pointers - variables that store addresses!
    int *ptr = &age;  // ptr stores the address of age
    printf("Pointer ptr stores address: %p\\n", (void*)ptr);
    printf("Value at that address: %d\\n", *ptr);

    // Change value through pointer
    *ptr = 13;
    printf("After *ptr = 13, age is now: %d\\n", age);

    // Array in memory
    int numbers[4] = {10, 20, 30, 40};
    printf("\\nArray elements and their addresses:\\n");
    for (int i = 0; i < 4; i++) {
        printf("numbers[%d] = %d at %p\\n",
               i, numbers[i], (void*)&numbers[i]);
    }

    return 0;
}`
      }
    },
    cpp: {
      datatypes: {
        title: "Data Types in C++",
        description: "C++ has all of C's types plus more powerful features!",
        code: `// C++ Data Types Example
#include <iostream>
#include <string>
using namespace std;

int main() {
    // Basic types (same as C)
    int age = 12;
    char initial = 'E';
    float height = 5.2;
    double pi = 3.14159;
    bool is_student = true;

    cout << "Age: " << age << " (" << sizeof(age) << " bytes)" << endl;
    cout << "Initial: " << initial << " (" << sizeof(initial) << " byte)" << endl;
    cout << "Height: " << height << " (" << sizeof(height) << " bytes)" << endl;
    cout << "Pi: " << pi << " (" << sizeof(pi) << " bytes)" << endl;
    cout << "Is student: " << is_student << " (" << sizeof(is_student) << " byte)" << endl;

    // C++ also has string (easier than C!)
    string name = "Emma";
    cout << "\\nName: " << name << endl;
    cout << "Length: " << name.length() << " characters" << endl;

    // Auto keyword - C++ figures it out!
    auto smart_var = 42;        // int
    auto smart_float = 3.14;    // double
    auto smart_text = "Hello";  // const char*

    cout << "\\nUsing auto:" << endl;
    cout << "smart_var = " << smart_var << endl;
    cout << "smart_float = " << smart_float << endl;
    cout << "smart_text = " << smart_text << endl;

    return 0;
}`
      },
      binary: {
        title: "Binary Operations in C++",
        description: "C++ has all of C's bit operations with better output!",
        code: `// Binary Operations in C++
#include <iostream>
#include <bitset>
using namespace std;

int main() {
    int a = 5;  // 00000101
    int b = 3;  // 00000011

    // bitset makes it easy to see binary!
    cout << "a = " << a << ", binary: " << bitset<8>(a) << endl;
    cout << "b = " << b << ", binary: " << bitset<8>(b) << endl;

    // Bitwise operations
    int and_result = a & b;
    cout << "\\na & b = " << and_result << ", binary: "
         << bitset<8>(and_result) << endl;

    int or_result = a | b;
    cout << "a | b = " << or_result << ", binary: "
         << bitset<8>(or_result) << endl;

    int xor_result = a ^ b;
    cout << "a ^ b = " << xor_result << ", binary: "
         << bitset<8>(xor_result) << endl;

    int not_result = ~a;
    cout << "~a = " << not_result << ", binary: "
         << bitset<8>(not_result) << endl;

    // Shifts
    int left_shift = a << 2;   // Multiply by 4
    cout << "\\na << 2 = " << left_shift << ", binary: "
         << bitset<8>(left_shift) << endl;

    int right_shift = a >> 1;  // Divide by 2
    cout << "a >> 1 = " << right_shift << ", binary: "
         << bitset<8>(right_shift) << endl;

    return 0;
}`
      },
      memory: {
        title: "Memory Management in C++",
        description: "C++ has references AND pointers!",
        code: `// Memory Management in C++
#include <iostream>
using namespace std;

int main() {
    // Regular variable
    int score = 95;
    cout << "score = " << score << endl;
    cout << "Address: " << &score << endl;
    cout << "Size: " << sizeof(score) << " bytes" << endl;

    // Pointer (like C)
    int *ptr = &score;
    cout << "\\nPointer ptr = " << ptr << endl;
    cout << "Value at ptr: " << *ptr << endl;

    // Reference (unique to C++!)
    // A reference is like a nickname for a variable
    int &ref = score;
    cout << "\\nReference ref = " << ref << endl;
    cout << "Address of ref: " << &ref << endl;

    // Change through reference
    ref = 100;
    cout << "After ref = 100:" << endl;
    cout << "score = " << score << endl;
    cout << "ref = " << ref << endl;
    // They're the SAME variable!

    // Dynamic memory (using new/delete)
    int *dynamic = new int(42);
    cout << "\\nDynamic value: " << *dynamic << endl;
    cout << "Dynamic address: " << dynamic << endl;

    // Don't forget to free memory!
    delete dynamic;

    // Array
    int numbers[] = {10, 20, 30, 40};
    cout << "\\nArray in memory:" << endl;
    for (int i = 0; i < 4; i++) {
        cout << "numbers[" << i << "] = " << numbers[i]
             << " at " << &numbers[i] << endl;
    }

    return 0;
}`
      }
    }
  };

  const currentExample = examples[selectedLanguage][selectedTopic];

  return (
    <div className="code-examples">
      <h2>💻 Code Examples</h2>
      <p className="subtitle">Learn how real programming languages work with data!</p>

      <div className="controls">
        <div className="language-selector">
          <button
            className={selectedLanguage === 'python' ? 'active' : ''}
            onClick={() => setSelectedLanguage('python')}
          >
            🐍 Python
          </button>
          <button
            className={selectedLanguage === 'c' ? 'active' : ''}
            onClick={() => setSelectedLanguage('c')}
          >
            ⚙️ C
          </button>
          <button
            className={selectedLanguage === 'cpp' ? 'active' : ''}
            onClick={() => setSelectedLanguage('cpp')}
          >
            ⚡ C++
          </button>
        </div>

        <div className="topic-selector">
          <button
            className={selectedTopic === 'datatypes' ? 'active' : ''}
            onClick={() => setSelectedTopic('datatypes')}
          >
            Data Types
          </button>
          <button
            className={selectedTopic === 'binary' ? 'active' : ''}
            onClick={() => setSelectedTopic('binary')}
          >
            Binary Operations
          </button>
          <button
            className={selectedTopic === 'memory' ? 'active' : ''}
            onClick={() => setSelectedTopic('memory')}
          >
            Memory
          </button>
        </div>
      </div>

      <div className="example-display">
        <h3>{currentExample.title}</h3>
        <p className="description">{currentExample.description}</p>
        <pre className="code-block">
          <code>{currentExample.code}</code>
        </pre>
      </div>

      <div className="learn-section">
        <h3>🎓 Language Comparison:</h3>
        <div className="comparison-grid">
          <div className="comparison-card python">
            <h4>🐍 Python</h4>
            <ul>
              <li>Easiest to learn!</li>
              <li>Types are automatic</li>
              <li>Great for beginners</li>
              <li>Slower but simpler</li>
              <li>Manages memory for you</li>
            </ul>
          </div>
          <div className="comparison-card c">
            <h4>⚙️ C</h4>
            <ul>
              <li>Very powerful and fast</li>
              <li>You control everything</li>
              <li>Must specify types</li>
              <li>Work directly with memory</li>
              <li>Used in operating systems</li>
            </ul>
          </div>
          <div className="comparison-card cpp">
            <h4>⚡ C++</h4>
            <ul>
              <li>C with superpowers!</li>
              <li>Fast AND flexible</li>
              <li>Has classes & objects</li>
              <li>Used in games & apps</li>
              <li>Best of both worlds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeExamples;
