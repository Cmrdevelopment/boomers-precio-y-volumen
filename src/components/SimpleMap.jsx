import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const SimpleMap = () => {
    const posStart = [40.4347751253622, -3.632712916198763]; 
    // const posEnd = [51.505, -0.07];

    const customMarkerIcon = L.icon({
        iconUrl: 'https://res.cloudinary.com/dwbxywvdw/image/upload/v1690705657/Iconos/mapa_l4hpan.png',
        iconSize: [45, 45], // Ajusta el tamaño del ícono según tus necesidades
        iconAnchor: [16, 32], // Ajusta el punto de anclaje si es necesario
        popupAnchor: [0, -32], // Ajusta la posición del popup con respecto al ícono
      });

    return (
        <div className="simple-map-container">
            <MapContainer center={posStart} zoom={18} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                <Marker position={posStart} icon={customMarkerIcon}>
                    <Popup>
                    Linkia FP Madrid Centro de estudios 👨‍🎓
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    );
}

export default SimpleMap;