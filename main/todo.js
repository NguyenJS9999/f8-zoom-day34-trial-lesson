const { useState } = React;

function TodoApp() {
	const [todo, setTodo] = useState(0);

	const gettodo = (type_btn) => {

	};

	return (
		<>
			<span className="title">Todos App</span>

			<div className="container">
				<div
					className=""
				>
				</div>

				<div className="form-todo">

				</div>
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<TodoApp />);
