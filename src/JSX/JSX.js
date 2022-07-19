// React 组件由大写子母开头
const JSXDemo = () => {
  const name = "React";
  return (
    <h1
      className="title"
      style={{
        color: "blue",
        fontSize: "50px",
      }}
    >
      Hello {name}
    </h1>
  );
};

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
