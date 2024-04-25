"use client";

import { useEffect } from "react";

export function ConsoleHello() {
  useEffect(() => {
    console.log(`
            xx                           
          xxx│                           
       xxxx  │                           
     xxx     │                           
  xxx        │                           
xxx          │   xx                      
xxxx         │   │xxx                    
│  xxxxx     │   │   xxx                 
│      │     │   │     xx                
│      │     │   │   xxx│                
│      │    xx   │xxxx  │                
│      │ xxxx   xxx     │   ┌───────────┐
│      xxx    xxx│      │   │           │
│    xx│    xxx  │      │   │  t g h p  │
│ xxx  │   xx    │      │   │           │
xxx    │   │     xxx    │   └───────────┘
xxxx   │   │        xxx │                
   xxx │   │           xx                
      xx   │          xx                 
       x   │       xxx                   
           │     xxx                     
           │   xxx                       
           │  xx                         
           xxx                           
    `);
    console.log(
      "👋 Built with ♥️ with Next.js, React, Tailwind, Three.js, @react-three/fiber, and @react-spring/three. Deployed with ▲ Vercel.",
    );
    console.log(
      "🤔 Want to see how this was made? Check out the repo at https://github.com/tghp/tghp",
    );
    console.log(
      "✉️ You seem like the curious type, we're always looking for new talent. We'd love to hear from you. Reach out to us at glasshouse@tghp.co.uk",
    );
  }, []);

  return <></>;
}
