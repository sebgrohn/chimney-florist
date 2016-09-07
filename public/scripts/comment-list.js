class CommentList extends React.Component {
  render() {
    const commentNodes = this.props.comments.map(comment => (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    ));
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
}
