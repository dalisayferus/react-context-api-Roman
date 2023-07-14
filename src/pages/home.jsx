import UserContext from "../contexts/user.context";

export const Home = () => {
  return (
    <UserContext.Consumer>
      {(storedValue) => (
        <div>
          <h2> Home Page </h2>
          <p> Hello {storedValue.username} </p>
        </div>
      )}
    </UserContext.Consumer>
  );
};
