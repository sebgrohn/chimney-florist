class Comment extends React.Component {
  render() {
    const md = new Remarkable();
    return (
      <div className="comment">
        <strong className="comment-author">{this.props.author}:</strong>&nbsp;
        <span className="comment-children" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }
}
