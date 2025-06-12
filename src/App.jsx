import './index.css';
import { useState, useEffect } from 'react'; 

/* `1. Map through API data and place names in ol list 
`   2. Display data in container. */

const App = () => {
  const [guestList, setGuestList] = useState([]);
  const [guestDetails, setGuestDetails] = useState([]); /* Do I need to create another useState to render the other detaiils? */


    useEffect(() => {

      const fetchGuests = async () => {

    try {
      const response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/guests');
      const guestObject = await response.json();
      const guestData = guestObject.data;
      setGuestList(guestData);
    

    } catch (error) {
      console.error('Error fetching:', error);
    }

  };
    fetchGuests();
    }, []);
  
 
  


  return (
    <>
    
        <h1>Guest List</h1>
        {console.log(guestList)}

        <table>
          <tbody>
         {guestList.map( (singleGuest) => {

            return <tr key={singleGuest.id} onClick={() => { fetchGuests(singleGuest.name) }}>
                  <td>{singleGuest.name}</td><td>{singleGuest.email}</td><td>{singleGuest.phone}</td></tr>


         })}
         </tbody>
        </table>

        <section>
          <h2>{}</h2> {/* Having trouble getting the other details to render in this section */}
        </section>

    
    </>

  );
}

  export default App;


