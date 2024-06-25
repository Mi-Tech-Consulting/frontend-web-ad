'use client';
import SettingsButton from '../_Componenets/SettingsButton';
import SettingsContainer from '../_Componenets/SettingsContainer';
import SettingsInput from '../_Componenets/SettingsInput';
import SettingsTitle from '../_Componenets/SettingsTitle';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [image, setImage] = useState<string>('');
  useEffect(() => {
    //TODO: fetch the image from the api
    //example :
    // setImage('/upload/images/ads-001.jpg');
  }, []);

  return (
    <div className="w-full">
      <SettingsTitle title="Profile" />
      <SettingsContainer className="mt-5">
        <div className="flex flex-col ml-8 mt-8 mb-10 w-full mx-5">
          <p className="text-[16px] text-black font-semibold">Photo</p>
          <div className="flex items-center mt-4 gap-5">
            {image ? (
              <Image
                src={image}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
                width={14}
                height={14}
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-gray-300"></div>
            )}
            <button
              className="px-5 bg-[#EBEDF0] border-1 border-[#DBDFE3] text-black rounded-md py-2 font-light"
              onClick={() => {
                //TODO: do the logic here
              }}
            >
              Upload New Picture
            </button>
            <button
              className="text-red-500"
              onClick={() => {
                //TODO: do the logic here
              }}
            >
              Delete
            </button>
          </div>
          <form
            className="mt-8 "
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log(
                e.target[0].value,
                e.target[1].value,
                e.target[2].value
              );
              //TODO: do the logic here
            }}
          >
            <div className="grid grid-cols-2 gap-5">
              <SettingsInput
                title="First Name"
                type="text"
                placeholder="First Name"
              />
              <SettingsInput
                title="Last Name"
                type="text"
                placeholder="Last Name"
              />
              <SettingsInput title="Email" type="email" placeholder="Email" />
            </div>
            <hr className="bg-[#E4E8EA] mt-5" />
            <SettingsButton title="Save" type="submit" />
          </form>
        </div>
      </SettingsContainer>
    </div>
  );
}
