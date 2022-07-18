import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll";



function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ""
    //     }
    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=> response.json())
    //     .then(users =>this.setState({robots: users}));
    // }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> response.json())
            .then(users =>setRobots(users), []);
    })

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        
    }

   
    const filteredRobot = () => {return searchfield.toLocaleLowerCase();
    }

    return (
        <div className="tc">
        <h1 className="f1">Robo Buddys</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <CardList filteredRobots={filteredRobot()}/>
        </Scroll>
        </div>
    );

}

export default App;