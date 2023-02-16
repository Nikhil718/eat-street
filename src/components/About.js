import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

// const AboutUs1 = () => {
//   return (
//     <div>
//       <h2>This is About Us page</h2>
//       <Profile name={"Nikhil"} />
//     </div>
//   );
// };
// export default AboutUs;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }

  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }

  render() {
    console.log("Parent-Render");
    return (
      <div>
        <h2>This is About Us page</h2>
        <Profile name={"Child 1"} />
      </div>
    );
  }
}
export default AboutUs;
