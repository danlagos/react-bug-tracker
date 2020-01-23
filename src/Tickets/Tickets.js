import React from 'react';

const tickets = (props) => {
    return (
        <div>
            <h1>These are tickets</h1>
            <form>
                <label for="first name"> Name
                    <input type="text" name="first name" placeholder="First Name"/>
                    <input type="text" name="last name" placeholder="Last Name"/>
                </label>
                <br></br>
                <label for="email">Email
                    <input type="text" name="Email" placeholder="Email" />
                </label>
                <br></br>
                <label for="ticket type">Ticket Type
                    <select>
                        <option selected value="Feature Request">Feature Request</option>
                        <option value="Comment">Comment</option>
                        <option value="Bug">Bug</option>
                    </select>
                </label>
                <br></br>
                <label for="Priority">Priority
                    <select>
                        <option value="urgent">Urgent</option>
                        <option value="high">High</option>
                        <option selected value="normal">Normal</option>
                        <option value="low">low</option>
                    </select>
                </label>
                <br></br>
                <label for="screen shot">Screenshot of Issue
                    <input type="file" />
                </label>
                <br></br>
                <label>Additional Details
                    <textarea>
                    
                    </textarea>
                </label>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )
};


export default tickets