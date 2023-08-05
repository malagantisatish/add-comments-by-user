// Write your code here

import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    changeTheLikeStatus,
    removeTheCommentFromTheList,
  } = props
  const {name, comment, date, isLiked, className, id} = commentDetails
  const firstLetter = name[0]
  const likeImgUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImgUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const addLike = () => {
    changeTheLikeStatus(id)
  }

  const removeLike = () => {
    changeTheLikeStatus(id)
  }
  const deleteTheComment = () => {
    removeTheCommentFromTheList(id)
  }

  return (
    <li>
      <div className="customer-details-container">
        <h1 className={`first-letter ${className}`}>{firstLetter}</h1>
        <h1 className="name">{name}</h1>
        <p className="time">less than a minute ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <button type="button" onClick={addLike} className="like-btn">
          {isLiked ? (
            <img src={likedImgUrl} className="liked-img-size" alt="like" />
          ) : (
            <img src={likeImgUrl} className="liked-img-size" alt="like" />
          )}
        </button>

        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={deleteTheComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img-size"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
