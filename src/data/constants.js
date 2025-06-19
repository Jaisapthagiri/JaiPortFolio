import BasicPortfolio from '../images/BasicPortfolio.png'
import HeroAvatar from '../images/HeroImage11.jpg'
import Recipesharing from '../images/RecipeSharing.png'
import {kec} from '../components/EduImages/index'
import {kasc} from '../components/EduImages/index'
import {knmhss} from '../components/EduImages/index'


export const Bio = {
  name: "Jaisapthagiri",
  roles: [
    "Front End Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Jaisapthagiri",
  resume:
    "https://drive.google.com/file/d/1szBSvwUZ3c3W-6bN0Me3CXRND7MqKoDM/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/jaisapthagiri-j-869a25319/",
  insta: "https://www.instagram.com/i_jai06/",
  facebook:"https://www.facebook.com/profile.php?id=100035262488857"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7-3mHbPjTGlLJM47AOOE3JqeKk24csRrkQ&s",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: kec,
    school: "Kongu Engineering College - Perundurai",
    date: "Aug 2024 - Apr 2026",
    grade: "Current GPA: 8.17 (First Semester)",
    desc: "Currently Pursuing",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: kasc,
    school: "Kongu Arts and Science College - Erode",
    date: "Aug 2021 - Apr 2024",
    grade: "7.34 CGPA",
    desc: "I completed my under graduate degree from KASC, Erode, Where I studied",
    degree: "Bachelor of Science - B.Sc. Information Technology",
  },
  {
    id: 2,
    img: knmhss,
    school: " Kongu National Matriculation Higher Secondary School - Coimbatore",
    date: "Apr 2019 - Apr 2021",
    grade: "86%",
    desc: "I completed my class 10 education at Kongu National Matriculation Higher Secondary School, Erode, where I studied Commerce with Computer Application.",
    degree: "HSC(XII), Commerece with Computer",
  },
  {
    id: 3,
    img: knmhss,
    school: " Kongu National Matriculation Higher Secondary School - Coimbatore",
    date: "Apr 2018 - Apr 2019",
    grade: "72%",
    desc: "I completed my class 10 education at Kongu National Matriculation Higher Secondary School, Erode",
    degree: "SSLC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Basic Portfolio",
    description:
      "Developed a simple static personal portfolio using HTML, CSS, and JavaScript",
    image: BasicPortfolio,
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "web app",
    webapp: "https://jaisapthagiri.github.io/Portfolio/",
    member: [
      {
        name: "Jaisapthagiri",
        img: HeroAvatar,
        github: "https://jaisapthagiri.github.io/Portfolio/",
      },
    ],
  },
  {
    id: 1,
    title: "RecipeSharing",
    description:
      "RecipeSharingHub is a platform where users can explore, share, and manage their favorite recipes, making cooking and food discovery easy and enjoyable.",
    image:
      Recipesharing,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJs",
      "BootStrap",
      "MaterialUI"
   ],
    category: "RecipeSharingHub",
    member: [
      {
        name: "Jaisapthagiri",
        img: HeroAvatar,
        github: "https://github.com/Jaisapthagiri/RecipeSharingHub/tree/main/Recipesharing/",
      },
    ],
  },
];
