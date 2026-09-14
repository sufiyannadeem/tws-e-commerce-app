"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import colors from "@/data/colors.json";

type SelectVariantsProps = {
  productId: string;
  colors?: string[];
  sizes?: string[];
  selectedColor?: string;
  selectedSize?: string;
  onColorChange?: (value: string) => void;
  onSizeChange?: (value: string) => void;
};

export default function SelectVariants({
  colors: givenColors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: SelectVariantsProps) {
  const availableColors = colors.filter((color) =>
    givenColors?.includes(color.title.toLowerCase())
  );

  if (givenColors) {
    return (
      <Select
        onValueChange={onColorChange}
        value={selectedColor || ""}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a Color</SelectLabel>

            {availableColors.map((color) => (
              <SelectItem
                value={color.title.toLowerCase()}
                key={color.title}
                className="cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={color.img}
                    alt={color.title}
                    width={20}
                    height={20}
                    className="border rounded-full"
                  />

                  <p className="capitalize">{color.title}</p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  if (sizes) {
    return (
      <Select
        onValueChange={onSizeChange}
        value={selectedSize || ""}
      >
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Select a size" />
        </SelectTrigger>

        <SelectContent className="w-fit max-w-fit">
          <SelectGroup>
            <SelectLabel>Select a Size</SelectLabel>

            {sizes.map((size) => {
              let sizeLabel = "";

              switch (size.toLowerCase()) {
                case "xs":
                  sizeLabel = "extra-small";
                  break;
                case "sm":
                  sizeLabel = "small";
                  break;
                case "md":
                  sizeLabel = "medium";
                  break;
                case "lg":
                  sizeLabel = "large";
                  break;
                case "xl":
                  sizeLabel = "extra-large";
                  break;
                case "xxl":
                  sizeLabel = "2extra-large";
                  break;
                default:
                  sizeLabel = size;
              }

              return (
                <SelectItem
                  value={size}
                  key={size}
                  className="cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <p className="uppercase">{size}</p>
                    <p className="text-sm">({sizeLabel})</p>
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  return null;
}
