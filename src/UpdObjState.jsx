import { useState } from "react"

function UpdObjState() {
    const [data, setData] = useState({
        name: 'shahid',
        address: {
            city: 'hyd',
            country: 'pakistan'
        }
    })

    const handleName = (name) => {
        data.name = name

        setData({ ...data })


    }

    const handleCity = (city) => {
        data.address.city = city
        setData({ ...data, address: { ...data.address } })

    }

    const handleCountry = (country) => {
        data.address.country = country
        setData({ ...data, address: { ...data.address } })

    }

    return (
        <div>
            <h2>
                Updating Objects in State
            </h2>
            <input type="text"
                placeholder="Update name"
                onChange={(e) => handleName(e.target.value)} />

            <h3>Name:{data.name}</h3>

            <input type="text"
                placeholder="Update city"
                onChange={(e) => handleCity(e.target.value)} />

            <h3>City:{data.address.city}</h3>

            <input type="text"
                placeholder="Update country"
                onChange={(e) => handleCountry(e.target.value)} />
                
            <h3>Country:{data.address.country}</h3>

        </div>
    )
}

export default UpdObjState;