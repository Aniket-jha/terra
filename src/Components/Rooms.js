import React from 'react'
import RoomCard from './RoomCard'
import TerraMainImage from "../asset/mainBanner.webp"
import TerraOneImage from "../asset/1.webp"
import TerraTwoImage from "../asset//2.webp"
import TerraThreeImage from "../asset/triple.webp"
import TerraFourImage from "../asset/quad.webp"
import TerraPrivateImage from "../asset/pri.webp"
import TerraTwinImage from "../asset/twi.webp"
import Twin from "../asset/gym.jpeg"
import Private from "../asset/canteen.jpeg"
import Triple from "../asset/terraceImage.jpeg"
import Quad from "../asset/last.jpeg"
const Rooms = () => {
  return (
    <div className='lg:mx-16 mx-4 pb-12  ' >
            <div>
                <h3 className='font-[NeueBold] text-[2.5rem]' >Rooms</h3>
                <div className='mt-4 lg:grid grid-cols-4 grid-flow-col gap-4 xl:gap-6' >
                <RoomCard image={TerraFourImage} title="Quad"  content="Spacious quad sharing room with modern amenities, high-speed Wi-Fi, and ample storage space."  />
                <RoomCard image={TerraThreeImage} title="Triple"  content="Comfortable triple sharing room with modern amenities, high-speed Wi-Fi, and ample storage space."  />
                    <RoomCard image={TerraTwinImage} title="Twin" content="Cozy twin room with modern amenities, perfect for sharing and fostering community connections."  />
                    <RoomCard image={TerraPrivateImage} title="Private" content="Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping."  />
                   
                   
                </div>
            </div>
            <div className='lg:flex hidden  mt-2 lg:mt-3 items-center justify-center' >
           <a target='_blank' rel='noreferrer' href="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FTerra%20by%20Union%20Digital.pdf?alt=media&token=648c8804-cddf-4b51-a5fc-f635cb68a211" download> <button className="uppercase flex items-center justify-center gap-2 lg:gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[12px] px-[16px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" > What's Included in Rent?  </button></a>
           </div>
    </div>
  )
}

export default Rooms