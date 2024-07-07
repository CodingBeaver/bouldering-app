
import { Link } from "react-router-dom"

function Home() {

    return (
        <div className="flex h-screen justify-center align-middle items-center text-center flex-col">
            <h1 className="text-2xl p-6">
                Welcome
            </h1>
            <div>

                <button className="bg-blue-400 p-3 rounded">
                    <Link to="/login">Go to login</Link>
                </button>
            </div>
        </div>
    )


}

export default Home