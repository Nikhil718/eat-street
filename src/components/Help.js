import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setIsInvisible,
}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="font-bold">{title}</h2>

      {isVisible ? (
        <div>
          <p>{description}</p>
          <button className="underline" onClick={() => setIsInvisible()}>
            Hide
          </button>
        </div>
      ) : (
        <div>
          <button className="underline" onClick={() => setIsVisible()}>
            Show
          </button>
        </div>
      )}
    </div>
  );
};

const Help = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div>
      <h1 className="text-2xl p-2 font-bold">Help</h1>
      <Section
        title={"What is react router?"}
        description={
          "Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications."
        }
        isVisible={activeSection == "router"}
        setIsVisible={() => {
          setActiveSection("router");
        }}
        setIsInvisible={() => {
          setActiveSection("");
        }}
      />
      <Section
        title={"What is react fragment?"}
        description={
          "React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element"
        }
        isVisible={activeSection == "fragment"}
        setIsVisible={() => {
          setActiveSection("fragment");
        }}
        setIsInvisible={() => {
          setActiveSection("");
        }}
      />
      <Section
        title={"What is react DOM?"}
        description={
          "What is ReactDOM? ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the following methods and a few more."
        }
        isVisible={activeSection == "DOM"}
        setIsVisible={() => {
          setActiveSection("DOM");
        }}
        setIsInvisible={() => {
          setActiveSection("");
        }}
      />
    </div>
  );
};
export default Help;
