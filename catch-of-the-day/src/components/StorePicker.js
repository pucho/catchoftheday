import React from 'react';
import { getFunName } from '../helpers.js'; 

class StorePicker extends React.Component {
	goToStore(event) {
		console.log('You changed the ulr ');
		event.preventDefault();
		//Grab text from box
		//Transition to /store/storeID
		console.log(this.storeInput);
		this.context.router.transitionTo(`/store/${this.storeInput.value}`);
	}

  render() {
    return (
    	<form  className="store-selector" onSubmit={this.goToStore.bind(this)}>
    	<h2>Please Enter A Store</h2>
    	<input type="text" required placeholder="Store Name" defaultValue={getFunName()} 
    		ref={(input) => { this.storeInput  = input }}/>
    	<button type="submit">Visit Store </button>
    	</form>

   	)
  }
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
