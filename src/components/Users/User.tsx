import React from 'react'
import styles from "./Users.module.css";
import {UserType} from "../../types/types";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/avatar_covboi.png";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow }) => {
    return <div>
        <span>
            <div>
                <NavLink to={ '/profile' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                              unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                        follow(user.id)
                        }}>
                        Follow
                    </button>}
            </div>
        </span>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>
        <span>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
        </span>
    </div>
}

export default User