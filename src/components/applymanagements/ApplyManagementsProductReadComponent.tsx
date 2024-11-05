import back from "../../assets/img/icons/back.png";


function ApplyManagementsProductReadComponent() {
    return (
        <div className="pt-20 pb-10 max-w-lg mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-8">
                <img src={back} alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <label className="text-sm font-medium text-gray-700">품번</label>
                    <input
                        type="text"
                        value="A10B2312"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">상품명</label>
                    <input
                        type="text"
                        value="마이 멜로디"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">카테고리</label>
                    <input
                        type="text"
                        value="액세서리"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">사진</label>
                    <div className="flex space-x-2 mt-1">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">설명</label>
                    <div>
                        <textarea name="" id="">
                            test description
                        </textarea>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">신청날짜</label>
                    <div className="flex space-x-2 mt-1">
                        <input
                            type="text"
                            value="2024-10-24"
                            readOnly
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <button className="flex-1 max-w-xs px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        승인
                    </button>
                    <button className="flex-1 max-w-xs px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        거절
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ApplyManagementsProductReadComponent;