import { useState } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./works.scss"

export default function Works() {
   const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div id="skills">
      <div className="background" />
      <Parallax pages={9}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <img className="scrollText" src="assets/down.png" alt="" />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 8 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
            <img className="sticky left-img" src="assets/personnal_skills.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
            <img className="card parallax" src="assets/html.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/javascript.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/ruby.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/php.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/react.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={6.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/wordpress.png" alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={7.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <img className="card parallax" src="assets/editeurs.png" alt=""/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
