export async function fetchPosts(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await response.json();
        console.log("Fetched Posts:");
        posts.forEach((post: any) => console.log(`- ${post.title}`));
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
