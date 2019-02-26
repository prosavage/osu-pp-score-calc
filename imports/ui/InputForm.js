import React from 'react';
import Processor from "../api/Processor";



export default class InputForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        let text = document.getElementById("submit-area").value;
        Processor.doShit(text);

    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <textarea
                            id="submit-area" rows="30" cols="1000" defaultValue="Please Paste Your Text Here"/>
                        <button>Submit</button>
                    </div>

                </form>
            </div>
        )
    }


}