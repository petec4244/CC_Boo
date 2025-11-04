import { useState } from 'react';
import './CodeExamples.css';

function CodeExamples() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [selectedTopic, setSelectedTopic] = useState('datatypes');
  const [showHistory, setShowHistory] = useState(false);

  const languageInfo = {
    python: { name: 'Python', year: 1991, creator: 'Guido van Rossum', icon: '🐍', difficulty: 'Easiest', speed: 'Slower', bestFor: 'Beginners, Data Science, AI, Web Apps', why: 'Start here! Easiest to learn, readable like English. Great for learning without complexity.' },
    javascript: { name: 'JavaScript', year: 1995, creator: 'Brendan Eich', icon: '🌐', difficulty: 'Easy-Medium', speed: 'Medium', bestFor: 'Websites, Web Apps, Mobile Apps', why: 'Runs in browsers! Essential for interactive websites. Can build mobile and server apps too.' },
    java: { name: 'Java', year: 1995, creator: 'James Gosling', icon: '☕', difficulty: 'Medium', speed: 'Fast', bestFor: 'Android Apps, Enterprise Software', why: 'Write once, run anywhere! Popular for Android and business apps. Teaches good practices.' },
    c: { name: 'C', year: 1972, creator: 'Dennis Ritchie', icon: '⚙️', difficulty: 'Hard', speed: 'Fastest', bestFor: 'Operating Systems, Hardware', why: 'The foundation! Direct control over memory and hardware. Used in OS and embedded systems.' },
    cpp: { name: 'C++', year: 1985, creator: 'Bjarne Stroustrup', icon: '⚡', difficulty: 'Hard', speed: 'Fastest', bestFor: 'Games, Graphics Apps', why: 'C with modern features! Fast like C but with classes. Used in AAA games and graphics.' },
    rust: { name: 'Rust', year: 2010, creator: 'Graydon Hoare', icon: '🦀', difficulty: 'Hard', speed: 'Fastest', bestFor: 'Safe System Programming', why: 'Modern and safe! Fast as C/C++ but prevents bugs. The future of system programming.' },
    go: { name: 'Go', year: 2009, creator: 'Google Team', icon: '🏃', difficulty: 'Medium', speed: 'Very Fast', bestFor: 'Web Servers, Cloud Services', why: 'Simple and fast! Created by Google. Easy to learn, powerful for web services.' }
  };

  const examples = {
    python: {
      datatypes: {
        title: "Data Types in Python",
        description: "Python figures out types automatically!",
        code: `# Python Data Types
age = 12  # Integer
height = 5.2  # Float
name = "Emma"  # String
is_student = True  # Boolean
scores = [95, 87, 92]  # List

print(f"Age: {age}, Type: {type(age)}")
print(f"Height: {height}, Type: {type(height)}")
print(f"Name: {name}, Type: {type(name)}")`
      },
      binary: {
        title: "Binary in Python",
        description: "Easy binary and hex conversions!",
        code: `# Binary and Hex in Python
number = 42
print(f"{number} in binary: {bin(number)}")  # 0b101010
print(f"{number} in hex: {hex(number)}")  # 0x2a

# Convert back
binary_str = "101010"
decimal = int(binary_str, 2)
print(f"Binary {binary_str} = {decimal}")  # 42`
      },
      memory: {
        title: "Memory in Python",
        description: "Python manages memory for you!",
        code: `# Memory in Python
x = 10
y = 20

# Check memory addresses
print(f"x stored at: {hex(id(x))}")
print(f"y stored at: {hex(id(y))}")

# Lists work differently
list1 = [1, 2, 3]
list2 = list1  # Same list!
list2.append(4)
print(f"list1: {list1}")  # [1,2,3,4] - both changed!`
      }
    },
    javascript: {
      datatypes: {
        title: "Data Types in JavaScript",
        description: "JavaScript has dynamic types like Python!",
        code: `// JavaScript Data Types
let age = 12;  // Number
let height = 5.2;  // Number (no separate float!)
let name = "Emma";  // String
let isStudent = true;  // Boolean
let scores = [95, 87, 92];  // Array
let person = {name: "Emma", age: 12};  // Object

console.log(\`Age: \${age}, Type: \${typeof age}\`);
console.log(\`Name: \${name}, Type: \${typeof name}\`);
console.log(\`Scores: \${scores}\`);
console.log(\`Person: \${JSON.stringify(person)}\`);`
      },
      binary: {
        title: "Binary in JavaScript",
        description: "Work with binary and hex easily!",
        code: `// Binary in JavaScript
const number = 42;
console.log(\`\${number} in binary: \${number.toString(2)}\`);
console.log(\`\${number} in hex: \${number.toString(16)}\`);

// Convert from binary/hex
const fromBinary = parseInt("101010", 2);
const fromHex = parseInt("2A", 16);
console.log(\`Binary 101010 = \${fromBinary}\`);
console.log(\`Hex 2A = \${fromHex}\`);

// Bitwise operations
const a = 5, b = 3;
console.log(\`\${a} & \${b} = \${a & b}\`);  // AND = 1
console.log(\`\${a} | \${b} = \${a | b}\`);  // OR = 7`
      },
      memory: {
        title: "Memory in JavaScript",
        description: "JavaScript uses references for objects!",
        code: `// Memory in JavaScript
let x = 10;
let y = x;  // Copy value
y = 20;
console.log(\`x = \${x}, y = \${y}\`);  // 10, 20

// Objects/Arrays are references!
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Same array!
arr2.push(4);
console.log(\`arr1: \${arr1}\`);  // [1,2,3,4]
console.log(\`arr2: \${arr2}\`);  // [1,2,3,4]

// Make a copy
let arr3 = [...arr1];  // Spread operator
arr3.push(5);
console.log(\`arr1: \${arr1}\`);  // [1,2,3,4]`
      }
    },
    java: {
      datatypes: {
        title: "Data Types in Java",
        description: "Java requires explicit type declarations!",
        code: `// Java Data Types
public class DataTypes {
    public static void main(String[] args) {
        // Primitive types
        int age = 12;
        double height = 5.2;
        char initial = 'E';
        boolean isStudent = true;
        
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Initial: " + initial);
        
        // Objects
        String name = "Emma";
        Integer[] scores = {95, 87, 92};
        System.out.println("Name: " + name);
    }
}`
      },
      binary: {
        title: "Binary in Java",
        description: "Java has built-in binary utilities!",
        code: `// Binary in Java
public class BinaryOps {
    public static void main(String[] args) {
        int number = 42;
        
        System.out.println("Decimal: " + number);
        System.out.println("Binary: " + 
            Integer.toBinaryString(number));
        System.out.println("Hex: " + 
            Integer.toHexString(number));
        
        // Parse from binary/hex
        int fromBin = Integer.parseInt("101010", 2);
        int fromHex = Integer.parseInt("2A", 16);
        System.out.println("From binary: " + fromBin);
        System.out.println("From hex: " + fromHex);
    }
}`
      },
      memory: {
        title: "Memory in Java",
        description: "Java uses automatic garbage collection!",
        code: `// Memory in Java
public class Memory {
    public static void main(String[] args) {
        // Primitives stored directly
        int x = 10;
        int y = x;
        y = 20;
        System.out.println("x = " + x);  // 10
        System.out.println("y = " + y);  // 20
        
        // Objects are references
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1;  // Same array!
        arr2[0] = 99;
        System.out.println("arr1[0] = " + arr1[0]);  // 99!
        
        // Clone to copy
        int[] arr3 = arr1.clone();
        arr3[0] = 5;
        System.out.println("arr1[0] = " + arr1[0]);  // Still 99
    }
}`
      }
    },
    c: {
      datatypes: {
        title: "Data Types in C",
        description: "C requires you to manage everything!",
        code: `// C Data Types
#include <stdio.h>

int main() {
    int age = 12;
    char initial = 'E';
    float height = 5.2;
    double pi = 3.14159;
    
    printf("Age: %d (%zu bytes)\\n", age, sizeof(age));
    printf("Initial: %c (%zu byte)\\n", initial, sizeof(initial));
    printf("Height: %.1f (%zu bytes)\\n", height, sizeof(height));
    printf("Pi: %.5f (%zu bytes)\\n", pi, sizeof(pi));
    
    return 0;
}`
      },
      binary: {
        title: "Binary in C",
        description: "Direct bit manipulation in C!",
        code: `// Binary in C
#include <stdio.h>

void printBinary(int n) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (n >> i) & 1);
    }
    printf("\\n");
}

int main() {
    int a = 5, b = 3;
    printf("a = %d: ", a); printBinary(a);
    printf("b = %d: ", b); printBinary(b);
    printf("a & b = %d: ", a & b); printBinary(a & b);
    printf("a | b = %d: ", a | b); printBinary(a | b);
    return 0;
}`
      },
      memory: {
        title: "Memory in C",
        description: "You control memory directly!",
        code: `// Memory in C
#include <stdio.h>

int main() {
    int age = 12;
    printf("Value: %d\\n", age);
    printf("Address: %p\\n", (void*)&age);
    printf("Size: %zu bytes\\n", sizeof(age));
    
    // Pointers!
    int *ptr = &age;
    printf("\\nPointer: %p\\n", (void*)ptr);
    printf("Value via pointer: %d\\n", *ptr);
    
    *ptr = 13;  // Change via pointer
    printf("New age: %d\\n", age);  // Changed!
    
    return 0;
}`
      }
    },
    cpp: {
      datatypes: {
        title: "Data Types in C++",
        description: "C++ adds modern features to C!",
        code: `// C++ Data Types
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 12;
    char initial = 'E';
    double height = 5.2;
    bool isStudent = true;
    string name = "Emma";  // Easy strings!
    
    cout << "Age: " << age << endl;
    cout << "Name: " << name << endl;
    
    // Auto keyword - C++ figures it out!
    auto smart = 42;  // int
    auto pi = 3.14;  // double
    cout << "Smart: " << smart << endl;
    
    return 0;
}`
      },
      binary: {
        title: "Binary in C++",
        description: "bitset makes binary easy!",
        code: `// Binary in C++
#include <iostream>
#include <bitset>
using namespace std;

int main() {
    int a = 5, b = 3;
    
    cout << "a = " << a << ": " << bitset<8>(a) << endl;
    cout << "b = " << b << ": " << bitset<8>(b) << endl;
    
    cout << "a & b = " << (a & b) << ": " 
         << bitset<8>(a & b) << endl;
    cout << "a | b = " << (a | b) << ": " 
         << bitset<8>(a | b) << endl;
    
    return 0;
}`
      },
      memory: {
        title: "Memory in C++",
        description: "Pointers AND references!",
        code: `// Memory in C++
#include <iostream>
using namespace std;

int main() {
    int score = 95;
    
    // Pointer (like C)
    int *ptr = &score;
    cout << "Via pointer: " << *ptr << endl;
    
    // Reference (C++ only!)
    int &ref = score;  // Nickname for score
    ref = 100;
    cout << "score: " << score << endl;  // 100!
    cout << "ref: " << ref << endl;  // 100!
    // They're the SAME variable!
    
    return 0;
}`
      }
    },
    rust: {
      datatypes: {
        title: "Data Types in Rust",
        description: "Rust is strict but safe!",
        code: `// Rust Data Types
fn main() {
    let age: i32 = 12;  // 32-bit integer
    let height: f64 = 5.2;  // 64-bit float
    let initial: char = 'E';
    let is_student: bool = true;
    let name: &str = "Emma";  // String slice
    
    println!("Age: {}", age);
    println!("Name: {}", name);
    
    // Rust can infer types!
    let smart = 42;  // i32 inferred
    let pi = 3.14;  // f64 inferred
    
    // Variables immutable by default!
    let x = 5;
    // x = 6;  // ERROR! Can't modify
    let mut y = 5;  // mut = mutable
    y = 6;  // OK!
}`
      },
      binary: {
        title: "Binary in Rust",
        description: "Safe bit operations in Rust!",
        code: `// Binary in Rust
fn main() {
    let number = 42;
    
    println!("Decimal: {}", number);
    println!("Binary: {:b}", number);
    println!("Hex: {:x}", number);
    
    // Bitwise operations
    let a = 5;
    let b = 3;
    println!("a & b = {}", a & b);  // AND
    println!("a | b = {}", a | b);  // OR
    println!("a ^ b = {}", a ^ b);  // XOR
    
    // Rust prevents overflow!
    let big: u8 = 255;  // Max for u8
    let safe = big.checked_add(1);  // Returns None
    println!("Safe add: {:?}", safe);  // None
}`
      },
      memory: {
        title: "Memory in Rust",
        description: "Rust's ownership system prevents bugs!",
        code: `// Memory in Rust
fn main() {
    let x = 5;
    let y = x;  // Copy (integers are Copy)
    println!("x: {}, y: {}", x, y);  // Both work!
    
    // Strings move ownership!
    let s1 = String::from("hello");
    let s2 = s1;  // s1 moved to s2
    // println!("{}", s1);  // ERROR! s1 no longer valid
    println!("{}", s2);  // Only s2 works
    
    // Clone to copy
    let s3 = s2.clone();
    println!("s2: {}, s3: {}", s2, s3);  // Both work!
    
    // Rust guarantees no memory bugs!
}`
      }
    },
    go: {
      datatypes: {
        title: "Data Types in Go",
        description: "Go is simple and clear!",
        code: `// Go Data Types
package main
import "fmt"

func main() {
    var age int = 12
    var height float64 = 5.2
    var initial rune = 'E'  // rune = character
    var isStudent bool = true
    var name string = "Emma"
    
    fmt.Println("Age:", age)
    fmt.Println("Name:", name)
    
    // Short declaration
    smart := 42  // Go infers int
    pi := 3.14  // Go infers float64
    fmt.Println("Smart:", smart)
    
    // Multiple assignment
    x, y := 5, 10
    fmt.Println("x:", x, "y:", y)
}`
      },
      binary: {
        title: "Binary in Go",
        description: "Easy binary formatting in Go!",
        code: `// Binary in Go
package main
import "fmt"

func main() {
    number := 42
    
    fmt.Printf("Decimal: %d\\n", number)
    fmt.Printf("Binary: %b\\n", number)
    fmt.Printf("Hex: %x\\n", number)
    
    // Bitwise operations
    a, b := 5, 3
    fmt.Printf("a & b = %d\\n", a & b)  // AND
    fmt.Printf("a | b = %d\\n", a | b)  // OR
    fmt.Printf("a ^ b = %d\\n", a ^ b)  // XOR
    fmt.Printf("a << 1 = %d\\n", a << 1)  // Left shift
}`
      },
      memory: {
        title: "Memory in Go",
        description: "Go has garbage collection and pointers!",
        code: `// Memory in Go
package main
import "fmt"

func main() {
    age := 12
    
    // Pointers in Go
    ptr := &age  // Get address
    fmt.Println("Value:", age)
    fmt.Println("Address:", ptr)
    fmt.Println("Via pointer:", *ptr)
    
    // Change via pointer
    *ptr = 13
    fmt.Println("New age:", age)  // Changed!
    
    // Slices are references
    slice1 := []int{1, 2, 3}
    slice2 := slice1  // Same slice!
    slice2[0] = 99
    fmt.Println("slice1:", slice1)  // [99 2 3]
    
    // Go garbage collector cleans up!
}`
      }
    }
  };

  const currentExample = examples[selectedLanguage]?.[selectedTopic] || examples.python.datatypes;
  const info = languageInfo[selectedLanguage];
  const currentYear = 2024;
  const languageAge = currentYear - info.year;

  return (
    <div className="code-examples">
      <div className="examples-header">
        <h2>💻 Code Examples</h2>
        <p className="subtitle">Learn how real programming languages work!</p>
        <button 
          className="history-toggle"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? '📝 Hide History' : '📚 Show Language History'}
        </button>
      </div>

      {showHistory && (
        <div className="language-history-panel">
          <h3>🕰️ Programming Language Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">1972</div>
              <div className="lang-badge c">⚙️ C</div>
              <div className="desc">The foundation - created at Bell Labs</div>
            </div>
            <div className="timeline-item">
              <div className="year">1985</div>
              <div className="lang-badge cpp">⚡ C++</div>
              <div className="desc">C with object-oriented features</div>
            </div>
            <div className="timeline-item">
              <div className="year">1991</div>
              <div className="lang-badge python">🐍 Python</div>
              <div className="desc">Designed for readability and simplicity</div>
            </div>
            <div className="timeline-item">
              <div className="year">1995</div>
              <div className="lang-badge javascript">🌐 JavaScript</div>
              <div className="desc">Created in 10 days for Netscape browser!</div>
            </div>
            <div className="timeline-item">
              <div className="year">1995</div>
              <div className="lang-badge java">☕ Java</div>
              <div className="desc">Write once, run anywhere philosophy</div>
            </div>
            <div className="timeline-item">
              <div className="year">2009</div>
              <div className="lang-badge go">🏃 Go</div>
              <div className="desc">Google's answer to simple concurrency</div>
            </div>
            <div className="timeline-item">
              <div className="year">2010</div>
              <div className="lang-badge rust">🦀 Rust</div>
              <div className="desc">Safe systems programming</div>
            </div>
          </div>
        </div>
      )}

      <div className="current-language-info">
        <h3>{info.icon} Currently Viewing: {info.name}</h3>
        <div className="lang-stats">
          <span className="stat">📅 Created: {info.year} ({languageAge} years old)</span>
          <span className="stat">👤 Creator: {info.creator}</span>
          <span className="stat">📊 Difficulty: {info.difficulty}</span>
          <span className="stat">⚡ Speed: {info.speed}</span>
        </div>
        <div className="lang-use-case">
          <strong>Best For:</strong> {info.bestFor}
        </div>
        <div className="lang-why">
          <strong>Why Use It:</strong> {info.why}
        </div>
      </div>

      <div className="controls">
        <div className="language-selector">
          <button className={selectedLanguage === 'python' ? 'active' : ''} onClick={() => setSelectedLanguage('python')}>🐍 Python</button>
          <button className={selectedLanguage === 'javascript' ? 'active' : ''} onClick={() => setSelectedLanguage('javascript')}>🌐 JavaScript</button>
          <button className={selectedLanguage === 'java' ? 'active' : ''} onClick={() => setSelectedLanguage('java')}>☕ Java</button>
          <button className={selectedLanguage === 'c' ? 'active' : ''} onClick={() => setSelectedLanguage('c')}>⚙️ C</button>
          <button className={selectedLanguage === 'cpp' ? 'active' : ''} onClick={() => setSelectedLanguage('cpp')}>⚡ C++</button>
          <button className={selectedLanguage === 'rust' ? 'active' : ''} onClick={() => setSelectedLanguage('rust')}>🦀 Rust</button>
          <button className={selectedLanguage === 'go' ? 'active' : ''} onClick={() => setSelectedLanguage('go')}>🏃 Go</button>
        </div>

        <div className="topic-selector">
          <button className={selectedTopic === 'datatypes' ? 'active' : ''} onClick={() => setSelectedTopic('datatypes')}>Data Types</button>
          <button className={selectedTopic === 'binary' ? 'active' : ''} onClick={() => setSelectedTopic('binary')}>Binary Operations</button>
          <button className={selectedTopic === 'memory' ? 'active' : ''} onClick={() => setSelectedTopic('memory')}>Memory</button>
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
        <h3>🎯 When to Use Each Language:</h3>
        <div className="use-cases-grid">
          <div className="use-case-card python">
            <h4>🐍 Python</h4>
            <p><strong>Use when:</strong> Learning programming, data science, AI/ML, scripting</p>
            <p><strong>Avoid when:</strong> Need maximum speed or mobile apps</p>
          </div>
          <div className="use-case-card javascript">
            <h4>🌐 JavaScript</h4>
            <p><strong>Use when:</strong> Building websites, web apps, or cross-platform apps</p>
            <p><strong>Avoid when:</strong> Need direct hardware access or heavy computation</p>
          </div>
          <div className="use-case-card java">
            <h4>☕ Java</h4>
            <p><strong>Use when:</strong> Android apps, large business systems, need portability</p>
            <p><strong>Avoid when:</strong> Want quick prototyping or simple scripts</p>
          </div>
          <div className="use-case-card c">
            <h4>⚙️ C</h4>
            <p><strong>Use when:</strong> Operating systems, embedded devices, need max speed</p>
            <p><strong>Avoid when:</strong> Want easy development or automatic memory management</p>
          </div>
          <div className="use-case-card cpp">
            <h4>⚡ C++</h4>
            <p><strong>Use when:</strong> Game development, graphics, high-performance apps</p>
            <p><strong>Avoid when:</strong> Want simplicity or are just starting</p>
          </div>
          <div className="use-case-card rust">
            <h4>🦀 Rust</h4>
            <p><strong>Use when:</strong> Want C/C++ speed with safety guarantees</p>
            <p><strong>Avoid when:</strong> Learning first language or need rapid development</p>
          </div>
          <div className="use-case-card go">
            <h4>🏃 Go</h4>
            <p><strong>Use when:</strong> Web servers, cloud services, concurrent programs</p>
            <p><strong>Avoid when:</strong> Need lowest-level hardware control</p>
          </div>
        </div>
      </div>

      <div className="learn-section comparison-section">
        <h3>⚖️ Quick Comparison:</h3>
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Language</th>
                <th>Learning Curve</th>
                <th>Speed</th>
                <th>Memory</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🐍 Python</td>
                <td className="easy">★☆☆</td>
                <td className="slow">Slow</td>
                <td className="auto">Automatic</td>
                <td className="high">Very High</td>
              </tr>
              <tr>
                <td>🌐 JavaScript</td>
                <td className="easy">★★☆</td>
                <td className="medium">Medium</td>
                <td className="auto">Automatic</td>
                <td className="high">Very High</td>
              </tr>
              <tr>
                <td>☕ Java</td>
                <td className="medium">★★☆</td>
                <td className="fast">Fast</td>
                <td className="auto">Automatic</td>
                <td className="high">Very High</td>
              </tr>
              <tr>
                <td>⚙️ C</td>
                <td className="hard">★★★</td>
                <td className="fastest">Fastest</td>
                <td className="manual">Manual</td>
                <td className="medium">Medium</td>
              </tr>
              <tr>
                <td>⚡ C++</td>
                <td className="hard">★★★</td>
                <td className="fastest">Fastest</td>
                <td className="manual">Manual</td>
                <td className="high">High</td>
              </tr>
              <tr>
                <td>🦀 Rust</td>
                <td className="hard">★★★</td>
                <td className="fastest">Fastest</td>
                <td className="auto">Compile-Check</td>
                <td className="medium">Growing</td>
              </tr>
              <tr>
                <td>🏃 Go</td>
                <td className="medium">★★☆</td>
                <td className="fast">Very Fast</td>
                <td className="auto">Automatic</td>
                <td className="medium">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CodeExamples;
