export class Greeter {
    constructor(private name: string) {}

    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}
