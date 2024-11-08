import { useNavigate } from "react-router-dom";
import back from "../../assets/img/icons/back.png";

function ProductReadComponent() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="pt-20 pb-10 max-w-lg mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img
                    src={back}
                    alt="뒤로 가기"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleBack}
                />

                <div>
                    <label className="text-sm font-medium text-gray-700">상품코드</label>
                    <input
                        type="text"
                        value="01234"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">상품명</label>
                    <input
                        type="text"
                        value="하트 부기"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">상품 내용</label>
                    <input
                        type="text"
                        value="하트 부기 하트 부기 하트 부기 하트 부기 하트 부기 하트 부기 하트 부기 하트 부기 하트 부기"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">제작자명</label>
                    <input
                        type="text"
                        value="김민주"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">카테고리 번호</label>
                    <input
                        type="text"
                        value="023"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">카테고리 이름</label>
                    <input
                        type="text"
                        value="키링"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex gap-4 justify-center">
                    <button className="flex-1 max-w-xs px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductReadComponent;
