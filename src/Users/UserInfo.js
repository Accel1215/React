import React, { Component } from 'react'

export default class UserInfo extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render(){
        const {user} = this.props;

        return(
            <div class="border">
                <div class="border">
                    <h3>Profile</h3>
                    <ul>
                        <li>id: {user.id}</li>
                        <li>Name: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                    </ul>
                </div>
                <div class="border">
                    <h3>Address</h3>
                    <ul>
                        <li>street: {user.address.street}</li>
                        <li>suite: {user.address.suite}</li>
                        <li>city: {user.address.city}</li>
                        <li>zipcode: {user.address.zipcode}</li>
                        <li>geo: {user.address.geo.lat} {user.address.geo.lng}</li>
                    </ul>
                </div>
                
                <div class="border">
                    <h3>Company</h3>
                    <ul>
                        <li>Name: {user.company.name}</li>
                        <li>Catch phrase: {user.company.catchPhrase}</li>
                        <li>bs: {user.company.bs}</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}