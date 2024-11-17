import EDU from "../assets/category icons/Education.svg";

import ENTERTAINMENT from "../assets/category icons/Entertainment.svg";
import EXPLORE from "../assets/category icons/Explore.svg";
import GAME from "../assets/category icons/Game.svg";
import MUSIC from "../assets/category icons/Music.svg";
import STUDENT_HUB from "../assets/category icons/Student Hub.svg";
import TECH from "../assets/category icons/Tech.svg";

export const SERVER_CATEGORIES_LIST = [
  {
    serverCategory: "Home",
    serverCategoryPath: "/",
    img: EXPLORE,
  },
  {
    serverCategory: "Music",
    serverCategoryPath: "/music",
    img: MUSIC,
  },
  {
    serverCategory: "Gaming",
    serverCategoryPath: "/gaming",
    img: GAME,
  },
  {
    serverCategory: "Education",
    serverCategoryPath: "/education",
    img: EDU,
  },
  {
    serverCategory: "Science & Tech",
    serverCategoryPath: "/science-tech",
    img: TECH,
  },
  {
    serverCategory: "Entertainment",
    serverCategoryPath: "/entertainment",
    img: ENTERTAINMENT,
  },
  {
    serverCategory: "Student Hubs",
    serverCategoryPath: "/student-hubs",
    img: STUDENT_HUB,
  },
];
