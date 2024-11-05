import back from "../../assets/img/icons/back.png";


function ApplyManagementsProducerReadComponent() {
    return (
        <div className="pt-20 pb-10 max-w-lg mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-8">
                <img src={back} alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <label className="text-sm font-medium text-gray-700">제작자이름</label>
                    <input
                        type="text"
                        value="홍길동"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">사업자 등록번호</label>
                    <input
                        type="text"
                        value="123-45-67890"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <span>사업장 주소</span>
                    <label className="text-sm font-medium text-gray-700">우편번호</label>
                    <input
                        type="text"
                        value="12345"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <label className="text-sm font-medium text-gray-700">주소(도로명)</label>
                    <input
                        type="text"
                        value="부산 무슨구 무슨무슨로 00-123"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <label className="text-sm font-medium text-gray-700">상세 주소</label>
                    <input
                        type="text"
                        value="101동 101호"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">휴대전화</label>
                    <div className="flex space-x-2 mt-1">
                        <input
                            type="text"
                            value="010-1234-5678"
                            readOnly
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">이메일</label>
                    <div className="flex space-x-2 mt-1">
                        <input
                            type="text"
                            value="aaa@aaa.com"
                            readOnly
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">포트폴리오</label>
                    <div className="flex space-x-2 mt-1">
                        <img src="" alt=""/>
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

export default ApplyManagementsProducerReadComponent;