import { Cemjsx, Static } from "cemjs-all"
import lines from "@images/home/lines.svg";
import nft from "@images/home/nft.jpg";

export default function () {
  return (
    <section class="container mx-auto flex flex-auto items-center relative overflow-hidden">
      <img src={ lines } alt="background element" class="absolute w-3/12"/>
      <img src={ nft } alt="crypto emergency, nft" class="object-contain" />
    </section>
  )
}