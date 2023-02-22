import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

//

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nikhil718");
    const json = await data.json();
    this.setState({ userinfo: json });
    console.log(this.state.userinfo);
  }

  render() {
    return (
      <div>
        <Profile data={this.state.userinfo} />
      </div>
    );
  }
}
export default AboutUs;
