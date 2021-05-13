import React,{Component} from 'react'
import '../index.css';

export default class UserItem extends Component{
    constructor(props){
        super(props);
        this.state = {};   
    }

    render(){
        const {user, idShow, getInfo} = this.props;
        const classes = [];
    
        if(idShow == user.id)
        (
            classes.push("list-group-item list-group-item-action active")
        )
        else
        (
            classes.push("list-group-item list-group-item-action")
        )
        return(
            <li className={classes} onClick={() =>getInfo(user.id)}>{user.id}) {user.name}</li>
        )
    }

}