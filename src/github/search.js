import React, {useEffect, useState} from 'react'
import {Button, Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const SearchComponent = (props) => {
    const [value, setValue] = useState(props.value)
    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const commands = [
        {
            command: '*',
            callback: (transcript) => setValue(transcript)
        }
    ]

    const {
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands})

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const onSearch = value => {
        props.change(value)
    };

    return (
        <div className="searchComponent">
            <Search
                placeholder="Search"
                enterButton="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size="large"
                suffix={
                    <Button shape="circle" onClick={SpeechRecognition.startListening}>
                        {suffix}
                    </Button>
                }
                onSearch={onSearch}
            />
        </div>
    )
}

export default SearchComponent
