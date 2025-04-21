import axios from 'axios'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type PostType = {
	title: string
	body: string
}

interface NavagationState {
	activeNav: number
	setActiveNav: (value: number) => void
}

interface UsersState {
	posts: []
	post: PostType | null
	searchValue: string
	getAllPosts: (searchValue: string) => void
	getPost: (id: number) => void
	setSearchValue: (value: string) => void
}

export const useNavigation = create<NavagationState>()(set => ({
	activeNav: 0,
	setActiveNav: value => set({ activeNav: value }),
}))

export const usePosts = create<UsersState>()(
	devtools(set => ({
		posts: [],
		post: [],
		searchValue: '',
		getAllPosts: async searchValue => {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?q=${searchValue}`
			)
			try {
				set({ posts: data })
			} catch {
				set({ posts: [] })
			}
		},
		setSearchValue: value => set({ searchValue: value }),
		getPost: async id => {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			)
			try {
				set({ post: data })
			} catch {
				set({ post: null })
			}
		},
	}))
)
