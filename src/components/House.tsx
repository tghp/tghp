"use client";

import { LayoutCamera, motion } from "framer-motion-3d";
import {
  Environment,
  Lightformer,
  PerspectiveCamera,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
import { useAtomValue } from "jotai";
import { housePlaceAtom } from "@/util/jotai";
import { MotionConfig, useAnimate } from "framer-motion";
import { Effects } from "@/components/Effects";
// @ts-ignore
import { degToRad } from "three/src/math/MathUtils";
import { useEffect, useMemo, useRef } from "react";
import { useSpring, animated, SpringProps } from "@react-spring/three";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera as PerspectiveCameraImpl, Points } from "three";
import { useInterval } from "react-use";
import { random } from "mathjs";
import * as THREE from "three";

type HouseProps = {};

export function House({}: HouseProps) {
  /**
   * Setup
   */
  const housePlace = useAtomValue(housePlaceAtom);
  const { camera } = useThree();
  const { nodes } = useGLTF("/tghp-3-transformed.glb");

  /**
   * Particles
   */
  const points = useRef<Points>(null);

  const particlesPosition = useMemo(() => {
    const count = 8000;

    const positions = new Float32Array(count * 3);
    const distance = 9;

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, []);

  /**
   * Animations
   */

  const ambientSpringConfig: SpringProps["config"] & { duration: number } = {
    duration: 2000,
  };

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
  }>(() => ({
    metalness: 0.3,
    roughness: 0.5,
    config: ambientSpringConfig,
  }));

  const [pointsSprings, pointsApi] = useSpring<{
    opacity: number;
  }>(() => ({
    opacity: 0.2,
    config: movementSpringConfig,
  }));

  useFrame(() => {
    const vector = cameraSprings.position.get();

    if (Array.isArray(vector)) {
      const [x, y, z] = vector;
      camera.position.set(x, y, z);
    }

    if (points.current) {
      points.current.rotation.z += 0.0001;
    }
  });

  useEffect(() => {
    cameraApi.stop();
    houseApi.stop();
    pointsApi.stop();

    if (housePlace === "initial") {
      pointsApi.start({
        opacity: 0.2,
      });
    } else {
      pointsApi.start({
        opacity: 0.8,
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
  }, [cameraApi, houseApi, pointsApi, housePlace]);

  useInterval(() => {
    houseMaterialApi.start({
      metalness: random(0.2, 0.7),
      roughness: random(0.4, 0.8),
    });
  }, ambientSpringConfig.duration);

  /**
   * Render
   */
  return (
    <>
      <PerspectiveCamera fov={1} near={1} far={1000} makeDefault />
      <hemisphereLight intensity={1} />
      <points
        ref={points}
        rotation={[degToRad(28), degToRad(2), degToRad(12)]}
        position={[0, -1, -9]}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={2}
          />
        </bufferGeometry>
        <animated.pointsMaterial
          color="#b2e8c7"
          size={0.01}
          sizeAttenuation
          opacity={pointsSprings.opacity}
          transparent
        />
      </points>
      <animated.group
        // @ts-ignore
        rotation={houseSprings.rotation}
      >
        <mesh
          // @ts-ignore
          geometry={nodes.Cube002.geometry}
          position={[0.9, 2.035, -0.044]}
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
      <Effects movementSpringConfig={movementSpringConfig} />
    </>
  );
}
