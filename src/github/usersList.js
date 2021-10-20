import React from 'react'
import {List, Avatar, Button} from 'antd';

const UsersList = (props) => {
    return (
        <div className='usersList'>
            <List
                itemLayout="horizontal"
                dataSource={props.users}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar_url} />}
                            title={<a href="https://ant.design">{item.type} {item.login}</a>}
                            description={item.html_url}
                        />
                        <Button onClick={() => props.seeMore(item.login)}>
                            More
                        </Button>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default UsersList
