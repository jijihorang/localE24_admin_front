import {IMaker} from "../../types/maker/maker.ts";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getApplyMakerOne, updateMakerStatus} from "../../apis/applymanagements/maker/applymanagementmakerAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import back from "../../assets/img/icons/back.png";

const initialState: IMaker = {
    makerBizNo: "",
    makerName: "",
    makerEmail: "",
    makerPhone: "",
    makerPostnum: "",
    makerAddr: "",
    makerAddrDetail: "",
    makerStatus: 0,
    attachFileNames: []
}


function ApplyManagementsMakerReadComponent() {
    const {makerBizNo} = useParams();
    const [maker, setMaker] = useState(initialState);
    const [loading, setLoading] = useState<boolean>(false);

    const location = useLocation()

    const queryString = location.search

    const navigate = useNavigate();

    const handleBack = () => {
        navigate({
            pathname: `/applyManagements/maker/list`,
            search:`${queryString}`
        })
    };

    const handleStatusChange = async (status: number) => {
        if (!makerBizNo) return;
        setLoading(true);
        try {
            await updateMakerStatus(makerBizNo, status);
            navigate(`/applyManagements/maker/list`);
        } catch (error) {
            console.error("에러 발생하였습니다.", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const biNum = String(makerBizNo);
        setLoading(true);
        getApplyMakerOne(biNum).then(res  => {
            setMaker(res);
            setLoading(false);
        });
    }, [makerBizNo]);

    return (
        <div className="pt-20 pb-10 max-w-lg mx-auto">
            {loading && <LoadingComponent />}

            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img
                    src={back}
                    alt="뒤로 가기"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleBack}
                />

                <div>
                    <label htmlFor="creatorName" className="text-sm font-medium text-gray-700">제작자명</label>
                    <input
                        type="text"
                        readOnly
                        value={maker.makerName}
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="businessNumber" className="text-sm font-medium text-gray-700">사업자 등록번호</label>
                    <input
                        type="text"
                        value={maker.makerBizNo}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="border p-4 rounded-md">
                    <label className="text-sm font-medium text-gray-700">사업장 주소</label>
                    <div>
                        <label htmlFor="postalCode" className="text-sm font-medium text-gray-700">우편번호</label>
                        <input
                            type="text"
                            value={maker.makerPostnum}
                            readOnly
                            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="address" className="text-sm font-medium text-gray-700">주소</label>
                        <input
                            type="text"
                            value={maker.makerAddr}
                            readOnly
                            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="detailedAddress" className="text-sm font-medium text-gray-700">상세주소</label>
                        <input
                            type="text"
                            value={maker.makerAddrDetail}
                            readOnly
                            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">휴대전화</label>
                    <input
                        type="text"
                        value={maker.makerPhone}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">이메일</label>
                    <input
                        type="email"
                        value={maker.makerEmail}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="portfolio" className="text-sm font-medium text-gray-700">포트폴리오 파일</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        {maker.attachFileNames && maker.attachFileNames.length > 0 ? (
                            maker.attachFileNames.map((fileName, index) => (
                                <p key={index}>{fileName}</p>
                            ))
                        ) : (
                            <p>포트폴리오 파일이 없습니다.</p>
                        )}
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => handleStatusChange(1)}
                        className="flex-1 max-w-xs px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        승인
                    </button>
                    <button
                        onClick={() => handleStatusChange(2)}
                        className="flex-1 max-w-xs px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        거절
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ApplyManagementsMakerReadComponent;