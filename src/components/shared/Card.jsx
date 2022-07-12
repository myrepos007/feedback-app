import PropTypes from 'prop-types'

function Card({ children, darkMode }) {
    // return (
    //     <div className={`card ${darkMode && 'reverse'}`}>{children}</div>
    // )

    return <div className='card' style={{
        backgroundColor: darkMode ? 'rgba(0,0,0,0.4)' : '#fff',
        color: darkMode ? '#fff' : ' #000',
    }}>{children}</div>
}

Card.defaultProps = {
    darkMode: false
}

Card.prototype = {
    children: PropTypes.node.isRequired,
    darkMode: PropTypes.bool
}

export default Card