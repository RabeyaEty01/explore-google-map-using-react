import React, { useState } from 'react';
import {GoogleMap,LoadScript,DirectionsRenderer,DirectionsService} from '@react-google-maps/api';


const location= {
    lat: 23.728592,
    lng: 90.385429
};

const Direction = ({origin,destination}) => {
    const [response,setResponse]=useState(null);
    const directionsCallback =res=>{
        if(res!=null){
            setResponse(res);
        }
    }
    return (
        <div>
            <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
            id='direction-example'
            mapContainerStyle={{
              height: '100vh',
              width: '100%'
            }}

            zoom={14}
            center={location}
          >
            
                <DirectionsService
                  // required
                  options={{
                    destination: origin,
                    origin: destination,
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={directionsCallback}
                 
                />


            {
              response !== null && (
                <DirectionsRenderer
                  // required
                  options={{ 
                    directions: response
                  }}
                 
                />
              )
            }
          </GoogleMap>
          </LoadScript>
        </div>
    );
};

export default Direction;