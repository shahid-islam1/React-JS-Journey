import { useState } from "react"

function RadioBtn() {
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("hasilpur") 

    return (
        <div>
            <h3>Handle Radio Button</h3>
            <h4>Select Gender</h4>
            
            <div className="radio-group">
                <input 
                    type="radio" 
                    name="gender" 
                    onChange={(e) => setGender(e.target.value)} 
                    checked={gender === 'male'} 
                    value="male" 
                    id="male"
                />
                <label htmlFor="male">Male</label>

                <input 
                    type="radio" 
                    name="gender" 
                    onChange={(e) => setGender(e.target.value)} 
                    checked={gender === 'female'} 
                    value="female" 
                    id="female"
                />
                <label htmlFor="female">Female</label>
            </div>
            
            <h4>Selected Gender: {gender}</h4>

            <h4>Select City</h4>
            <select 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                id="citySelect"
                name="city"
            >
                <option value="hasilpur">Hasilpur</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
            </select>

            <h4>Selected City: {city}</h4>
        </div>
    )
}

export default RadioBtn