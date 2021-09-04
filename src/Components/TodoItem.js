import React from "react";
import PropTypes from 'prop-types'

const styles={
    li:{
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     padding:'.5rem 1rem',
     border:'1px solid gray',
     borderRadius:'4px',
     marginBottom:'.5rem'
    },
    input:{
    marginRight:'1rem'
    }
}

function TodoItem({objectValue, index}){
    return <div>
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
                <strong>{index +1}</strong>
                &nbsp;
                {objectValue.title}
            </span>
            <button className="rm">&times;</button>
        </li>
    </div>
}
TodoItem.propTypes={
    objectValue: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default TodoItem