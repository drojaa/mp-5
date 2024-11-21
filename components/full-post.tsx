

import { redirect } from 'next/navigation'
import { PostProps } from "@/types"

export default function FullPost({ post } : {post : PostProps}) {
    const url = String(post.url)
    return (
        redirect(`${url}`)
    );
}
