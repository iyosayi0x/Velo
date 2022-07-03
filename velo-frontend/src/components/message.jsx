const Message=({type, Text})=>{
    return (
        <div className={`message message--${type}`}>
            {Text}
        </div>
    )
}

export default Message