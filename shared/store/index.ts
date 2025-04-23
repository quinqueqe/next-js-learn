import axios from 'axios'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type PostType = {
	title: string
	body: string
	id: number
}

interface NavagationState {
	activeNav: number
	setActiveNav: (value: number) => void
}

interface PostsState {
	posts: PostType[]
	post: PostType[]
	searchValue: string
	getAllPosts: (searchValue: string) => void
	getPost: (id: number) => void
	setSearchValue: (value: string) => void
}

export const useNavigation = create<NavagationState>()(set => ({
	activeNav: 0,
	setActiveNav: value => set({ activeNav: value }),
}))

export const usePosts = create<PostsState>()(
	devtools(set => ({
		posts: [],
		post: [],
		searchValue: '',
		getAllPosts: async searchValue => {
			try {
				const { data } = await axios.get(`/api/posts?q=${searchValue}`)
				set({ posts: data })
			} catch (error) {
				set({ posts: [] })
				console.log(error)
			}
		},
		setSearchValue: value => set({ searchValue: value }),
		getPost: async id => {
			try {
				// const res = await fetch(
				// 	`https://jsonplaceholder.typicode.com/posts/${id}`
				// ).then(res => res.json())
				const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
				set({ post: data })
			} catch {
				set({ post: [] })
			}
		},
	}))
)
