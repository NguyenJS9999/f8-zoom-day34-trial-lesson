const { useState } = React;

function CounterNumber() {
	const [count, setCount] = useState(0);

	const getCount = type_btn => {
		switch (type_btn) {
			case 'decrease':
				setCount(count => count - 1);
				break;
			case 'increase':
				setCount(count => count + 1);
				break;
			case 'reset':
				setCount(0);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<span className="title">Counter App</span>

			<div className="container">
				<div
					style={{
						color: count > 0 ? 'green' : count < 0 ? 'red' : 'gray'
					}}
					className="result"
				>
					{count} là { count > 0 ? 'Dương': count < 0 ? 'Âm' : 'Bằng không'}
				</div>

				<div className="form-count">
					<button
						className="btn btn-decrease"
						onClick={() => getCount('decrease')}
					>
						decrease
					</button>
					<button
						className="btn btn-reset"
						onClick={() => getCount('reset')}
					>
						Reset
					</button>
					<button
						className="btn btn-increase"
						onClick={() => getCount('increase')}
					>
						increase
					</button>
				</div>
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterNumber />);
