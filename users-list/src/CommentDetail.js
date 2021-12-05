import React from 'react';

class CommentDetail extends React.Component {
     constructor(props) {
    	super(props)
    	  this.state = {
            items:[],
            loading:false
    	}
    }

    componentDidMount(){
    	fetch("https://randomuser.me/api/")
    	.then((response) => response.json())
    	.then((response) => {
    		this.setState({
    			items:response.results,
    			loading:true
    		})
    	})
    }

	render() {

		var{ items,loading} = this.state

		if (!loading){
			return (
				<div> Loading... </div>
		  );
		}

		else{
			return (
	    <div className="comment">
		    {items.map(item => (
		    	<img src= {item.picture.medium} alt={item.name.first}/>
		     ))}

		    <div className="content">
		        {this.props.author}
		        </div>

		         <div className="text"> {this.props.status} 
		      </div>
		      

		      <div className="metadata">
		        <span className="date"> {this.props.timeAgo} </span>
		      </div>

		</div>      	
	  );
    }
  }
}


export default CommentDetail;