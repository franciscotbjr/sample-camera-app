import React, {useState} from 'react';
import { cameraFeatures } from './camera';


const App = () => {

  const [camerasAvailable, setCamerasAvailable] = useState({});
  const [currentCamera, setCurrentCamera] = useState('front');
    return (
      <div style={{ marginLeft: '100px' }}>
        <h1>Camera access</h1>
        <div>
          <video autoPlay style={{ maxWidth: '30%', height: 'auto', border: 'solid ', borderWidth: '1px' }}></video>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ margin: '5px 5px 5px 5px', display: 'inline' }}>
            <button onClick={() => {
              cameraFeatures.open(cameras => {
                setCamerasAvailable(cameras);
                console.log(cameras);
              }, 
              cameraError => {
                console.log(JSON.stringify(cameraError));
              });
            }}>Open</button>
          </div>
          <div style={{ margin: '5px 5px 5px 5px', display: 'inline' }}>
            <button onClick={() => {
              cameraFeatures.takeShot('selfie64_1', snapshotError => {
                console.log(JSON.stringify(snapshotError));
              });
            }}>Shot</button>
          </div>
          <div style={{ margin: '5px 5px 5px 5px', display: 'inline' }}>
            <button onClick={cameraFeatures.close}>Close</button>
          </div>
          <div style={{ margin: '5px 5px 5px 5px', display: 'inline' }}>
            <button onClick={() => {
              let cam = currentCamera;
              if(currentCamera === 'front') {
                  cam = 'back';
                setCurrentCamera(cam);
              } else {
                  cam = 'front';
                setCurrentCamera(cam);
              }
              cameraFeatures.change(
                camerasAvailable[cam], 
                cameraError => {
                  console.log(JSON.stringify(cameraError));
                });
            }}>Change</button>
          </div>
        </div>
      </div>
    )
}


export default App;