import { BsGrid3X3 } from "react-icons/bs";

import { MdOutlinePermContactCalendar } from "react-icons/md";

export const Contentswitcher = () => {
  return (
    <div id="contentswitchermain">
      <div className="contentswitcher">
        <div>
          <BsGrid3X3 fontSize={"12px"} color="grey" />
          <p>POSTS</p>
        </div>
        <div>
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="14"
            role="img"
            viewBox="0 0 24 24"
            width="14"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
          <p>SAVED</p>
        </div>

        <div>
          <MdOutlinePermContactCalendar color="grey" fontSize={"14px"} />
          <p>TAGGED</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
