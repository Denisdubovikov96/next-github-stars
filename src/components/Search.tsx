import { TextInput, ActionIcon } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

function SearchBar() {
    const { push } = useRouter()


    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            push(`/?search=${e.currentTarget.search.value}`, undefined)
        }}>
            <TextInput
                name='search'
                radius="xl"
                size="md"
                rightSection={
                    <ActionIcon type='submit'
                        size={32}
                        radius="xl"
                        variant="filled"
                    >
                        <span>S</span>
                    </ActionIcon>
                }
                placeholder="Search"
                rightSectionWidth={42}
            />
        </form>
    );
}

export default SearchBar