import React from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";

class App extends React.Component {

render(){
    let style ={
        div:{
            textAlign:'center'
        }
    }
    return (
        <div style={style.div} className="wrapper" >
            < Header allProps={this.props.allProps} title={this.props.title}/>
            < Main />
            < Footer />
        </div>
    )
}

}

export default App;
