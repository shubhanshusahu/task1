import React from 'react'

const StepCountBox = ({ stepCount = 1 }) => {
    return (
        <div className='stepBox'>
            {stepCount}
        </div>
    )
}

export default StepCountBox