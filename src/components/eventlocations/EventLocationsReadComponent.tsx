import { useNavigate } from "react-router-dom";
import back from "../../assets/img/icons/back.png";

function EventLocationsReadComponent() {
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
                    <label className="text-sm font-medium text-gray-700">점주명</label>
                    <input
                        type="text"
                        value="김민재"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">지점명</label>
                    <input
                        type="text"
                        value="부산 서면점"
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
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

export default EventLocationsReadComponent;
