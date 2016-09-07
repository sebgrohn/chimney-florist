class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>
        <CommentForm />
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
}
