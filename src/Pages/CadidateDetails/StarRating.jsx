import { Rating } from '@mui/material'
import React from 'react'

const StarRating = ({ title = "", score = 0 }) => {
    return (
        <div className='starrating'>
            <div className='text-xs opacity-90'>{title}</div>
            <div className='rantingresult'><Rating value={score} readOnly />
                <div className='text-sm opacity-90'>{score >= 3 ? 'Good+' : 'Poor+'}</div>
            </div>
        </div>
    )
}

export default StarRating