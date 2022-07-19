// React 组件由大写字母开头
const PropsDemo = () => {
  const name = "React";
  const handleClick = () => alert("Button clicked");
  return (
    <div>
      <MyComponent name={name} />
      <MyComponent2 handleClick={handleClick} />
    </div>
  );
};

const MyComponent = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const MyComponent2 = ({ handleClick }) => {
  return <button onClick={handleClick}>Click</button>;
};

ReactDOM.render(<PropsDemo />, document.getElementById("root"));
