/*
 * Data Types in C++
 * Learn about C++ data types and the 'auto' keyword!
 * Compile: g++ 1_data_types.cpp -o data_types
 * Run: ./data_types
 */

#include <iostream>
#include <string>
#include <typeinfo>
using namespace std;

int main() {
    cout << "==================================================" << endl;
    cout << "C++ DATA TYPES" << endl;
    cout << "==================================================" << endl;

    // Basic types (same as C)
    int age = 12;
    char initial = 'E';
    float height = 5.2f;
    double pi = 3.14159;
    bool is_student = true;

    cout << "\n1. Basic Data Types:" << endl;
    cout << "   age = " << age << " (size: " << sizeof(age) << " bytes)" << endl;
    cout << "   initial = '" << initial << "' (size: " << sizeof(initial) << " byte)" << endl;
    cout << "   height = " << height << " (size: " << sizeof(height) << " bytes)" << endl;
    cout << "   pi = " << pi << " (size: " << sizeof(pi) << " bytes)" << endl;
    cout << "   is_student = " << (is_student ? "true" : "false")
         << " (size: " << sizeof(is_student) << " byte)" << endl;

    // C++ also has string (easier than C!)
    string name = "Emma";
    cout << "\n2. String (C++ style):" << endl;
    cout << "   name = \"" << name << "\"" << endl;
    cout << "   Length: " << name.length() << " characters" << endl;
    cout << "   Size: " << sizeof(name) << " bytes (object size)" << endl;

    // Auto keyword - C++ figures it out!
    cout << "\n==================================================" << endl;
    cout << "THE 'AUTO' KEYWORD - C++ is Smart!" << endl;
    cout << "==================================================" << endl;

    auto smart_int = 42;           // C++ knows this is int
    auto smart_float = 3.14;       // C++ knows this is double
    auto smart_text = "Hello";     // C++ knows this is const char*
    auto smart_string = string("World");  // C++ knows this is string

    cout << "\n3. Using 'auto':" << endl;
    cout << "   auto smart_int = 42" << endl;
    cout << "   Value: " << smart_int << endl;

    cout << "\n   auto smart_float = 3.14" << endl;
    cout << "   Value: " << smart_float << endl;

    cout << "\n   auto smart_text = \"Hello\"" << endl;
    cout << "   Value: " << smart_text << endl;

    // Range-based types
    cout << "\n==================================================" << endl;
    cout << "SIZE VARIANTS" << endl;
    cout << "==================================================" << endl;

    short small = 100;
    int medium = 10000;
    long large = 1000000L;
    long long huge = 1000000000000LL;

    cout << "\n4. Different Integer Sizes:" << endl;
    cout << "   short:     " << small << " (" << sizeof(small) << " bytes)" << endl;
    cout << "   int:       " << medium << " (" << sizeof(medium) << " bytes)" << endl;
    cout << "   long:      " << large << " (" << sizeof(large) << " bytes)" << endl;
    cout << "   long long: " << huge << " (" << sizeof(huge) << " bytes)" << endl;

    // Unsigned types
    unsigned int positive = 4294967295U;  // Maximum unsigned int
    cout << "\n5. Unsigned Types (only positive):" << endl;
    cout << "   unsigned int: " << positive << endl;
    cout << "   Range: 0 to " << positive << endl;

    cout << "\n==================================================" << endl;
    cout << "C++ has all of C's types PLUS extra features! 🚀" << endl;
    cout << "==================================================" << endl;

    return 0;
}
