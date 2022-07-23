import React, {useState, useEffect} from "react";
// import { connect } from "react-redux";
// @ts-ignore
import CardList from "../components/CardList.tsx";
// @ts-ignore
import SearchBox from "../components/SearchBox.tsx";
import "./App.css"
// @ts-ignore
import Scroll from "../components/Scroll.tsx";

// import { setSearchField } from "../actions";

// const mapStateToProps = state => {
//     return {
//         searchField: state.setRobots.searchField
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSearchChange: (event) => dispatch(setSearchField(event.target.value))
        
// }

function App(props): JSX.Element {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ""
    //     }
    // }
    const [value,] = useState("")
    const [, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=> response.json())
    //     .then(users =>this.setState({robots: users}));
    // }

    useEffect((): void => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> response.json())
            .then(users =>setRobots(users));
    }, [value])

    const onSearchChange = (event): void => {
        setSearchfield(event.target.value);  
    }

   
    const filteredRobot = (): string => {return searchfield.toLocaleLowerCase();
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