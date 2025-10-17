import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "./HeroOrbit";
export const OrbitStars = () => {
  return (
    <div className="mmask-vertical-fade">
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-orange-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={95}>
        <StarIcon className="size-12 text-orange-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={0}>
        <StarIcon className="size-8 text-orange-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-15}>
        <SparkleIcon className="size-8 text-orange-300/20" />
      </HeroOrbit>
      <HeroOrbit size={460} rotation={80}>
        <SparkleIcon className="size-5 text-orange-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={200}>
        <SparkleIcon className="size-10 text-orange-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={180}>
        <SparkleIcon className="size-14 text-orange-300/20" />
      </HeroOrbit>
      <HeroOrbit size={670} rotation={235}>
        <SparkleIcon className="size-8 text-orange-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={150}>
        <div className="size-14 bg-orange-300/20 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={450} rotation={306}>
        <div className="size-5 bg-orange-300/20 rounded-full" />
      </HeroOrbit>
        <HeroOrbit size={850} rotation={466}>
        <div className="size-5 bg-orange-300/20 rounded-full" />
      </HeroOrbit>
    </div>
  );
};
