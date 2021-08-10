import React from "react";

const ListIndexItem = props => (
    <li>
        {props.list.title}
        {/* eventually add a list of the trails in the list */}
        {/* click on the list title modal is shown with trails on list with delete buttons */}
    </li>
)

export default ListIndexItem;