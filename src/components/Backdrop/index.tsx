import { SpringProps } from "@react-spring/three";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Color, Vector2 } from "three";

// @ts-ignore
import vertexShader from "./vertex.glsl";
// @ts-ignore
import fragmentShader from "./fragment.glsl";
import { useFrame } from "@react-three/fiber";

type BackdropProps = {
  movementSpringConfig: SpringProps["config"];
};

export function Backdrop({ movementSpringConfig }: BackdropProps) {
  const mesh = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#173c3c"),
      },
      u_colorA: { value: new Color("#1d48bd") },
      u_colorB: { value: new Color("#378f8f") },
    }),
    [],
  );

  useFrame(({ clock }) => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.material.uniforms.u_time.value =
        clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      <mesh ref={mesh} position={[-0.2, 2, -3]} scale={14}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
          transparent
        />
      </mesh>
    </>
  );
}
