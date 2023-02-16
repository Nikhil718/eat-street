import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const { status, statusText } = useRouteError();

  return (
    <div>
      <h1>Oops Page Not Found...</h1>
      <h2>{status + " " + statusText}</h2>
    </div>
  );
};
export default ErrorElement;
