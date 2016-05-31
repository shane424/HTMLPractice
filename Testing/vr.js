var DATA = {    
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/100/100/',
    hobbyList: ['coding', 'writing', 'skiing']
}

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Profile 
                    name={this.props.profileData.name} 
                    imgURL={this.props.profileData.imgURL}/>
                <Hobbies
                    hobbyList={this.props.profileData.hobbyList} />
            </div>
        );
    }
});

var Profile = React.createClass({
    render: function(){
        return (
            <div>              
                <h3>{this.props.name}</h3>
                <img src={this.props.imgURL} />
            </div>
        );
    }
});

var Hobbies = React.createClass({
    render: function(){
        var hobbies = this.props.hobbyList.map(function(hobby, index){
            return (<li key={index}>{hobby}</li>);
        });

        return (
        	<div>
	        	<h5>My hobbies:</h5>
	            <ul>
	            	{hobbies}
	            </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <App profileData={DATA} />, 
    document.getElementById('content')
);