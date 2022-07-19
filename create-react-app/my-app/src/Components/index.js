import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

export default function ComponentDemo() {
  return (
    <div>
      <FunctionComponent name="FunctionComponent" />
      <ClassComponent name="ClassComponent" />
    </div>
  );
}
