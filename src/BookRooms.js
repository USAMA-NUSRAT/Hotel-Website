import './BookRooms.css';
import React from 'react';
import Menubar from './Menubar';
class BookRooms  extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      
      RoomStatus : "Booked"
      };
    
    }

  

 
  render() {
    return (
      <div className='fform'>
   <Menubar/>
<h1>Fill the form to book yourn room</h1>
<form name='main' method="post" action='data.php'>
            <table className='op'>
            

              <tbody>
           <tr className='App'>
             <td>
             <p>
               First Name:
             </p>
             <input type="text" id=""/>
             </td>
             <td>
             <p>
               Last Name:
             </p>
             <input type="text" id="name"/>
             </td>
           </tr>
           
           <tr className='App'> 
             <td>
             <p>
               Address:
             </p>
             <textarea name="address" cols="20" rows="3"></textarea>
             </td>
             </tr>

             <tr className='App'>
             <td>
             <p>
               City:
             </p>
             <input type="text" id=""/>
             </td>
             <td>
             <p>
               State:
             </p>
             <input type="text" id="name"/>
             </td>
           </tr>

           <tr className='App'>
             <td>
             <p>
               Phone:
             </p>
             <input type="number" id=""/>
             </td>
             <td>
             <p>
               Email:
             </p>
             <input type="email" id=""/>
             </td>
           </tr>

           <tr className='App'>
             <td>
             <p>
              Available Room Id:
             </p>
             <select name='lai'>
               <option className='opp'>
                 none
               </option>
               <option className='opp'>
                 22
               </option>
               <option className='opp'>
                 31
               </option>
               <option className='opp'>
                 88
               </option>
               <option className='opp'>
                 35
               </option>
             </select>
             </td>
            
           </tr>

           <tr className='App'>
             <td>
             <p>
               Check-in-Date:
             </p>
             <input type="number" id=""/>
             </td>
             <td>
             <p>
               Check-out-Date:
             </p>
             <input type="email" id=""/>
             </td>
           </tr>

          

           <tr className='App'> 
             <td colSpan={2}>
             
             {/* <input className='ty' type="submit" name="submit" value="Send Form"  /> */}
             <button id="bbtnbook">Book Room</button>
             </td>
           </tr>
           </tbody>
         </table>
         </form>
         </div> 
     
    );
  }
}

export default BookRooms;
