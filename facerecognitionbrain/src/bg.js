import React from 'react';
import Particles from 'react-particles-js';

const particle= {
       particles: {
        number:{
          value: 70,
          density:{
           enable: true,
           value_area:700}
        },
        interactivity: {
    detectsOn: "canvas",
    events: {
        onHover: {
            enable: true,
            mode: "repulse"
        },
        onClick: {
            enable: true,
            mode: "bubble"
        },
        resize: true
    },
    modes: {
        grab: {
            distance: 400,
            links: {
                opacity: 1
            }
        },
        bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8
        },
        repulse: {
            distance: 200
        },
        push: {
            quantity: 4
        },
        remove: {
            quantity: 2
        }
    }
},
      color:{
          value: "#ffffff"},
      shape:{
        stroke:{
                 width:4,
                 color:"#160272"},
        polygon:{
          nb_sides:10 },
        image:{
          src: "img/github.svg",
          width: 100,
          height: 100,
          },type: "star"},

        size:{ value: 2,
          anim:{enable:true ,speed:30, size_min:0.2}
        },
       opacity:{value:1},
       line_linked: {enable_auto:true, distance:120, color:"#ffffff", opacity: 0.4 ,width: 2
       },
       move:{ enable:true, direction:"none", speed:0.5, out_mode:"out", random:false,straight:false,
          attract:{
            enable:false,
            rotateX:400,
            rotateY:1200}
            }
     }
    }

    const Part= () =>{
      return( <Particles className='particles'
                 params={particle} /> );
    }
export default Part;



















