'use client'
import { usePosts } from '@/shared/store'
import React, { ChangeEvent } from 'react'

const SearchUser: React.FC = () => {
	const { searchValue, setSearchValue } = usePosts(state => state)
	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	return (
		<div>
			<input
			onChange={(e) => changeValue(e)}
				value={searchValue}
				type='search'
				placeholder='Найти пользователя...'
			/>
		</div>
	)
}

export default SearchUser
