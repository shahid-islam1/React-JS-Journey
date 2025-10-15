import { useState } from "react";

function UpdArrayState() {
    const [DataDetails, setDataDetails] = useState([
        { name: 'shahid', age: 24, city: 'hyd' },
        { name: 'sam', age: 25, city: 'ny' },
        { name: 'john', age: 26, city: 'la' }
    ]);

    const [data, setData] = useState(['shahid', 'sam', 'john', 'doe', 'rocky']);

    const handleChange = (name) => {
        if (!name) return;
        const newArr = [...data];
        newArr[newArr.length - 1] = name;
        setData(newArr);
    }
    
    const handleUpdateLastDetail = (payload) => {
        const newDetails = [...DataDetails];
        newDetails[newDetails.length - 1] = { ...newDetails[newDetails.length - 1], ...payload };
        setDataDetails(newDetails);
    }

    return (
        <div>
            <h3>Updating Arrays in State</h3>

            <input
                type="text"
                placeholder="enter last user name"
                onChange={(e) => handleChange(e.target.value)}
            />

            {data.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}

            <hr />

            {DataDetails.map((item, index) => (
                <h4 key={index}>
                    {item.name}, {item.age}, {item.city}
                </h4>
            ))}

            <input
                type="text"
                placeholder="change last student's city"
                onChange={(e) => handleUpdateLastDetail({ city: e.target.value })}
            />

            <input
                type="number"
                placeholder="change last student's age"
                onChange={(e) => handleUpdateLastDetail({ age: Number(e.target.value) })}
            />
        </div>
    );
}
export default UpdArrayState;