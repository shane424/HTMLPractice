var hello = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<hl>Comments</hl>
			</div>
		)
	}
})

ReactDOM.render(
	<hello />,
	document.getElementById('content')
);