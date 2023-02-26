import { Label, Select } from "flowbite-react";
import { SelectComponent } from "./SelectComponent";

export function CardFilterComponent()
{
  const optionsFrameType = ["effect","synchro","fusion","effect_pendulum","xyz","link","normal","ritual","synchro_pendulum","xyz_pendulum","fusion_pendulum","normal_pendulum","ritual_pendulum","token","spell","trap"];
  const labelFrameType = "Selecione o tipo de card";

  return (
    <>
      <div className="w-full text-white border bg-gray-800 border-gray-700 hover:bg-gray-700 p-4 rounded-lg mb-4 flex flex-wrap justify-between gap-2 ">
        <SelectComponent label={labelFrameType} options={optionsFrameType} />
      </div>
    </>
  )
}

















