// frontend/src/components/Counter.jsx
import { useEffect, useState } from "react";
import { getCounter, incrementCounter } from "../services/counterService";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getCounter().then((data) => setCount(data.count));
    }, []);

    const handleClick = async () => {
        const data = await incrementCounter();
        setCount(data.count);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Hola Mundo</h1>
            <h2>Contador: {count}</h2>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
}
