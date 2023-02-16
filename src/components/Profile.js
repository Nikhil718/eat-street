import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Nikhil R Naik",
        location: "Bangalore",
      },
    };
  }

  componentDidUpdate() {
    console.log("Child-componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Child-ComponentWillUnmount");
  }
  render() {
    console.log("Child-render" + this.props.name);
    return (
      <div>
        <h4>this is a profile</h4>
        <img src={this.state.userinfo.avatar_url}></img>
        <h3>Name: {this.state.userinfo.name} </h3>
        <h3>Location: {this.state.userinfo.location} </h3>
      </div>
    );
  }
}
export default Profile;
