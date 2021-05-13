import React, { Component } from 'react'
import UserInfo from './UserInfo';
import UserItem from './UserItem';

export default class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
          users: [],
          idActive: 1,
        };

        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(id)
    {
      let idActive = id;
      this.setState({idActive})
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res=> this.setState({users:res}))
        //console.log(res)
      }
      
      render(){
          const {users, idActive} = this.state;
          return(
            <div class="container">
              <div class="row">
                <div class="col">
                  <ul className="list-group">
                    {users.map((val) => {
                      return (
                      <UserItem user={val} idShow={idActive} getInfo={this.getInfo}/>
                      );
                    })}
                  </ul>
                </div>
                <div class="col">
                  <ul class="list-group">
                  {users.map((val) => {
                     if(val.id == idActive)
                     {
                      return (
                        <UserInfo user={val}/>
                        );
                     }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
      }
}