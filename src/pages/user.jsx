import UserContext from "../contexts/user.context";

export const User = () => {
  return (
    <UserContext.Consumer>
      {(storedValue) => (
        <div>
          <h2> User Page </h2>
          <label> change username : </label>
          <input
            type="text"
            onChange={(e) => storedValue.setUsername(e.target.value)}
          />
          <p> Current username is : {storedValue.username} </p>
        </div>
      )}
    </UserContext.Consumer>
  );
};

// export const User = ({ username, setUsername }) => {
//   const handleOnChange = (e) => {
//     setUsername(e.target.value);
//   };
//   return (
//     <div>
//       <h2> User Page </h2>
//       <label> change username : </label>
//       <input type="text" value={username} onChange={handleOnChange} />
//       <p> Current username is : {username} </p>
//     </div>
//   );
// };
