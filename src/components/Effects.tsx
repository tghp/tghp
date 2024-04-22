import {
  Bloom,
  DotScreen,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction, BloomEffect } from "postprocessing";
import { useAtomValue } from "jotai/index";
import { housePlaceAtom } from "@/util/jotai";
import { SpringProps, useSpring } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

type EffectsProps = {
  movementSpringConfig: SpringProps["config"];
};

export function Effects({ movementSpringConfig }: EffectsProps) {
  const housePlace = useAtomValue(housePlaceAtom);
  const bloomRef = useRef<typeof BloomEffect>(null);

  const [bloomSprings, bloomApi] = useSpring<{ intensity: number }>(() => ({
    intensity: 4,
    config: movementSpringConfig,
  }));

  const zoomedOutIntensity = 4;
  const zoomedInIntensity = 2;

  useFrame(() => {
    if (bloomRef.current && bloomRef.current instanceof BloomEffect) {
      bloomRef.current.intensity = bloomSprings.intensity.get();
    }
  });

  useEffect(() => {
    if (housePlace === "initial") {
      bloomApi.start({ intensity: zoomedOutIntensity });
    } else {
      bloomApi.start({ intensity: zoomedInIntensity });
    }
  }, [housePlace]);

  return (
    <EffectComposer>
      <DotScreen
        scale={10}
        opacity={0.07}
        blendFunction={BlendFunction.SOFT_LIGHT}
      />
      <Bloom
        ref={bloomRef}
        luminanceThreshold={0.15}
        mipmapBlur
        luminanceSmoothing={0.6}
        intensity={zoomedOutIntensity}
      />
      <Noise opacity={0.022} blendFunction={BlendFunction.SOFT_LIGHT} />
    </EffectComposer>
  );
}
