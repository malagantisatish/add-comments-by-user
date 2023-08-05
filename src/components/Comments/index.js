import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, commentsList} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]

    console.log(initialBackgroundColorClassName)

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      className: initialBackgroundColorClassName,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))

    this.setState({name: '', comment: '', count: commentsList.length + 1})
  }

  changeTheLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  setInputElements = () => {}

  removeTheCommentFromTheList = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachItem => eachItem.id !== id)

    this.setState({commentsList: filteredList, count: filteredList.length})
  }

  render() {
    const {name, comment, commentsList, count} = this.state

    return (
      <div className="bg-container">
        <div className="comment-section">
          <div className="your-comment-section">
            <h1 className="comment-heading">Comments</h1>
            <p className="your-comment">Say something about 4.0 Technologies</p>
            <form id="myComment" onSubmit={this.addComment}>
              <input
                onChange={this.getName}
                className="your-name-input-element"
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <br />
              <textarea
                className="your-comment-input-element"
                rows={10}
                cols={50}
                placeholder="Your Comment"
                onChange={this.getComment}
                value={comment}
              />
              <br />
              <button
                onClick={this.setInputElements}
                className="add-comment-btn"
                type="submit"
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image-size"
          />
        </div>
        <hr />
        <span className="comments-count">{count}</span>
        <h1 className="comments-heading">Comments</h1>
        <ul className="comments-container">
          {commentsList.map(eachComment => (
            <CommentItem
              changeTheLikeStatus={this.changeTheLikeStatus}
              removeTheCommentFromTheList={this.removeTheCommentFromTheList}
              key={eachComment.id}
              commentDetails={eachComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
