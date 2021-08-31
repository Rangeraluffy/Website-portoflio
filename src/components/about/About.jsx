import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:40,
      strings: ["Looking", "For a new", "Job"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div class="max-width">
        <div className="container">
          <h1 class="title">About me</h1>
            <div class="about-content">
                <div class="column left">
                    <img src="assets/profil.png" alt=""/>
                </div>
                <div class="column right">
                    <div class="text">I'm Alexandre and I <span ref={textRef}></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing at voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="#">Download CV</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
