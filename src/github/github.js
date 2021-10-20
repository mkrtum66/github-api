import React, {useEffect, useState} from 'react'
import './github.scss'
import SearchComponent from "./search";
import UsersList from "./usersList";
import axios from "axios";
import UserDetails from "./userDetails";
import {Col, Row} from "antd";

const Github = () => {
    const [users, setUsers] = useState([])
    const [searchingValue, setSearchingValue] = useState('')
    const [selectedUserName, setSelectedUserName] = useState('')

    useEffect(() => {
        if(searchingValue === ''){
            axios.get(`https://api.github.com/users`, {
                headers: {
                    'Authorization': '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'
                }
            }).then(res => setUsers(res.data))
        }else{
            axios.get(`https://api.github.com/search/users?q=${searchingValue}`, {
                headers: {
                    'Authorization': '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'
                }
            }).then(res => setUsers(res.data.items))
        }
    },[searchingValue])


    return (
        <Row>
            <Col span={7}>
                <SearchComponent
                    value={searchingValue}
                    change={(val) => setSearchingValue(val)}/>
                <UsersList
                    users={users}
                    seeMore={(val) => setSelectedUserName(val)}/>
            </Col>
            <Col span={17}>
                <UserDetails selectedUserName={selectedUserName}/>
            </Col>
        </Row>
    )
}


export default Github
