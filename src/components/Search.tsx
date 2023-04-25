import React from 'react'
import { useGitSearch } from '#components/hooks/useGitSearch'

import styles from '#components/styles/Home.module.css'


const SearchBar: React.FC<{ onSearch: (search: string) => void }> = ({ onSearch }) => {
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            onSearch(e.currentTarget.search.value)
        }}>
            <div className={styles.searchBar}>
                <input defaultValue={''} className={styles.input} type="text" name='search' />
                <button type='submit' className={styles.btn} >
                    search
                </button>
            </div>
        </form>
    )
}

export default SearchBar