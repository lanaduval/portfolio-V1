import React from 'react';
import {useLoader} from'@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import galacticTexture from './texture/texture_galactic.jpg'

export default function Sphere() {
    const colorMap =useLoader(TextureLoader, galacticTexture);
    return (
            <mesh rotation={[25,6,20]}>
                <sphereBufferGeometry attach ="geometry" args={[0.7, 30, 30]}/>
                {/*<meshStandardMaterial attach ="material" transparent opacity={0.5} color='#816EFC' metalness={0.5}/> */}
                <meshStandardMaterial map={colorMap}/>

            </mesh>
    )
}