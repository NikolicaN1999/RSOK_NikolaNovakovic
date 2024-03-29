import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { acceptRequest, deleteRequest } from "../../functions/user";

export default function Card({ userr, type, getData }) {
  const { user } = useSelector((state) => ({ ...state }));
  //funkcija za potvrdu prijateljstva sa korisnikom
  const confirmHandler = async(userId) => {
    const res = await acceptRequest(userId, user.token);
    if ( res == "ok") {
      getData();
    }
  };
   //funkcija za brisanje zahteva za prijateljstvo
  const deleteHandler = async(userId) => {
    const res = await deleteRequest(userId, user.token);
    if ( res == "ok") {
      getData();
    }
  };
  return (
    <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
      {type === "sent" ? (
        <button></button>
      ) : type === "request" ? (
        <>
          <button className="blue_btn"onClick={() => confirmHandler(userr._id)}>Confirm</button>
          <button className="gray_btn"onClick={() => deleteHandler(userr._id)}>Delete</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
