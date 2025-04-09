export function printList(items: string[]): void {
    items.forEach((item, index) => {
        console.log(`${index + 1}: ${item}`);
    });
}
