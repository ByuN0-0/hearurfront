import getPostRequest from "@/utils/api/post/getPostRequest";
import {Post} from "@/components/post/PostItems";
import PostItem from "@/components/post/PostItem";
export interface IParams {
  params: { no: number };
}

export async function generateMetadata({params: {no}}: IParams) {
  const post:Post = await getPostRequest(no);
  return {
    title: "HearUR | 게시글:" + post.title,
  };
}

const post = ({params: {no}}: IParams) => {
  return (
      <div>
        <PostItem params={{no}}/>
      </div>
  );
}

export default post;