import { Outlet, useParams } from "react-router-dom";
// import Spinach from "../components/Spinach";
// import Popeye from "../components/Popeye";
// import DefaultProfile from "../components/DefaultProfile";

const Profile = () => {
  // const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {/* <Outlet /> */}
      {/* {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )} */}
    </div>
  );
};

export default Profile;
