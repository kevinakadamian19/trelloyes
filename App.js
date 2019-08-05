import React from "react"
import Card from "./Card.js"
import List from "./List.js"
import storeData from "./store.js"

class App extends React.Component {
    render() {
        const storeNew = storeData.map(store => <List />)

        return(

        )
    }
}

export default App