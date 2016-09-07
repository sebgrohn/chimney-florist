const comments = [
  { id: 1, author: "Pete Hunt", text: "This is one comment" },
  { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
  { id: 3, author: "Some One", text: "More comment" },
];

ReactDOM.render(
  <CommentBox comments={comments} />,
  document.getElementById('content')
);
