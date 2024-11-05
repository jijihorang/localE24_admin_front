import back from "../../assets/img/icons/back.png";


function EventManagementsReadComponent() {

    return (
        <div className="pt-20 pb-10 max-w-lg mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-8">
                <img src={back} alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <label className="text-sm font-medium text-gray-700">이벤트명</label>
                    <input
                        type="text"
                        value="부기와 함께하는 부산"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">제작자</label>
                    <span></span><span></span>
                    <input
                        type="text"
                        value="홍길동"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">담당 지점</label>
                    <input
                        type="text"
                        value="부산 서면점"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">공간대여 가능 여부</label>
                    <input
                        type="text"
                        value="가능"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">진행기간</label>
                    <div className="flex space-x-2 mt-1">
                        <input
                            type="text"
                            value="2024-10-24"
                            readOnly
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="flex items-center">-</span>
                        <input
                            type="text"
                            value="2024-11-24"
                            readOnly
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">신청 날짜</label>
                    <input
                        type="text"
                        value="2024-10-25"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <span>상품 리스트</span>
                    <div>
                        <label className="text-sm font-medium text-gray-700">상품명1</label>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">상품명2</label>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">상품명3</label>
                        <img src="" alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EventManagementsReadComponent;
