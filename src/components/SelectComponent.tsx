import { Label, Select } from "flowbite-react";

type PropsSelect = {
  label: string,
  options: string[],
}

export function SelectComponent(props: PropsSelect)
{
  return (
    <>
      <div className="text-white">
          <div className="mb-2 block">
            <Label className="text-white font-bold" htmlFor="fameType" value={props.label}/>
          </div>
          <Select id="fameType" required={true}>
            {
              props.options.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              })
            }
          </Select>
        </div>
    </>
  )
}