import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = props => {
    const [categories, setCategories] = useState(['Roblox']);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} cats={categories} />
            <hr />
            <ol>
            {
                categories.map((category, i) =>
                   
                    <GifGrid
                        category={category}
                        key={category}
                    />
                )
            }
            </ol>
        </>
    )
}