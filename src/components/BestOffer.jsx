
import bestOffer1 from "../../src/assets/best/best.jpg"
import image1 from "../../src/assets/best/adven-home-new-icon-01.png"
import image2 from "../../src/assets/best/adven-home-new-icon-02.png"
import image3 from "../../src/assets/best/adven-home-new-icon-03.png"
import image4 from "../../src/assets/best/adven-home-new-icon-04.png"
import image5 from "../../src/assets/best/adven-home-new-icon-05.png"
import image6 from "../../src/assets/best/adven-home-new-icon-06.png"

const BestOffer = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bestOffer1})` }} className="min-h-[40vh] md:min-h-[80vh]  object-cover bg-no-repeat  bg-cover ">
            <div className="lg:grid grid-cols-2 m-4 ">
                <div></div>
                <div className="grid md:grid-cols-2 gap-8 text-white">
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image1} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Various Adventures</h3>
                            <p>Tempor incididunt ut labore lore magna aliqua sem utna.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image2} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Adventurous Trails</h3>
                            <p>Et dolore magna aliqua quis ipsum suspen disse ultrices.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image3} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Trained Guides</h3>
                            <p>Quis ipsum suspendisse ultrices gravida risus viverra maecenas.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image4} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Family Trips</h3>
                            <p>Incididunt ut labore. Et dolore magna aliqua quis ipsum suspe.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image5} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Custom Packages</h3>
                            <p>Et dolore magna aliqua quis ipsum suspendisse ultrices gravi</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center  border-b-[1px] pb-5 border-[#3F00E7]">
                        <div className="w-[50px]">
                            <img src={image6} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">Complete Guide</h3>
                            <p>Tempor incididunt ut labore et dolore magna quis ipsum suspe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestOffer;