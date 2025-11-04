/*
 * Memory Management in C++
 * Learn about pointers, references, and smart memory!
 * Compile: g++ 3_memory.cpp -o memory
 * Run: ./memory
 */

#include <iostream>
#include <memory>
using namespace std;

int main() {
    cout << "==================================================" << endl;
    cout << "MEMORY IN C++" << endl;
    cout << "==================================================" << endl;

    // Regular variable
    int score = 95;
    cout << "\n1. Regular Variable:" << endl;
    cout << "   score = " << score << endl;
    cout << "   Address: " << &score << endl;
    cout << "   Size: " << sizeof(score) << " bytes" << endl;

    cout << "\n==================================================" << endl;
    cout << "POINTERS (Like C)" << endl;
    cout << "==================================================" << endl;

    // Pointer (like C)
    int *ptr = &score;
    cout << "\n2. Pointers:" << endl;
    cout << "   int *ptr = &score;" << endl;
    cout << "   Pointer value: " << ptr << endl;
    cout << "   Points to: " << *ptr << endl;

    *ptr = 100;
    cout << "\n   After *ptr = 100:" << endl;
    cout << "   score = " << score << endl;

    cout << "\n==================================================" << endl;
    cout << "REFERENCES (Unique to C++!)" << endl;
    cout << "==================================================" << endl;

    // Reference (unique to C++!)
    // A reference is like a nickname for a variable
    int &ref = score;
    cout << "\n3. References:" << endl;
    cout << "   int &ref = score;" << endl;
    cout << "   ref = " << ref << endl;
    cout << "   Address of ref: " << &ref << endl;
    cout << "   Address of score: " << &score << endl;
    cout << "   Same address? " << (&ref == &score ? "Yes!" : "No") << endl;

    // Change through reference
    ref = 105;
    cout << "\n   After ref = 105:" << endl;
    cout << "   score = " << score << endl;
    cout << "   ref = " << ref << endl;
    cout << "   They're the SAME variable! Just different names." << endl;

    cout << "\n==================================================" << endl;
    cout << "DYNAMIC MEMORY (new/delete)" << endl;
    cout << "==================================================" << endl;

    // Dynamic memory (using new/delete)
    int *dynamic = new int(42);
    cout << "\n4. Dynamic Memory:" << endl;
    cout << "   int *dynamic = new int(42);" << endl;
    cout << "   Value: " << *dynamic << endl;
    cout << "   Address: " << dynamic << endl;

    // Don't forget to free memory!
    delete dynamic;
    cout << "   Freed with: delete dynamic;" << endl;

    // Dynamic array
    int *array = new int[5];
    for (int i = 0; i < 5; i++) {
        array[i] = (i + 1) * 10;
    }

    cout << "\n   Dynamic array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "   array[" << i << "] = " << array[i]
             << " at " << &array[i] << endl;
    }

    delete[] array;  // Note: delete[] for arrays!
    cout << "   Freed with: delete[] array;" << endl;

    cout << "\n==================================================" << endl;
    cout << "STACK VS HEAP" << endl;
    cout << "==================================================" << endl;

    cout << "\n5. Memory Locations:" << endl;

    int stack_var = 10;          // On stack
    int *heap_var = new int(20); // On heap

    cout << "   Stack variable at: " << &stack_var << endl;
    cout << "   Heap variable at:  " << heap_var << endl;
    cout << "\n   STACK: Fast, automatic, limited" << endl;
    cout << "   HEAP:  Slower, manual, larger" << endl;

    delete heap_var;

    cout << "\n==================================================" << endl;
    cout << "ARRAYS IN MEMORY" << endl;
    cout << "==================================================" << endl;

    // Array
    int numbers[] = {10, 20, 30, 40};
    cout << "\n6. Array Layout:" << endl;
    cout << "   Elements are stored consecutively:" << endl;
    for (int i = 0; i < 4; i++) {
        cout << "   numbers[" << i << "] = " << numbers[i]
             << " at " << &numbers[i] << endl;
    }

    // Calculate distance between elements
    long diff = (char*)&numbers[1] - (char*)&numbers[0];
    cout << "   Distance: " << diff << " bytes" << endl;

    cout << "\n==================================================" << endl;
    cout << "KEY DIFFERENCES FROM C:" << endl;
    cout << "==================================================" << endl;

    cout << "\n7. C++ Improvements:" << endl;
    cout << "   ✓ References (easier than pointers!)" << endl;
    cout << "   ✓ new/delete (instead of malloc/free)" << endl;
    cout << "   ✓ RAII (automatic cleanup)" << endl;
    cout << "   ✓ Smart pointers (even safer!)" << endl;

    cout << "\n==================================================" << endl;
    cout << "C++ gives you power AND safety! 💪" << endl;
    cout << "==================================================" << endl;

    return 0;
}
