import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Logout = () => {
  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <button type="button" onClick={logoutHandler}>Logout</button>
  );
};

export default Logout;