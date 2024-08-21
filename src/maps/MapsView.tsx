import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MapsView = () => {
    const [state, setState] = useState({
        pickupCords: {
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCords: {
            latitude: 30.6882,
            longitude: 76.7062,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
    const mapRef = useRef()
    const { pickupCords, droplocationCords } = state
    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={pickupCords}
            >
                <Marker coordinate={pickupCords}/>
                <Marker coordinate={droplocationCords}/>
                <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    // apikey={GOOGLE_MAPS_APIKEY} 
                    strokeWidth={3}
                    strokeColor='hotpink'
                    optimizeWaypoints={true}
                    onReady={result =>{
                        mapRef.current.fitToCoordinates(result.coordinates,{
                            edgePadding: {
                                right: 30,
                                bottom: 300,
                                left: 30,
                                top: 100,
                              }
                        })
                    }}
                />
            </MapView>
        </View>
    )
}

export default MapsView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})