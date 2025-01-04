import React from 'react'
import { ratingBasis } from './RatingInProgress'
import StarRating from './StarRating'

const UserwiseRating = ({ username = "" }) => {
    return (
        <div className='Userwiserating '>
            <div className=' text-sm ml-0 mb-3 opacity-40'>
                {username}’s Ratings
            </div>
            <div className='starratinguserwise'>
                {
                    ratingBasis.map(r => <StarRating title={r.title} score={r.score} />)
                }
            </div>

        </div>
    )
}

export default UserwiseRating