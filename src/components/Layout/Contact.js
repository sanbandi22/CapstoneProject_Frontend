import React from "react";

const Contact = () =>{
    return(
        <>
        <div class="container">
        <div style={{textAlign:'center'}}>
            <h2 style={{background:'#55c2da',color:'white'}}>Contact Us</h2>
        </div>
        <div class="row">
            <div class="column">
                <p style={{textAlign:"left"}}><strong>Phone Number: </strong>9407096992</p>
                <p style={{textAlign:"left"}}><strong>Email Us At: </strong>ABCHealthcare@something.in</p>
                <p style={{textAlign:"left"}}><strong>Follow Us On: </strong>
                    <button type="button" class="btn" style={{backgroundColor:"#4681f4",color:"white"}}>FaceBook  </button>
                    <button type="button" class="btn" style={{backgroundColor:"#5783db",color:"white"}}>Instagram  </button>
                </p>
            </div>
            <div class="column">
                <form action="#">
                    <label for="fname">Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Enter Your Full Name"/>
                    <label for="email">Email Address</label>
                    <input type="text" id="email" name="emailid" placeholder="Enter Your Email Address"/>
                    <label for="place">City</label>
                    <select id="place" name="place">
                        <option value="select">Select Your City</option>
                        <option value="hyderabad">Indore</option>
                        <option value="chennai">Pune</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="banglore">Banglore</option>
                        <option value="delhi">Delhi</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label for="subject">Textbox</label>
                    <textarea id="subject" name="subject" placeholder="What would you like to know?"
                        style={{height:70+'px'}}></textarea>
                        <br></br>
                        <br></br>
                    <input type="submit" value="Submit" style={{backgroundColor:"black",color:"white"}}/>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Contact;