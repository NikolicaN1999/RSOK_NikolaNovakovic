import { useRef, useState } from "react";
import MenuItem from "./MenuItem";
import useOnClickOutside from "../../helpers/clickOutside";
export default function PostMenu({
  postUserId,
  userId,
  imagesLength,
  setShowMenu,
}) {
  const [test, setTest] = useState(postUserId === userId ? true : false);
  const menu = useRef(null);
  useOnClickOutside(menu, () => setShowMenu(false));
  return (
    <ul className="post_menu" ref={menu}>
      {test && <MenuItem icon="pin_icon" title="Pin Post" />}
      <MenuItem
        icon="save_icon"
        title="Save Post"
        subtitle="Add this to your saved items."
      />
      <div className="line"></div>
      {test && <MenuItem icon="edit_icon" title="Edit Post" />}
      {imagesLength && <MenuItem icon="download_icon" title="Download" />}
      {test && (
        <MenuItem
          icon="trash_icon"
          title="Move to trash"
          subtitle="items in your trash are deleted after 30 days"
        />
      )}
      {!test && <div className="line"></div>}
      {!test && (
        <MenuItem
          img="../../../icons/report.png"
          title="Report post"
          subtitle="i'm concerned about this post"
        />
      )}
    </ul>
  );
}
