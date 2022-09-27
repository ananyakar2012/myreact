import React from 'react';
import tickimg from './tick.jpg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todo_submit: '',
      is_checked: false
    };
  }
    
    myChangeHandler = (event) => {
      let name = event.target.name;
      let val = event.target.value;
     
      if (name === 'chk_tick') {
        let checked = this.state.is_checked
        if (checked === false) {
          this.setState({is_checked: true});
        } else {
          this.setState({is_checked: false});
        }
      }
      let err = '';
      if (val === "") {
        err = <strong>Task cannot be blank</strong>;
      }
      this.setState({errormessage: err});
      this.setState({ [name]: val });
      
      console.log(this.state)
    }
    myClickHandler = (event) => {
      this.setState({is_checked: false});
      let buttonName = event.target.name;
      //this.setState({is_checked: true});
      
      this.setState({[buttonName]: this.state.task});
      
    }
    render() {
      let checkbox
      let tick 
      if (this.state.todo_submit !== '') {
        checkbox = <input type='checkbox'  name='chk_tick' id='chk_tick' onChange={this.myChangeHandler}></input>
      }
      if (this.state.is_checked === true) {
        checkbox = ''
        tick = <img height="20" width="20" src={tickimg} alt='tick' />
      }
      return (
      <form name="taskform">
        <h1>To Do list </h1>
        <p>Input your task:</p>
        <p>
          {checkbox}
          {tick}
          {this.state.todo_submit}</p>
        <input
        type='text' //form type
        name='task'
        onChange={this.myChangeHandler}
        />
        <input type="button" name="todo_submit" value="Submit" onClick={this.myClickHandler} />
        {this.state.errormessage}
      </form>
      );
    }
      
}
export default Form

