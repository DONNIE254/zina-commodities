import { useEffect, useState } from "react";

function AnimatedCounter({
    end,
    prefix = "",
    suffix = "",
    duration = 2000
}) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        let start = 0;
        const increment = end / 100;

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }

        }, duration / 100);

        return () => clearInterval(timer);

    }, [end, duration]);

    return (
        <>
            {prefix}
            {Number(count).toFixed(
                end % 1 !== 0 ? 1 : 0
            )}
            {suffix}
        </>
    );
}

export default AnimatedCounter;