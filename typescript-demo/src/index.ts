import { fetchPosts } from "./asyncFetch";
import { factorial } from "./recursion";
import { Greeter } from "./classes";
import { printList } from "./listOperations";
import { riskyOperation } from "./exceptionHandling";

console.log("=== Greeter Example ===");
const greeter = new Greeter("Kaliah");
greeter.greet();

console.log("\n=== Factorial (Recursion) ===");
console.log("Factorial of 5 is", factorial(5));

console.log("\n=== List Example ===");
printList(["apple", "banana", "cherry"]);

console.log("\n=== Exception Handling Example ===");
try {
    riskyOperation(10);
    riskyOperation(-5);
} catch (err: any) {
    console.error("Caught an error:", err.message);
}

console.log("\n=== Async/Await Fetch Example ===");
fetchPosts();
