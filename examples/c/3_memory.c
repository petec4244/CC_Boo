/*
 * Memory and Pointers in C
 * Learn how C works directly with memory!
 * Compile: gcc 3_memory.c -o memory
 * Run: ./memory
 */

#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("==================================================\n");
    printf("MEMORY ADDRESSES IN C\n");
    printf("==================================================\n");

    // Create variables
    int age = 12;
    char grade = 'A';
    float score = 95.5f;

    // Print values and memory addresses
    printf("\n1. Variables and Their Addresses:\n");
    printf("   age = %d\n", age);
    printf("   Address: %p\n", (void*)&age);
    printf("   Size: %zu bytes\n\n", sizeof(age));

    printf("   grade = '%c'\n", grade);
    printf("   Address: %p\n", (void*)&grade);
    printf("   Size: %zu byte\n\n", sizeof(grade));

    printf("   score = %.1f\n", score);
    printf("   Address: %p\n", (void*)&score);
    printf("   Size: %zu bytes\n", sizeof(score));

    printf("\n==================================================\n");
    printf("POINTERS - Variables that Store Addresses!\n");
    printf("==================================================\n");

    // Pointers - variables that store addresses!
    int *ptr = &age;  // ptr stores the address of age
    printf("\n2. Using Pointers:\n");
    printf("   int *ptr = &age;\n");
    printf("   Pointer address: %p\n", (void*)ptr);
    printf("   Value at address (*ptr): %d\n", *ptr);

    // Change value through pointer
    *ptr = 13;
    printf("\n   After *ptr = 13:\n");
    printf("   age is now: %d\n", age);
    printf("   (We changed age through the pointer!)\n");

    printf("\n==================================================\n");
    printf("ARRAYS IN MEMORY\n");
    printf("==================================================\n");

    // Array in memory
    int numbers[4] = {10, 20, 30, 40};
    printf("\n3. How Arrays are Stored:\n");
    printf("   Arrays store elements consecutively in memory:\n\n");

    for (int i = 0; i < 4; i++) {
        printf("   numbers[%d] = %2d at address %p\n",
               i, numbers[i], (void*)&numbers[i]);
    }

    printf("\n   Notice: Addresses are 4 bytes apart (size of int)!\n");

    printf("\n==================================================\n");
    printf("DYNAMIC MEMORY (The Heap)\n");
    printf("==================================================\n");

    // Dynamic memory allocation
    printf("\n4. Allocating Memory Dynamically:\n");
    int *dynamic = (int*)malloc(sizeof(int));
    *dynamic = 42;
    printf("   Allocated memory for 1 int on the heap\n");
    printf("   Address: %p\n", (void*)dynamic);
    printf("   Value: %d\n", *dynamic);

    // Allocate array dynamically
    int *array = (int*)malloc(5 * sizeof(int));
    for (int i = 0; i < 5; i++) {
        array[i] = (i + 1) * 10;
    }

    printf("\n   Allocated array of 5 ints:\n");
    for (int i = 0; i < 5; i++) {
        printf("   array[%d] = %d at %p\n",
               i, array[i], (void*)&array[i]);
    }

    // Free the memory!
    free(dynamic);
    free(array);
    printf("\n   Memory freed! (Always free what you malloc!)\n");

    printf("\n==================================================\n");
    printf("STACK VS HEAP\n");
    printf("==================================================\n");

    printf("\n5. Two Types of Memory:\n");
    printf("   STACK: Fast, automatic, limited size\n");
    printf("          - Local variables live here\n");
    printf("          - Automatically cleaned up\n\n");

    printf("   HEAP: Slower, manual, larger\n");
    printf("         - malloc allocates here\n");
    printf("         - You must free() when done!\n");

    printf("\n==================================================\n");
    printf("In C, YOU control the memory! 💪\n");
    printf("==================================================\n");

    return 0;
}
