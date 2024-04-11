
export const Stylish = () => {
  return (
    <>
    <section className="pt-11">
        <div className=" grid md:grid-cols-2 items-center md:flex-row h-1/2 overflow-hidden text-white">
            <div className='flex justify-center flex-col gap-10 items-center h-full bak overflow-hidden py-8'>
                    <p className="font-bold opacity-60">01.</p>
                    <h1 className="text-5xl font-bold uppercase">Stylish</h1>
                    <div className="flex gap-5 flex-col justify-center items-center md:text-center w-1/2">
                        <p className="capitalize text-xl">Sport</p>
                        <p className="capitalize opacity-80 line-clamp-2 text-overflow">Ea viris munere intellegam pro, sanctus iudicabit persecuti. Habeo accusamus quo id, rebum epicurei intellegat.</p>  {/* Added text-overflow class */}
                </div>
            </div>
            <div className="">
                <img className="w-full"  src={require("../image/chose.jpg")} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}
