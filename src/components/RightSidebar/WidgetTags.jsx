import React from 'react'

const WidgetTags = () => {
    const tags = ['c','html','css','js','react','express','mongodb','node','angular','firebase','java']
  return (
    <div className='widget-tags'>
        <h4>Watch tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>

    </div>
  )
}

export default WidgetTags