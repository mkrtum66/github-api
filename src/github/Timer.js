import React, {useEffect, useState} from 'react'

const Timer = (props) => {
    const [second, setSecond] = useState(props.seconds)

    useEffect(() => {
        setSecond(props.seconds)
    }, [props.seconds])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond((prevState => prevState - 1))
        }, 1000)

        return () => clearInterval(intervalId)
    }, [props.timerKey])

    useEffect(() => {
        props.onChange(second)
        // eslint-disable-next-line
    },[second])

    return (
        <div>
            {second}
        </div>
    )
}
export default Timer
