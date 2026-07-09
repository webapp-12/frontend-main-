export default function StoreHeader() {
    return (
        <section className="bg-cyan-500">

            <div className="max-w-7xl mx-auto p-8 flex justify-between items-center ">

                <div className="bg-white p-6 flex gap-8 rounded">

                    <div className="text-6xl">
                        🏪
                    </div>

                    <div>

                        <h1 className="text-3xl font-bold">
                            premium mall LK
                        </h1>

                        <p>1028 Followers</p>

                        <p>91% Seller Rating</p>

                    </div>

                    <button className="text-blue-700 font-bold">
                        Chat
                    </button>

                     <button className="text-orange-500 font-bold">
                       FOLLOW
                     </button>


                </div>
            </div>
        </section>
    );
}