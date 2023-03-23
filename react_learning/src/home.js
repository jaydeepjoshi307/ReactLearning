import logo from "./logo.svg";
import "./App.css";

function Home(props) {
  return(
    <div>
      <ul>
        {
          props.userData.map((list, index) => (
            <li key={index}>{list.id} | {list.name}</li>
          ))
        }
      </ul>
    </div>
  ) 
  // <div>URL LINK IS : {props.userData[0].name}</div>;
}

export default Home;
