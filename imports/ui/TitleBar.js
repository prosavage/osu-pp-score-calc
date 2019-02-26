import React from "react";

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return (
                <h2>{this.props.subtitle}</h2>
            );
        }
    }
    render() { return (
        <div className="title-bar">
            <div className="wrapper">
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>

        </div>
    );

    }
}



TitleBar.defaultProps = {
    // title: 'Default title'
};