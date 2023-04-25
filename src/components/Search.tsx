import React from 'react'
import styles from '#components/styles/Home.module.css'
import { useRouter } from 'next/router'


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