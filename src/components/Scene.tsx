"use client";

import {
  Environment,
  Lightformer,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { useAtomValue } from "jotai";
import { housePlaceAtom } from "@/util/jotai";
import { Effects } from "@/components/Effects";
// @ts-ignore
import { degToRad } from "three/src/math/MathUtils";
import { useEffect, useRef } from "react";
import { animated, SpringProps, useSpring } from "@react-spring/three";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";
import { Backdrop } from "@/components/Backdrop";
import { useWindowSize } from "react-use";
import { Group } from "three";

type HouseProps = {};

export function Scene({}: HouseProps) {
  /**
   * Setup
   */
  const housePlace = useAtomValue(housePlaceAtom);
  const { camera } = useThree();
  const { nodes } = useGLTF("/tghp-3-transformed.glb");
  const houseRef = useRef<Group>(null);

  const { width: windowWidth } = useWindowSize();

  /**
   * Animations
   */

  // const ambientSpringConfig: SpringProps["config"] & { duration: number } = {
  //   duration: 2000,
  //   easing: (t: number) => t,
  // };

  const movementSpringConfig: SpringProps["config"] = {
    mass: 3,
    tension: 170,
    friction: 42,
  };

  const [cameraSprings, cameraApi] = useSpring<{
    position: Exclude<Vector3, number>;
  }>(() => ({
    position: [-0.25, 2, 350],
    config: movementSpringConfig,
  }));

  const [houseSprings, houseApi] = useSpring<{
    rotation: Euler;
  }>(() => ({
    rotation: [0, 0, 0],
    config: movementSpringConfig,
  }));

  const [houseMaterialSprings, houseMaterialApi] = useSpring<{
    metalness: number;
    roughness: number;
    opacity: number;
  }>(() => ({
    metalness: 0.3,
    roughness: 0.5,
    opacity: 1,
    config: movementSpringConfig,
  }));

  useFrame(() => {
    const vector = cameraSprings.position.get();

    if (Array.isArray(vector)) {
      const [x, y, z] = vector;
      camera.position.set(x, y, z);
    }
  });

  useEffect(() => {
    cameraApi.stop();
    houseApi.stop();

    if (housePlace === "initial") {
      houseMaterialApi.start({
        opacity: 1,
        roughness: 0.5,
      });
    } else {
      houseMaterialApi.start({
        opacity: 0.25,
        roughness: 1,
      });
    }

    switch (housePlace) {
      case "initial": {
        cameraApi.start({
          position: [-0.25, 1.95, 310],
        });
        houseApi.start({
          rotation: [0, 0, 0],
        });
        break;
      }
      case "zoom": {
        cameraApi.start({
          position: [1.25, 2, 100],
        });
        houseApi.start({
          rotation: [degToRad(43), degToRad(50), degToRad(-5)],
        });
        break;
      }
      case "zoom2": {
        cameraApi.start({
          position: [1.4, 0.5, 90],
        });
        houseApi.start({
          rotation: [degToRad(45), degToRad(-45), 0],
        });
        break;
      }
      case "zoom3": {
        cameraApi.start({
          position: [1.1, 2.5, 100],
        });
        houseApi.start({
          rotation: [degToRad(30), degToRad(28), degToRad(18)],
        });
        break;
      }
    }
  }, [cameraApi, houseApi, housePlace]);

  useEffect(() => {
    if (houseRef.current) {
      if (windowWidth > 900) {
        houseRef.current.position.x = -1 + windowWidth * 0.0005;
      } else {
        houseRef.current.position.x = -2.67 + windowWidth * 0.0007;
      }
    }
  }, [windowWidth]);

  /**
   * Render
   */
  return (
    <>
      <PerspectiveCamera fov={1} near={1} far={1000} makeDefault />
      <hemisphereLight intensity={1} />
      <animated.group
        ref={houseRef}
        // @ts-ignore
        rotation={houseSprings.rotation}
      >
        <mesh
          // @ts-ignore
          geometry={nodes.Cube002.geometry}
          position={[0.95, 2.035, -0.044]}
          rotation={[2.454, 0.01, -0.83]}
          scale={[0.108, 0.82, 1.298]}
          castShadow
          receiveShadow
        >
          <animated.meshPhysicalMaterial
            roughness={houseMaterialSprings.roughness}
            metalness={houseMaterialSprings.metalness}
            color={"#6ac7c6"}
            clearcoatRoughness={10}
            clearcoat={1}
            ior={1}
            iridescence={0}
            transparent
            opacity={houseMaterialSprings.opacity}
          />
        </mesh>
      </animated.group>
      <Environment resolution={512}>
        <Lightformer
          intensity={1}
          rotation={[Math.PI * 0.2, 0, 0]}
          position={[0, 2, 0]}
          scale={[3, 5, 1]}
        />
        <Lightformer
          intensity={1.7}
          rotation={[Math.PI * 0.4, Math.PI * -0.1, 0]}
          position={[0, -1, 0]}
          scale={[3, 10, 1]}
        />
      </Environment>
      <Backdrop movementSpringConfig={movementSpringConfig} />
      <Effects movementSpringConfig={movementSpringConfig} />
    </>
  );
}
