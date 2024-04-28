import { useQuery } from "@tanstack/react-query";


const useQueryTanstack = () => {
    const { isLoading,data,refetch }  = useQuery({
        queryKey: ["tourists"],
        queryFn: async()=>{
            const res=await fetch("https://sp-tourists-spot-server.vercel.app/tourists")
            const data=await res.json()
            return data
        }
    })
    return {isLoading,data,refetch }
};

export default useQueryTanstack;