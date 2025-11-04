# Programming Examples

This directory contains runnable code examples in Python, C, and C++ that demonstrate computer data and memory concepts.

## Directory Structure

```
examples/
├── python/     # Python examples (easiest to run)
├── c/          # C examples (requires compilation)
└── cpp/        # C++ examples (requires compilation)
```

## Quick Start

### Python Examples (Easiest!)

Python examples can be run directly without compilation:

```bash
cd python
python3 1_data_types.py
python3 2_binary_hex.py
python3 3_memory.py
```

### C Examples

C examples need to be compiled first:

```bash
cd c

# Compile all examples
gcc 1_data_types.c -o data_types
gcc 2_binary_ops.c -o binary_ops
gcc 3_memory.c -o memory

# Run them
./data_types
./binary_ops
./memory
```

### C++ Examples

C++ examples also need compilation:

```bash
cd cpp

# Compile all examples
g++ 1_data_types.cpp -o data_types
g++ 2_binary_ops.cpp -o binary_ops
g++ 3_memory.cpp -o memory

# Run them
./data_types
./binary_ops
./memory
```

## Example Topics

Each language folder contains three examples:

1. **Data Types** (`1_data_types.*`)
   - Learn about different data types
   - Understand memory sizes
   - See type differences between languages

2. **Binary & Hexadecimal** (`2_binary_*.*`)
   - Convert between number systems
   - Perform bitwise operations
   - Work with binary and hex numbers

3. **Memory** (`3_memory.*`)
   - Understand memory addresses
   - Learn about pointers/references
   - See how data is stored in memory

## Learning Tips

1. **Start with Python**: It's the easiest to understand and run
2. **Compare Languages**: Run the same example in all three languages
3. **Experiment**: Try changing values and see what happens
4. **Read the Comments**: Each file has helpful explanations
5. **Ask Questions**: If something doesn't make sense, that's okay!

## Need Help?

- **Python not found**: Install Python 3 from python.org
- **gcc/g++ not found**: Install GCC/G++ compiler
  - Linux: `sudo apt-get install build-essential`
  - Mac: Install Xcode Command Line Tools
  - Windows: Install MinGW or use WSL

## Fun Challenges

Once you've run all the examples, try these challenges:

1. Modify the binary operations to use different numbers
2. Add more variables to the memory examples
3. Create your own hex color codes
4. Write a program that converts your age to binary
5. Calculate how much memory your favorite game might use

Happy coding!
