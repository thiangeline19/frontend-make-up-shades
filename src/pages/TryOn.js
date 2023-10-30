import Layout from "../component/Layout";

export default function TryOn() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex flex-shrink-0  bg-black w-[600px] mb-8">
                    <div className="flex bg-transparent p-40" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-md font-bold">
                        Make Up
                    </p>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                    </div>

                    <p className="text-md font-bold">
                        Shade Tersedia
                    </p>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                        <button className="border rounded-full bg-gray-300 w-[40px] h-[40px]" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}