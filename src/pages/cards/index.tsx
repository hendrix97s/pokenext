import { CardComponent } from "@/components/CardComponent";
import { CardFilterComponent } from "@/components/CardFilterComponent";
import Image from "next/image";
import Link from "next/link";

export default function Cards()
{
  return (
    <>
      <CardFilterComponent/>
      <div className="w-full h-full flex flex-wrap content-start gap-4">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </>
  )
}