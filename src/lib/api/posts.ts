export interface Posts {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  status: string;
  tags: [{ tag_name: string; id: string }];
  publishedBy: string;
  modifiedBy: string;
  banner: string;
  updatedAt: Date;
}

interface GetPostsParams {
  revalidate?: number;
  pagination?: {
    limit: number;
    offset: number;
  };
}
interface GetPostsByTitleParams {
  revalidate?: number;
  title: string;
}

export const getPosts = async (
  props: GetPostsParams = {},
): Promise<[Posts]> => {
  const { revalidate = 60, pagination } = props;

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
            tags {
              id
              tag_name
            }
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
        input: {
          orderBy: {
            createdAt: 'DESC',
          },
        },
        format: 'MMM dd',
        pagination: {
          limit: pagination?.limit ?? 20,
          offset: pagination?.offset ?? 0,
        },
      },
    }),
    next: { revalidate: revalidate },
  }).then((res) => res.json());

  return data?.posts.data;
};

interface GetPostByTitleResponse {
  __typename: string;
  id: string;
  postTitle: string;
  postContent: string;
  postImage: string;
  createdAt: string;
  tags: [{ tag_name: string; id: string }];
  author: {
    __typename: string;
    id: string;
    username: string;
    displayName: string;
    image: string;
  };
}

export const getPostsByTitle = async (
  props: GetPostsByTitleParams,
): Promise<GetPostByTitleResponse> => {
  const { revalidate = 60, title } = props;

  const { data } = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ` query GET_POSTS($input: PostFilterInput, $format: String) {
        posts(input: $input) {
          data {
            id
            postTitle: title
            postContent: content
            postImage: image
            createdAt(format: $format)
            tags {
              id
              tag_name
            }
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
        input: {
          where: {
            title: {
              _eq: title,
            },
          },
        },
        format: 'MMM dd',
      },
    }),
    next: { revalidate: revalidate },
  }).then((res) => res.json());

  console.log(data);

  return data?.posts.data[0];
};
