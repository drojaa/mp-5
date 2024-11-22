


import getPostByAlias from "@/lib/getPostByAlias"
import FullPost from "@/components/full-post"

export default async function FullPostPage({
    params,
} : {
    params: Promise<{alias : string}>
}) {
    const {alias} = await params;
    const post = await getPostByAlias(alias);

    if (post === null) {
        return <p>post not found</p>;
    }
    return <FullPost post={post} />;
}