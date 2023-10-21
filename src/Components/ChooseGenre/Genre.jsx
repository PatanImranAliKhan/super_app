import React, { useState, useEffect } from 'react'
import './genre.css'
import { categoryData } from './GenreCategoryData';
import GenreCard from './GenreCard';

const Genre = () => {

    const [category, setCategory] = useState([])
    const [selectedCategoryCount, setSelectedCategoryCount] = useState(0);
    const [minAlert, setminAlert] = useState(false);

    useEffect(() => {
        setCategory(categoryData);
    }, [])

    const handleGenreOnClick = (ind) => {
        var cdata = [...category];
        if (cdata[ind].isSelected) {
            setSelectedCategoryCount((prev) => prev - 1);
        } else {
            setSelectedCategoryCount((prev) => prev + 1);
        }
        cdata[ind].isSelected = !cdata[ind].isSelected;
        setCategory(cdata);
    }

    const unSelectGenre = (ind) => {
        var cdata = [...category];
        cdata[ind].isSelected = false;
        setCategory(cdata);
    }

    const handleOnClickNextPage = () => {
        if(selectedCategoryCount<3) {
            setminAlert(true);
        } else {
            setminAlert(false);
        }
    }


    return (
        <div className='mainGenre'>
            <div className='mainSection'>
                <div className='genreSection'>
                    <div className='leftSection'>
                        <h1>Super app</h1>
                        <p className='headingText'>Choose your entertainment category</p>
                        <div className='listSelectedGenres'>
                            {/* <i className="fa-solid fa-xmark"></i> */}
                            {
                                categoryData.map((cat, i) => (
                                    <div key={i}>
                                        {
                                            cat.isSelected === true && (
                                                <div className='selectedGenre' >
                                                    <span>{cat.genre} </span>
                                                    <i className="fa-solid fa-xmark"
                                                        onClick={() => { unSelectGenre(i) }}></i>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className='minalert'>
                            {
                                minAlert === true && (
                                    <span><i className="fa-solid fa-triangle-exclamation"></i> Minimum 3 category required</span>
                                )
                            }
                        </div>
                    </div>
                    <div className='rightSection'>
                        {
                            category.map((data, i) => (
                                <GenreCard key={i} data={data}
                                    handleGenreOnClick={handleGenreOnClick} index={i} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <button className='nextpage'
                        onClick={() => { handleOnClickNextPage() }}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Genre