import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState([]);

    const updateCount = () => {
        setCount(count + 1);
        setNumbers(numbers.concat(count));
    };

    return (
        <div className="container">
            <h1>app works! {count}</h1>
            <button onClick={updateCount}>count!</button>
        </div>
    )
}

export { App };