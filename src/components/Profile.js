import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Child-render" + this.props.name);
    return (
      <div>
        <h4 className="text-2xl font-semibold text-center p-2">
          This is my github profile
        </h4>
        <div className="flex justify-center">
          <div className="flex w-[460px] font-semibold  h-64 p-8 m-3 border-2 border-inherit hover:shadow-2xl rounded-sm">
            <img
              className="rounded-full p-2"
              src={this.props.data.avatar_url}
            ></img>
            <div className="m-1">
              <h3>Name: {this.props.data.name} </h3>
              <h3>Location: {this.props.data.location} </h3>
              <h3>Public repos: {this.props.data.public_repos}</h3>
              <h3>Followers: {this.props.data.followers} </h3>
              <h3>Following: {this.props.data.following} </h3>
              <a href={this.props.data.html_url}>
                <span className=" flex m-2 justify-center bg-blue-500 p-1 rounded text-white hover:bg-cyan-500">
                  Visit
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
