import { Link } from "react-router-dom";
import Layout from "../component/Layout";

export default function Homepage() {
    return (
        <Layout>
            <div className="flex justify-center">
                <div className="flex flex-shrink-0 bg-body-image rounded-homepage-image w-[1000px] justify-center">
                    <div className="flex flex-col justify-center bg-transparent p-32">
                        <p className="text-3xl font-bold text-center pb-20">
                            Sistem Pemilihan Shade Alat Make Up
                        </p>
                        <div className="flex flex-col items-center gap-5">
                            <Link to={'/tutorial'}>
                                <button className="border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10">
                                    TUTORIAL
                                </button>
                            </Link>
                            <Link to={'/try-on'}>
                                <button className="border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10">
                                    TRY-ON
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}