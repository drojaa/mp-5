"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getPostByAlias(
  alias: string
): Promise<PostProps | null> {
  const postsCollection = await getCollection(POSTS_COLLECTION);
  
  // Find a document with the given alias
  const data = await postsCollection.findOne({ alias });

  if (!data) {
    return null; // Return null if no matching document is found
  }

  // Construct and return the post object
  const post: PostProps = {
    id: data._id.toHexString(), // Convert ObjectId to string
    alias: data.alias,         // Use alias from the retrieved data
    url: data.url,             // Use url from the retrieved data
  };

  return post;
}
