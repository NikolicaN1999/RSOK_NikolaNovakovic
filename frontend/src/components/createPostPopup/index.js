import { useEffect, useRef, useState } from "react";
import "./style.css";
import Picker from "emoji-picker-react";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import AddToYourPost from "./AddToYourPost";
export default function CreatePostPopup({ user }) {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [picker, setPicker] = useState(false);
  const textRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };
  console.log(text);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrev && (
          <>
          <div className="flex_center">
            <textarea
              ref={textRef}
              maxLength="100"
              value={text}
              placeholder={`What's on your mind, ${user.first_name}`}
              className="post_input"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <EmojiPickerBackgrounds
              text={text}
              textRef={textRef}
              setText={setText}
            />
          </>
        )}
         <AddToYourPost />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
}
