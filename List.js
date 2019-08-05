import React from "react"
import Card from "./Card.js"
import store from "./store.js"

class List extends React.Component {
    render() {
        return(
            <section className="List">
                <header></header>
                <div className="List-cards"><Card /></div>
            </section>
        )
    }
}

export default List