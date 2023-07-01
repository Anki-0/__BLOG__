import { useQuery } from 'react-query';
import { Posts } from './posts';

interface GetPostsParams {
  revalidate?: number;
  pagination?: {
    limit: number;
    offset: number;
  };
}

export default function usePosts(props: GetPostsParams) {
  const { revalidate = 60, pagination } = props;

  return useQuery('POSTS', async () => {
    const { data } = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GET_POSTS(
        $input: PostFilterInput
        $format: String
        $pagination: PaginationInput
      ) {
        posts(input: $input, pagination: $pagination) {
          data {
            id
            postTitle: title
            postContent: content
            postImage: image
            createdAt(format: $format)
            author: publishedBy {
              id
              username
              displayName: name
              image
            }
          }
        }
      }
      
        `,
        variables: {
          format: 'MMM dd',
          pagination: {
            limit: pagination?.limit ?? 20,
            offset: pagination?.offset ?? 0,
          },
        },
      }),
      next: { revalidate: revalidate },
    }).then((res) => res.json());

    return data?.posts.data as [Posts];
  });
}
