import Cart from "../components/Cart"


const Product = () => {
  return (
    <>
        <div className="bg-gray-200">
            <div className="flex justify-center">
                <div className="container flex justify-center items-center p-5">
                    <div className="flex-row">
                        <h1 className="text-lg">TRENDY PRODUCTS</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-5">
                <div className="container flex justify-center items-center">
                    <div className="flex flex-row justify-center gap-4">
                        <div className="basis-1/4">
                            <Cart/>
                        </div>
                        <div className="basis-1/4">
                            <Cart/>
                        </div>
                        <div className="basis-1/4">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product