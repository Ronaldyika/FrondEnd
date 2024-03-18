import React,{useState} from "react";

const DayOne=()=>{
    const items = {
        person:{
            name:'ronald',
            email:'buhnyuyronald@gmail.com',
            phone:'+237651211000'
        }
    }
    console.log(items.person.name)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullName] = useState('')

    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}= e.target;
        if(name === "firstName"){
            setFirstName(value);
        }else if (name === "lastName") {
            setLastName(value);
        }else if (name === "email") {
            setEmail(value)
        } else if (name === "password"){
            setPassword(value)
        } else {
            console.log('error in form')
        }
        setFullName(firstName + lastName)
    }

    const handleClick=(e)=>{
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(fullname)
    }


    return(
        <div>
            <form className="formComtainer">
                <div className="fields">
                    <label for='firstName'>First Name</label><br/>
                    <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="Enter first name" />
                </div>
                <div className="fields">
                    <label for='lastName'>Last Name</label><br/>
                    <input type="text" name='lastName' value={lastName} onChange={handleChange} placeholder="Enter last name"/>
                </div>
                <div className="fields">
                    <label for='email'>Email</label><br/>
                    <input type="email" name='email' value={email} onChange={handleChange} placeholder="Enter a valid email"/>
                </div>
                <div className="fields">
                    <label for='password'>Pasword</label><br/>
                    <input name="password" type="password" value={password} onChange={handleChange} placeholder="Enter first name"/>
                </div>

                <button className="btn" type="submit" onClick={handleClick}>Register</button>
            </form>

            <div className="userdata">
                <h3>
                    my fullname is {fullname} and my password is {password}
                </h3>
                <div className="header-information">

                </div>
            </div>
        </div>
    );
}

export default DayOne