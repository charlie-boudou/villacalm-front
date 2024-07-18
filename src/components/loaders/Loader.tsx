import React, { useEffect, useState } from "react";

function Loader(): JSX.Element {
    const [percentage, setPercentage] = useState<number>(0);

    useEffect(() => {
        if (percentage < 100) {
            const interval = setInterval(() => {
                setPercentage((prevPercentage) => {
                    if (prevPercentage < 100) {
                        return prevPercentage + 1;
                    } else {
                        clearInterval(interval);
                        return prevPercentage;
                    }
                });
            }, 50);

            return () => clearInterval(interval);
        }
    }, [percentage]);

    return (
        <div 
            className="w-full h-screen absolute flex flex-col justify-between p-[2rem] bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(vue.jpg)'}}
        >
            <img src="logo-white-villa-calm.png" alt="logo" className="w-[10%]"/>
            <div className="text-center w-full">
                <p className="text-gold darlene text-[6rem]">{percentage} %</p>
            </div>
            <div />
        </div>
    );
}

export default Loader;
