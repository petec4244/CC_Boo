/*
 * Data Types in C
 * Learn about different data types and their sizes!
 * Compile: gcc 1_data_types.c -o data_types
 * Run: ./data_types
 */

#include <stdio.h>
#include <stdbool.h>

int main() {
    printf("==================================================\n");
    printf("C DATA TYPES\n");
    printf("==================================================\n");

    // Integer (whole numbers)
    int age = 12;
    printf("\n1. Integer (int):\n");
    printf("   age = %d\n", age);
    printf("   Size: %zu bytes\n", sizeof(age));
    printf("   Range: -2,147,483,648 to 2,147,483,647\n");

    // Character (single letter)
    char initial = 'E';
    printf("\n2. Character (char):\n");
    printf("   initial = '%c'\n", initial);
    printf("   ASCII value: %d\n", initial);
    printf("   Size: %zu byte\n", sizeof(initial));

    // Float (decimal numbers)
    float height = 5.2f;
    printf("\n3. Float:\n");
    printf("   height = %.1f\n", height);
    printf("   Size: %zu bytes\n", sizeof(height));
    printf("   Precision: ~6-7 decimal digits\n");

    // Double (larger decimal numbers)
    double pi = 3.14159265359;
    printf("\n4. Double:\n");
    printf("   pi = %.10f\n", pi);
    printf("   Size: %zu bytes\n", sizeof(pi));
    printf("   Precision: ~15-16 decimal digits\n");

    // Short (smaller integer)
    short tiny = 100;
    printf("\n5. Short:\n");
    printf("   tiny = %d\n", tiny);
    printf("   Size: %zu bytes\n", sizeof(tiny));
    printf("   Range: -32,768 to 32,767\n");

    // Long (larger integer)
    long big = 1000000L;
    printf("\n6. Long:\n");
    printf("   big = %ld\n", big);
    printf("   Size: %zu bytes\n", sizeof(big));

    // Boolean (true/false) - requires C99 or later
    bool is_student = true;
    printf("\n7. Boolean:\n");
    printf("   is_student = %s\n", is_student ? "true" : "false");
    printf("   Size: %zu byte\n", sizeof(is_student));

    // Unsigned (only positive numbers)
    unsigned int positive = 42;
    printf("\n8. Unsigned int:\n");
    printf("   positive = %u\n", positive);
    printf("   Size: %zu bytes\n", sizeof(positive));
    printf("   Range: 0 to 4,294,967,295 (no negative!)\n");

    printf("\n==================================================\n");
    printf("In C, you must specify the type of every variable!\n");
    printf("==================================================\n");

    return 0;
}
