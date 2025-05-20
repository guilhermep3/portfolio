import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
   const particlesInit = useCallback(async (engine) => {
      await loadSlim(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
      console.log(container);
   }, []);

   return (
      <Particles
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={{
            background: {
               color: {
                  value: "transparent",
               },
            },
            fpsLimit: 120,
            interactivity: {
               events: {
                  onClick: {
                     enable: true,
                     mode: "push",
                  },
                  onHover: {
                     enable: false,
                     mode: "repulse",
                  },
                  resize: true,
               },
               modes: {
                  push: {
                     quantity: 4,
                  },
                  repulse: {
                     distance: 200,
                     duration: 0.4,
                  },
               },
            },
            particles: {
               color: {
                  value: "#707070",
               },
               links: {
                  color: "#707070",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
               },
               move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                     default: "out",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
               },
               number: {
                  density: {
                     enable: true,
                     area: 800,
                  },
                  value: 80,
               },
               opacity: {
                  value: 0.5,
               },
               shape: {
                  type: "circle",
               },
               size: {
                  value: { min: 1, max: 5 },
               },
            },
            detectRetina: true,
            fullScreen: {
               enable: false, // Desativa o modo tela cheia
               zIndex: 0, // Define a camada z-index
            },
         }}
      />
   );
};

export default ParticlesBackground;