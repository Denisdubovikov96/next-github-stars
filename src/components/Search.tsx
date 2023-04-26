import React from 'react'
import { useRouter } from 'next/router'
import styles from '#components/styles/Search.module.css'

const SearchBar = () => {
    const { query, push } = useRouter()

    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            push(`/?search=${e.currentTarget.search.value}`, undefined)
        }}>
            <div className={styles.searchBar}>
                <input defaultValue={query.search || ""} className={styles.input} type="text" name='search' />
                <button type='submit' className={styles.btn} >
                    search
                </button>
            </div>
        </form>
    )
}

export default SearchBar