import React from 'react'

const FeedbackBox = ({num, basis,count,totalFeedbackCount,showCard=true}) => {
  return (
    <div className={showCard ?'FeedbackBox' : 'FeedbackListView'}>
      {showCard ?'' : num}
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