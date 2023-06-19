import { Image } from "react-bootstrap"

export default function Panel ( {name} ) {

  return (
    <Image fluid
    src={`icons/${name}.svg`}
    className="skills-icons"
    style={{display: "inline-block", width: "160px"}}
    />
  );
}