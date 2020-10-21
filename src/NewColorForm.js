import React,{useState} from "react";
import {useHistory} from "react-router-dom";

const NewColorForm =({addColor})=>{
    const initialState = {'color':"", 'hex':""};
    const [formData,setFormData]=useState(initialState);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();    
        let {color, hex} = formData;
        let newColor={color,hex}
        addColor(newColor); //see if you can just skip to addColor(formData).. I think thatshould be alright
        history.push('/colors');
        // setFormData(initialState);
    }
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData(formData=>({...formData, [name]:value}));
    }

    return(<>
    <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="color">Color: </label>
            <input id="color" type="text" placeholder="color" name="color" value={formData.color} onChange={handleChange} />
        </div>
        <div>
    <label htmlFor="hex">HEX value: {formData.hex}</label> <br />
            <input id="hex" type="color" name="hex" value={formData.hex} onChange={handleChange} />
        </div>
        <button>Add Color!</button>
    </form>
    </>)
}
export default NewColorForm;