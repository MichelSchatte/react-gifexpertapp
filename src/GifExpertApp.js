import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['OnePunch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['OnePunch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((cat) =>
                        <GifGrid
                            key={cat}
                            category={cat} />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;