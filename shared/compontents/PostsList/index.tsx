'use client'

import React from 'react'
import Link from 'next/link'
import { usePosts } from '@/shared/store'

const UsersList: React.FC = () => {
	const { posts, getAllPosts, searchValue } = usePosts(state => state)

	React.useEffect(() => {
		getAllPosts(searchValue)
	}, [searchValue])

	return (
		<ul>
			{posts.map((post: any) => (
				<li key={post.id}>
					<Link href={`/pages/${post.id}`}>
						<p>{post.title}</p>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default UsersList
