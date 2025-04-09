export function riskyOperation(value: number): void {
    if (value < 0) {
        throw new Error("Negative values are not allowed.");
    }
    console.log(`Success: ${value} is valid.`);
}
