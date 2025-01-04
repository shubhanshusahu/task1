import { Rating, Typography } from '@mui/material'
import React from 'react'
import RatingInProgress from './RatingInProgress'

const defaultRating = {
    finalScore: 0,
    skills: 0,
    culturalFit: 0,
    propblemSolving: 0,
    communication: 0
}

const Ratings = ({ userRatings = defaultRating }) => {
    return (
        <div className=' rating  m-3  mt-4'>

            <div className='headtext text-sm m-3 w-100'>Overall Ratings</div>

            <div className='ratingrow p-2 pb-1' >
                <div className='totalCount'>
                    {userRatings.finalScore}/5
                </div>
                <Rating name="read-only" value={userRatings.finalScore} readOnly />
                <div className='text-sm opacity-50'>{userRatings.finalScore >=3 ?'Good' : 'Poor'}</div>
            </div>
            <div className='text-xs opacity-50 ml-2'>Based on all the categories</div>
            <div className='mt-3'>
                <RatingInProgress/>
            </div>
        </div>
    )
}

export default Ratings