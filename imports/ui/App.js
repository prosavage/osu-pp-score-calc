import React from "react";
import InputForm from "./InputForm";
import TitleBar from "./TitleBar";



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <React.Fragment>
                <TitleBar title="ProSavage's osu! Score Calculator"/>
                <div className="wrapper">
                    <InputForm/>
                    <br/>
                    <br/>
                    <br/>
                    <p id="result">Please Copy Your Data from the legacy osu! website, and then paste it in here, then press Submit.</p>
                </div>
            </React.Fragment>

        )
    }
}