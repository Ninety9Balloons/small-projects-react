/* eslint-disable react/prop-types */

export default function CartModal({ cartItems, setCartItems }) {
    function handleDelete(e) {
        const filteredArray = cartItems.filter(
            (item) => item.id !== parseInt(e.target.id)
        );
        setCartItems(filteredArray);
    }

    return (
        <div className="absolute top-16 flex w-full justify-center md:justify-end">
            <div className="flex flex-col w-[95%] md:w-[400px] min-h-[280px] h-full justify-start rounded-lg z-30 bg-white shadow-xl">
                {/* Cart heading */}
                <h2 className="font-bold p-4">Cart</h2>

                {/* Horizontal Line */}
                <hr />

                {/* Cart items */}
                <div className="flex justify-center items-center h-full">
                    {cartItems.length > 0 ? (
                        <div className="w-full">
                            {cartItems.map(function (item) {
                                return (
                                    <div
                                        key={item.id}
                                        id={item.id}
                                        className="flex justify-between items-center w-full text-[rgb(104,112,125)]"
                                    >
                                        <div className="flex gap-3 p-4">
                                            <img
                                                src={item.thumbnail}
                                                className="w-12 h-12 rounded-lg"
                                            />
                                            <div>
                                                <p className="text-sm ">
                                                    {item.name}
                                                </p>
                                                <p>
                                                    ${item.price.toFixed(2)} x{" "}
                                                    {item.quantity}{" "}
                                                    <span className="font-bold text-black">
                                                        $
                                                        {(
                                                            item.price *
                                                            item.quantity
                                                        ).toFixed(2)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            className="cursor-pointer p-4"
                                            onClick={(e) => handleDelete(e)}
                                        >
                                            <img
                                                id={item.id}
                                                src="assets/images/ecommerceproduct/icon-delete.svg"
                                            />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="font-bold h-full text-[rgb(104,112,125)]">
                            <p>Your cart is empty.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
