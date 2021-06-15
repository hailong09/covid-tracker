import React from 'react'
import ReactMapboxGl, {MapContext} from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl'
import { MarkerColor } from '../../helper/helper';


const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

const MyMap = ({countries}) => {
    
    return (
        <Map
            style={"mapbox://styles/mapbox/dark-v10"}
            containerStyle={{
                height: '450px',
                width: '100%',
            }}
            zoom={[1]}
        >

        <MapContext.Consumer>
            {(map) => {
               countries.map(country => {
                    const marker =  new mapboxgl.Marker({
                            color: MarkerColor(country.cases)
                        })
                        .setLngLat([country.countryInfo.long, country.countryInfo.lat]).setPopup(
                            new mapboxgl.Popup({
                                offset: 25,
                                closeButton: false,
                                closeOnClick: false

                            }).setHTML(
                                '<div><img src=" '+ country.countryInfo.flag+'"/><span>' + country.country + 
                                '</span></div><p>Cases: ' + country.cases +
                                '</p><p>Deaths: ' + country.deaths +
                                '</p><p>Active: ' + country.active +
                                '</p><p>Recovered: ' + country.recovered +'</p>'
                            )
                        
                        ).addTo(map)
                    const markerDiv = marker.getElement();
                    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
                    return marker;
               })
            }}
        </MapContext.Consumer>
           
       
        </Map>

    )
}

export default MyMap
