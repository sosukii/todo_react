import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'title from state',
            subTitle:'subtitle from state',
            show:'show'
        }
    }

    render () {
        let styles = {
            a:{
                display:'inline',
                marginRight:'100px'
            },
            ul:{
                'white-space': 'pre-line'
            }
        }
        return (
            <div>
                <h1>Header</h1>
                <ul style={styles.ul}>
                    {Object.keys(this.props.allProps).map(e => {
                        return (
                            <a href={this.props.allProps[e]} style={styles.a}>
                                {e}
                            </a>
                        )
                    })}
                </ul>
            </div>
            )
    }
}

export default Header