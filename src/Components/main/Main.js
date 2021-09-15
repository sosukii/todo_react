import React from "react";
let styles={
    div:{
        width:'200px',
        height:'60px',
        textAlign:'center'
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show:'show',
            surname:'',
            name:'',
            patronymic:'',
            userAge:'',
            phone:''
        }
    }
    showNavigation = () =>{
        if (this.state.show ==='show'){
            this.setState({show:'hide'})
        } else {
            this.setState({show:'show'})
        }
    }
    HiOrDye = (e) =>{
        console.log(`имя элемента: ${e.target.name}, стейт теперь: ${e.target.value}`)
        this.setState({[e.target.name]: e.target.value})
    }
    SubmitForm = (e) =>{
        e.preventDefault()
        let obj = {
            Surname:this.state.surname,
            Name:this.state.name,
            Patronymic:this.state.patronymic,
            Age:this.state.userAge,
            Phone:this.state.phone
        }
        console.log(JSON.stringify(obj))
        console.log(JSON.parse(JSON.stringify(obj)))

        // здесь можно сделать любую валидацию
    }

    render(){
        return (
            <div>
                <div><h1>Main</h1></div>
                <button type="button" onClick={this.showNavigation}>show / hide </button>
                <div>{this.state.show}</div>
<br/>
                <form onSubmit={this.SubmitForm}>
                    <div >
                        <div>фамилия</div>
                        <input placeholder={'фамилия'} style={{width:150}} onChange={this.HiOrDye} name="surname"/>
                    </div>
                    <div >
                        <div >имя</div>
                        <input placeholder={'имя'} style={{width:150}} onChange={this.HiOrDye} name="name"/>
                    </div>
                    <div >
                        <div>отчество</div>
                        <input placeholder={'отчество'} style={{width:150}} onChange={this.HiOrDye} name="patronymic"/>
                    </div>
                    <div >
                        <div>возраст</div>
                        <input placeholder={'полных лет'} style={{width:150}} onChange={this.HiOrDye} name="userAge" type="number"/>
                    </div>
                    <div >
                        <div>телефон</div>
                        <input placeholder={'тел.'} style={{width:150}} onChange={this.HiOrDye} name="phone" type="number"/>
                    </div>
                    <div className="button">
                    <input type="submit"/>
                    </div>
                </form>
            </div>
                )
    }
}
export default Main