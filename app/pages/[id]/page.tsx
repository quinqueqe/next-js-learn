import axios from 'axios'
import React from 'react'

type Props = {
	params: {
		id: number
	}
}

const getPost = async (id: number) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	)
	return data
}

const PagePage = async ({ params: { id } }: Props) => {
	console.log(id)
	const post = await getPost(id)
	return (
		<div>
			{
				<li key={post.id}>
					<p>{post.title}</p>
					<p>{post.body}</p>
				</li>
			}
		</div>
	)
}

export default PagePage
