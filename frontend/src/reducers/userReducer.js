import Cookies from "js-cookie";

export function userReducer(
  state = (() => {
    try {
      return Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    } catch (error) {
      console.error("Greška pri parsiranju kolačića 'user':", error);
      return null;
    }
  })(),

  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    case "UPDATEPICTURE":
      return { ...state, picture: action.payload };
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}
