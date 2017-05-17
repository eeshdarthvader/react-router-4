/**
 * Gist.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
export default ({ gist }) => (
    <div>
        <h1>{gist.name || '[no description]'}</h1>
    </div>
);
*/



class Gist extends React.Component {
	
	
	constructor(props,context){
		super(props,context);
		
		this.state = {players:null};
		
		
		
	}
	
	
	componentDidMount(){
		
		var url=`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`;
		
		console.log("componentdidmount"+url);
		
		fetch(`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`)
			.then(response => response.json())
			.then(result => this.setState({players:result.players.players}))
	
			
		
	}
	
	
	
	componentDidUpdate(prevProps, prevState){
		
		if (prevProps.gist !== this.props.gist) {
		
			var url=`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`;
		
			console.log("componentdidupdate"+url);
		
			fetch(`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`)
				.then(response => response.json())
				.then(result => this.setState({players:result.players.players}))
		}
		
		
	}
	
	createPlayer(player,index){
		
		return(
			<tr key={index}>
 				<td >{player.name}</td>
 				<td >{player.position}</td>
 				<td >{player.nationality}</td>
 			</tr>
		);
	}
	
	render(){
		console.log(this.props);
		return(
			<div>
		        <h2 >{this.props.gist.name}</h2>
		        
		        <table className="table">
				    <thead>
				      <tr>
				        <th>Player Name</th>
				        <th>Position</th>
				        <th>Nationality</th>
				      </tr>
				    </thead>
				    <tbody>
				      
				        {this.state.players?this.state.players.map(this.createPlayer):"Loading..."}
				         
				     </tbody>
				  </table>
		    </div>
			
		);
		
	}
	
	
}




/*
function Gist({gist})
{
	console.log({gist});
		
	return(
			<div>
		        <h1>{gist.name || '[no description]'}</h1>
		    </div>
			
		);
	
}
*/



export default Gist;