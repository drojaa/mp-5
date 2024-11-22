"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getPostByAlias(
  alias: string
): Promise<PostProps | null> {
  const postsCollection = await getCollection(POSTS_COLLECTION);
  
 
  const data = await postsCollection.findOne({ alias });

  if (!data) {
    return null; 
  }

  
  const post: PostProps = {
    id: data._id.toHexString(), 
    alias: data.alias,        
    url: data.url,             
  };

  return post;
}
