import React from '../../node_modules/react';
import '../style/style.css';

const Select = (props) => {
    
    const handleChange = (event) => {
        props.getCurrState(event.target.value)
    }
    let value;
    return (
        <div style={{display:'flex',alignItems:'center', padding:'5px', marginLeft: '5%'}}>
            <h5 style={{padding:'5px', paddingLeft:'60px'}}>Please select a State:</h5>
            <div style={{paddingLeft: '20px'}}>
                <select className="input-select" onChange={handleChange} value={value}>
                    <option value=''></option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="ID">Idaho</option>
                    <option value="MT">Montana</option>
                    <option value="OR">Oregon</option>
                    <option value="UT">Utah</option>
                    <option value="WA">Washington</option>
                </select>
            </div>
            <div style={{paddingLeft: '30px'}}>
                <button onClick={() => props.getAllProducts()} className="forward">Get Companies</button>
            </div>
        </div>
    )
}

export default Select;