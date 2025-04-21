'use client'

import { PostType, usePosts } from '@/shared/store'
import React from 'react'

type Props = {
	id: number
}

const PostItem: React.FC<Props> = ({id}) => {
	const { post, getPost } = usePosts(state => state)
	const newPost = [post]
	React.useEffect(() => {
		getPost(id)
	}, [id])
	return (
		<div>
			{(newPost as PostType[]).map((post: PostType, i: number) => (
				<li key={i}>
					<p>{post.title}</p>
					<p>{post.body}</p>
				</li>
			))}
		</div>
	)
}

export default PostItem
