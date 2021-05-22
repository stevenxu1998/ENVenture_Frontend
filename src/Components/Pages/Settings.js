import React, {Component} from 'react';

//importing css files.....
import '../../CSS/style.css';

//trying a new react js implementation format for when javascript is required 
//the <p> tags are prone to change after filling in the forms through javascript
class Settings extends Component{
    render(){
        return(
            <section className = "Settings">
                <h3 className = "Settings__Header">Settings</h3>
                <div className= "Settings__Form">
                <p className = "Settings__Form--Text"><b>Email Options</b></p>
                <form>
                    <input type="checkbox" name = "Original Msg" id = "Original Msg"/>
                    <label for = "Original Msg" className = "Settings__Form--Text">Include Original Message in Email Replies</label><br></br>
                    <input type="checkbox" name = "Send Copy" id = "Send Copy"/>
                    <label for = "Send Copy" className = "Settings__Form--Text">Send a copy of each outgoing message to email (change email later?)</label><br></br>
                    <input type="checkbox" name = "Save Copy" id = "Save Copy"/>
                    <label for = "Save Copy" className = "Settings__Form--Text">Save a copy of each outgoing message to the sent mail folder</label><br></br>
                    <label className = "Settings__Form--Text"><b>Email Signature</b></label><br></br>
                    <textarea name="message" rows="10" cols="50"></textarea> <br></br>
                    <label for = "TimeZone" className = "Settings__Form--Text">Choose a Time Zone:</label>
                        <select id = "TimeZone" name = "TimeZone">
                            <option value = "UTC(-11)">UTC(-11)</option>
                            <option value = "UTC(-10)">UTC(-10)</option>
                            <option value = "UTC(-9)">UTC(-9)</option>
                            <option value = "UTC(-8)">UTC(-8)</option>
                            <option value = "UTC(-7)">UTC(-7)</option>
                            <option value = "UTC(-6)">UTC(-6)</option>
                            <option value = "UTC(-5)">UTC(-5)</option>
                            <option value = "UTC(-4)">UTC(-4)</option>
                            <option value = "UTC(-3)">UTC(-3)</option>
                            <option value = "UTC(-2)">UTC(-2)</option>
                            <option value = "UTC(-1)">UTC(-1)</option>
                            <option value = "UTC(0)">UTC(0)</option>
                            <option value = "UTC(+11)">UTC(+11)</option>
                            <option value = "UTC(+10)">UTC(+10)</option>
                            <option value = "UTC(+9)">UTC(+9)</option>
                            <option value = "UTC(+8)">UTC(+8)</option>
                            <option value = "UTC(+7)">UTC(+7)</option>
                            <option value = "UTC(+6)">UTC(+6)</option>
                            <option value = "UTC(+5)">UTC(+5)</option>
                            <option value = "UTC(+4)">UTC(+4)</option>
                            <option value = "UTC(+3)">UTC(+3)</option>
                            <option value = "UTC(+2)">UTC(+2)</option>
                            <option value = "UTC(+1)">UTC(+1)</option>
                        </select>
                    <p className = "Settings__Form--Text"><b>Signing In</b></p>
                    <p className = "Settings__Form--Text">Online Status</p>
                    <input type = "radio" id = "AppearOnline" name = "Status" value = "AppearOnline"/>
                    <label for = "AppearOnline" className = "Settings__Form--Text">Appear online (when I'm logged in)</label><br></br>
                    <input type = "radio" id = "AppearOffline" name = "Status" value = "AppearOffline"/>
                    <label for = "AppearOnline" className = "Settings__Form--Text">Always Appear Offline</label><br></br>
                    <p className = "Settings__Form--Text"><b>Font Settings</b></p>
                    <label for = "FontSize" className = "Settings__Form--Text">Font Size: </label>
                    <select id = "FontSize" name = "FontSize">
                        <option value = "Small">Small</option>
                        <option value = "Medium">Medium</option>
                        <option value = "Large">Large</option>
                        <option value = "Extra Large">Extra Large</option>
                    </select><br></br>
                    {/* <input type="submit" value="Submit"/> */}
                    <button className = "Settings__Form--Savebtns">Save and Close</button>
                    <button className = "Settings__Form--Savebtns">Save</button>
                    <button className = "Settings__Form--Savebtns">Close</button>
                </form>
                {/* <li>nones</li> */}
                {/* this is where the settings form goes */}
                </div>
            </section>
        )
    }
}

export default Settings;