import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__image">
                <img src="https://i.imgur.com/1Q9Q9Q1.jpg" alt="profile" />
            </div>
            <div className="profile__info">
                <h1>Trent Raeburn</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    I am a full stack developer with a background in
                    customer service. I have a passion for learning and
                    problem solving. I am a quick learner and I am always
                    looking for new challenges.
                </p>
                <div className="profile__info__links">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
