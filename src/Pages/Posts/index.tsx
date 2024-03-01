import { GET_POSTS } from '@/Services/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Posts = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'], // Adjusted query key to 'posts'
    queryFn: GET_POSTS,
    staleTime: 50000000,
  });

  if (isLoading) return 'Loading...';

  if (error)
    return (
      <div>
        An error has occurred: {error.message}{' '}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );

  return (
    <div>
      <Link to="/">Home</Link>
      {data &&
        data.data.length > 0 &&
        data.data.map((post: { id: string; title: string }) => (
          <div key={post.id} className="flex items-center gap-4">
            <div>{post.id}</div>
            <div>{post.title}</div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
