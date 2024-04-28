import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTouristsSpot = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const AddTouristsSpot = (data) => {

        console.log(data)
        fetch("http://localhost:5000/tourists", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    return toast.success("Create Tourists Success!!")
                }
                console.log(data)
            })
    }
    return (
        <div className="flex justify-center min-h-[50vh] mt-10">
            <div className="w-full  lg:max-w-2xl p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-gray-600 text-white">
                <h1 className="text-2xl font-bold text-center">Add Tourists Spot</h1>
                <form onSubmit={handleSubmit(AddTouristsSpot)} className="space-y-6  ">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Image</label>
                            <input type="url" {...register("image")} placeholder="image" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Tourists Spot Name</label>
                            <input type="text" {...register("tourists_spot_name")} placeholder="tourists_spot_name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* <div className="space-y-1 text-sm">
                            <label htmlFor="country_Name" className="block dark:text-gray-600">Country Name</label>
                            <input type="text" {...register("country_Name")} placeholder="country_Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div> */}
                        {/*  */}
                        <div>
                            <label htmlFor="name" className="block dark:text-gray-600">Country</label>
                            <select {...register("country_Name")} className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-gray-50 text-gray-800 focus:dark:border-violet-600" >
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        {/*  */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="location" className="block dark:text-gray-600">location</label>
                            <input type="text" {...register("location")} placeholder="location" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="description" className="block dark:text-gray-600">short description</label>
                            <input type="text" {...register("description")} placeholder="description" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="average_cost" className="block dark:text-gray-600">average_cost</label>
                            <input type="number" {...register("average_cost")} placeholder="average_cost" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="seasonality" className="block dark:text-gray-600">seasonality</label>
                            <input type="text" {...register("seasonality")} placeholder="seasonality" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="travel_time" className="block dark:text-gray-600">Travel_time</label>
                            <input type="number" {...register("travel_time")} placeholder="Travel_time" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="totaVisitorsPerYear" className="block dark:text-gray-600">TotaVisitorsPerYear</label>
                            <input type="number" {...register("totaVisitorsPerYear")} placeholder="TotaVisitorsPerYear" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">User Name</label>
                            <input type="text" {...register("name")} placeholder="User Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">User Email</label>
                            <input type="email" {...register("email")} placeholder="User Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
                        </div>

                    </div>

                    <button className="block w-full p-3 text-center rounded-sm bg-blue-800 text-white">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;