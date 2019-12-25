import React from "react";

export default function CheckBox(props) {
	return (
		<React.Fragment>
			<label key={props.id}>
      	{props.value}:
      	<input
      		type="checkbox"
      		name="favorites"
      		value={props.value}
      		checked={props.isChecked}
      		onChange={props.hanldeChange}
      	/>
      </label>
		</React.Fragment>
	)
}