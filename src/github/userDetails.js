import React, {useEffect, useState} from 'react'
import {Image} from "antd";
import axios from "axios";
import Timer from "./Timer";

const UserDetails = (props) => {
    const [selectedUser, setSelectedUser] = useState(null)
    const [seconds, setSeconds] = useState(20)

    useEffect(() => {
        if(props.selectedUserName !== ''){
            axios.get(`https://api.github.com/users/${props.selectedUserName}`, {
                headers: {
                    'Authorization': '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'
                }
            }).then(res => {
                setSeconds(20)
                setSelectedUser(res.data)
            })
        }
    },[props.selectedUserName])

    useEffect(() => {
        if(seconds<1){
            setSelectedUser(null)
        }
    }, [seconds])

    return (
        <div className='userDetails'>
            {
                selectedUser &&
                <>
                    <div>
                        <Image
                            width={200}
                            className='userImg'
                            src={selectedUser?.avatar_url}
                        />
                        <div className='userDetails-info'>
                            <p><b>Name: </b> {selectedUser?.name}</p>
                            <p><b>Bio: </b> {selectedUser && selectedUser.bio ? selectedUser.bio : 'No bio'}</p>
                            <p><b>Location: </b> {selectedUser && selectedUser.location ? selectedUser.location : '---'}</p>
                            <p><b>Url: </b> {selectedUser?.url}</p>
                            <p><b>Folowers: </b> {selectedUser?.followers}</p>
                            <p><b>Following: </b> {selectedUser?.following}</p>
                        </div>
                    </div>
                    <div>
                        <Timer seconds={seconds} onChange={setSeconds} timerKey={selectedUser.id}/>
                    </div>
                </>
            }
        </div>
    )
}

export default UserDetails
