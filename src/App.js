import "./App.css";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAS09os1JM5pN9sB-zTq7bC14G6vXNbpG0",
  });


  const center = useMemo(() => ({ lat: 34.419778, lng: 8.79124 }), []);
  if (!isLoaded) return <div>Loading...</div>;
  return (<GoogleMap zoom={10} center={center}  mapContainerClassName="map-container">
  <Marker position={{ lat: 34.419778, lng: 8.79124 }} />
</GoogleMap>);
}


export default App;






// export const Map = () => {
//   const center = useMemo(() => ({ lat: 34.419778, lng: 8.79124 }), []);
//   return (
    
//   );
// };

