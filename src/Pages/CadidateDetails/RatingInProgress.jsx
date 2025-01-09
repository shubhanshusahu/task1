import { Box, LinearProgress } from '@mui/material'
import React from 'react'

export const ratingBasis = [
    {
        title: 'Skills and Qualifications',
        score: 5,
        id: 'skills'
    },
    {
        title: 'Cultural Fit',
        score: 3,
        id: 'culturalFit'
    },
    {
        title: 'Problem-solving and Critical Thinking',
        score: 2,
        id: 'propblemSolving'
    },
    {
        title: 'Communication and Interpersonal Skills',
        score: 2,
        id: 'communication'
    }
]

const RatingInProgress = () => {

    
    return (
        <>
            {
                ratingBasis.map(rating =>
                    <div className='ratingProgress'>
                        <div className='ratingtitle'>{rating.title}</div>
                        <Box  sx={{ width: '100%' }}>
                            <LinearProgress className='progressbar' sx={{ minWidth: '300px', background: '#FFA42C', color: '#FFA42C', backgroundColor: '#DCDCDC' }} variant="determinate" value={rating.score * 20} />
                        </Box>
                        <div className='ratingtitle'>{rating.score}/5</div>
                    </div>)
            }
        </>
    )
}

export default RatingInProgress