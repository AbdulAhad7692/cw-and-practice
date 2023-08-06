
function Header() {
    return (
        <div>
            <h1>
                Header
            </h1>
        </div>
    )
}

function Button() {
    return (
        <div>
            <button style={
                {
                    height: '30px',
                    width: '100px',
                    backgroundColor: '#fff',
                    fontSize: '14px',
                    border: '2px solid whitw'
                }}>Click here</button>
        </div>
    )
}


export { Header, Button}