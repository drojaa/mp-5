

import { redirect } from 'next/navigation'
import { PostProps } from "@/types"

export default function FullPost({ post } : {post : PostProps}) {
    const url = String(post.url)
    return (
       //used to redirect the shortened link to correct webpage
            redirect(`${url}`)
    );
}
