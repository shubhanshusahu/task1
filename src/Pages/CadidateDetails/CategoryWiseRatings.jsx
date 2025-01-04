import { Button } from '@mui/material'
import React from 'react'
import StarRating from './StarRating'
import UserwiseRating from './UserwiseRating'

const CategoryWiseRatings = () => {
    return (
        <div className=' rating  m-3 mt-4 p-2'>
            <div className='flex justify-between mb-3'>
            <div className='headtext text-sm '>Categories Wise Ratings</div>
            {/* <Button variant='contained' sx={{backgroundColor:'#FFA42C'}} size='small' style={{ textTransform: 'capitalize', fontSize:'small' }}>Edit</Button> */}
            </div>

                <UserwiseRating username={'Smit Panchal'}/>
                <UserwiseRating username={'Devarsh Patel'}/>
        </div>
  )
}

export default CategoryWiseRatings