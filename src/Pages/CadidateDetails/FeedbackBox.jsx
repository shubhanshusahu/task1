import React from 'react'

const FeedbackBox = ({basis,count,totalFeedbackCount}) => {
  return (
    <div className='FeedbackBox'>
        <div className='feedbackBasis'>
            {basis}
        </div>
        <div className='feedbackcCount'>
            {count}/{totalFeedbackCount }
        </div>
    </div>
  )
}

export default FeedbackBox