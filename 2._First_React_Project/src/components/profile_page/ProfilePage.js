import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfilePage extends Component {
    render() {
        const razvanProfile = { name: "Razvan", hobby: "plants" };
        const miniProfile = { name: "Mini", hobby: "video games"};
        const jonathanProfile = { name: "Jonathan", hobby: "drawing"};

        const profiles = [razvanProfile, miniProfile, jonathanProfile];

        return (
          <div>
                <h1>Profile Page</h1>
                {profiles.map((profile, index) => {
                    return <Profile key={'profile' + index} profileInfo={profile} />;
                })}

            </div>
        );
    }
}