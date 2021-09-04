import React from "react";
import PropTypes from 'prop-types'
function TodoItem({objectValue, index}){
    return <div>
        <li>
            <span>
                <input type="checkbox"/>
            </span>
            <strong>{index +1}</strong>
            {objectValue.title}
        </li>
    </div>
}
TodoItem.propTypes={
    objectValue: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default TodoItem