import { GET_POSTS } from "@/Services/api";
import { useQuery } from "@tanstack/react-query";
// Define a type/interface for the structure of a post
interface Post {
    id: number;
    title: string;
    // Add more properties as needed
}

const Posts = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['posts'], // Adjusted query key to 'posts'
        queryFn: GET_POSTS,
    });

    if (isLoading) return "Loading...";

    if (error) return (
        <div>
            An error has occurred: {error.message} <button onClick={() => refetch()}>Retry</button>
        </div>
    );

    return (
        <div>
            {data && data.data.length > 0 && data.data.map((post: { id: string, title: string }) => (
                <div key={post.id} className="flex items-center gap-4">
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Posts;
