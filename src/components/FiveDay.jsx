import React from "react";
import Day from "./Day";

const FiveDay = ({ daily }) => {
    daily.splice(5);
    console.log(daily);
    return (
        <section className="container row justify-content-center">
            {daily.map((day, index) => (
                <Day key={index} day={day} />
            ))}
        </section>
    );
};

export default FiveDay;
