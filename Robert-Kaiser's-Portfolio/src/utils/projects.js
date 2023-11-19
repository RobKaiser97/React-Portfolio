import WorkoutPlanner from "../assets/workout-planner.jpg";
import RecipeBlog from "../assets/recipe-blog.jpg";
import WeatherSite from "../assets/weather-site.jpg";
import PWATextEditor from "../assets/PWA-Text-Editor.png";
import TechBlog from "../assets/tech-blog.jpg";
import NoteTaker from "../assets/Note-Taker.jpg";

const projects = [
  {
    title: "Workout Planner",
    description: "An easy way to generate your next workout. Perfect for beginners as each workout also includes video tutorials.",
    image: WorkoutPlanner,
    link: "https://jp0st.github.io/Exercise-Planner-App/",
    gitRepo: "https://github.com/Jp0st/Exercise-Planner-App",
  },
  {
    title: "Now We're Cookin'",
    description: "A collaborative project created with the shared passion for culinary delights. Our recipe blog is dedicated to bringing together a community of food enthusiasts, home chefs, and culinary lovers to share, discover, and celebrate the joy of cooking and baking.",
    image: RecipeBlog,
    link: "https://nowwerecooking-494c285649f9.herokuapp.com",
    gitRepo: "https://github.com/RobKaiser97/Recipe-Blog",
  },
  {
    title: "Interactive Weather Dashboard",
    description: "An interactive, responsive web page to gather weather forecasts based on searched locations.",
    image: WeatherSite,
    link: "https://robkaiser97.github.io/Interactive-WeatherApp/",
    gitRepo: "https://github.com/RobKaiser97/Interactive-WeatherApp",
  },
  {
    title: "PWA Text Editor",
    description: "A web based text editor designed to write and edit code. Can also be downloaded for offline use.",
    image: PWATextEditor,
    link: "https://stark-cove-56979-85bf1d6dfc1e.herokuapp.com/",
    gitRepo: "https://github.com/RobKaiser97/Progressive-Web-Text-Editor",
  },
  {
    title: "Tech Blog",
    description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    image: TechBlog,
    link: "https://internet-blog-236549cf8317.herokuapp.com/",
    gitRepo: "https://github.com/RobKaiser97/Internet-Blog",
  },
  {
    title: "Note Taker",
    description: "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
    image: NoteTaker,
    link: "https://calm-crag-09633-c9d9fd03b482.herokuapp.com/",
    gitRepo: "https://github.com/RobKaiser97/Note_Taking_App",
  }
]

export default projects;