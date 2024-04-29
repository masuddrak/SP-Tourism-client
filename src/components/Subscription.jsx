import subscribImage from "../assets/best/subscrib.jpg"

const Subscription = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${subscribImage})` }} className="min-h-[40vh] md:min-h-[80vh]  bg-no-repeat  bg-cover flex justify-center items-center p-4 rounded-sm">

            <div className="text-gray-200 space-y-4">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl font-bold">Get 20% OFF Your <br /> First TRIP!</h2>
                    <p>Don’t Wanna Miss Somethings? Subscribe Right Now & Get The Special Discount & Monthly Newsletter</p>
                </div>
                <div>
                    <label className="input input-bordered flex items-center p-7 gap-2 text-black">
                        <input type="text" className="grow " placeholder="Your Email Address" />
                        <span className="text-gray-200 bg-primary cursor-pointer p-3 rounded-md">Subscribe</span>
                    </label>
                </div>
            </div>


        </div>
    );
};

export default Subscription;