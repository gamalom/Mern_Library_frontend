import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({name}) => {
  console.log(name) 

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20 mb-1" key = {name._id}>
    <img className="w-full" src={name.imageUrl} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name.bookName}</div>
    <p className="text-gray-700 text-base">
     Rs.{name.bookPrice}
    </p>
    <p className="text-gray-700 text-base">
     Author:{name.authorName}
    </p>
    <p className="text-gray-700 text-base">
     Rs.{name.isbnNumber}
    </p>
<button>
  <Link to={`/book/${name._id}`}>See More</Link>
</button>

  </div>

</div>
    </>
  )
}

export default Card