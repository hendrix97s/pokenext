
// type CardComponentProps = {
//   name: String,
//   type: String,
//   frame_type: String,
//   description: String,
//   attack: BigInteger,
//   defense: BigInteger,
//   level: BigInteger,
//   race: String,
//   attribute: String,
//   image: String,
//   image_small: String,
//   image_cropped: String,
//   image_cropped_square: String,
//   price: Float32Array,
//   stock: BigInteger,
// }

import Image from "next/image";
import Link from "next/link";
import { CardFilterComponent } from "./CardFilterComponent";


export function CardComponent()
{
  function maxLength(str: string, n: number){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  }

  const description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. The list includes the likes of Salesforce, Microsoft, Google, Oracle, and more. The list includes the likes of Salesforce, Microsoft, Google, Oracle, and more.";

  return (
    <>
      <Link href="#" className="group flex flex-col hover:p-2 h-80 text-white border bg-gray-800 border-gray-700  rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300">
        <Image src="/assets/images/cards/image.jpg" width={250} height={250} alt={""} className="w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-lg"/>
              
        <div className="hidden group-hover:block transition duration-500">
          <div className="flex flex-col mt-0 px-4">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Ancient Dragon</h5>
              <p className="mb-3 font-normal text-gray-400">{maxLength(description, 220)}</p>
          </div>
        </div>

      </Link>
    </>
  )
}