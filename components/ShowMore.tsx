"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter()

    const handelNavigation = () => {
        const newLimit = (pageNumber + 1) * 12;
        const newPathName = updateSearchParams('limit', `${newLimit}`);

        router.push(newPathName, {scroll: false});
    }
  return (
    <div className="w-full flex-center gap-3 mt-10">
        {!isNext && (
            <CustomButton 
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handelNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore