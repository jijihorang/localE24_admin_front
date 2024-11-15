import back from "../../assets/img/icons/back.png";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMaker} from "../../types/maker/maker.ts";
import {getMakerOne} from "../../apis/maker/makerAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";

const initialState: IMaker = {
    makerBizNo: "",
    makerName: "",
    makerEmail: "",
    makerPhone: "",
    makerPostnum: "",
    makerAddr: "",
    makerAddrDetail: "",
    attachFileNames: []
}

function MakerReadComponent() {

    const {makerBizNo} = useParams();
    const [maker, setMaker] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const location = useLocation()

    const queryString = location.search

    const navigate = useNavigate();

    const handleBack = () => {
        navigate({
            pathname: `/maker/list`,
            search:`${queryString}`
        })
    };

    useEffect(() => {
        const bizNoNum = String(makerBizNo)
        setLoading(true);
        getMakerOne(bizNoNum).then(res => {
            setMaker(res);
            setLoading(false);
        });
    }, [makerBizNo]);

    return (
        <div className="pt-10 pb-10 max-w-screen-xl mx-auto">
            {loading && <LoadingComponent/>}

            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img
                    src={back}
                    alt="뒤로 가기"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleBack}
                />

                <div>
                    <label className="text-sm font-medium text-gray-700">제작자명</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerName}</div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">사업자 등록번호</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerBizNo}</div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 pb-6">사업장 주소</label>
                    <div className="border p-4 rounded-md">
                        <div>
                            <label className="text-sm font-medium text-gray-700">우편번호</label>
                            <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerPostnum}</div>
                        </div>
                        <div className="mt-2">
                            <label className="text-sm font-medium text-gray-700">주소</label>
                            <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerAddr}</div>
                        </div>
                        <div className="mt-2">
                            <label className="text-sm font-medium text-gray-700">상세주소</label>
                            <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerAddrDetail}</div>
                        </div>
                    </div>
                </div>


                <div>
                    <label className="text-sm font-medium text-gray-700">휴대전화</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerPhone}</div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">이메일</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md">{maker.makerEmail}</div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">포트폴리오 파일</label>
                    <div className="mt-1 w-full px-3 py-2 border rounded-md">
                        {maker.attachFileNames && maker.attachFileNames.length > 0 ? (
                            maker.attachFileNames.map((fileName, index) => {
                                // 파일 이름만 추출 (절대 경로의 경우 마지막 '/' 뒤 부분만 사용)
                                const actualFileName = fileName.split('_').pop() ?? '';
                                const linkFileName = fileName.split('/').pop() ?? '';

                                // 원본 파일 경로 생성
                                const originalFilePath = `http://localhost/${linkFileName}`;

                                // 이미지 확장자 체크
                                const isImage = linkFileName.match(/\.(jpg|jpeg|png|gif)$/i);

                                return (
                                    <p key={index}>
                                        {isImage ? (
                                            // 이미지 파일일 경우 <img> 태그로 썸네일 미리보기 표시, 클릭 시 원본 이미지로 이동
                                            <a href={originalFilePath} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`http://localhost/s_${linkFileName}`} // 썸네일 이미지 경로
                                                    alt={actualFileName}
                                                    style={{maxWidth: "200px", maxHeight: "200px", cursor: "pointer"}}
                                                />
                                            </a>
                                        ) : (
                                            // 이미지가 아닐 경우 파일 이름만 표시
                                            <a href={originalFilePath} target="_blank" rel="noopener noreferrer">
                                                {actualFileName}
                                            </a>
                                        )}
                                    </p>
                                );
                            })
                        ) : (
                            <p>포트폴리오 파일이 없습니다.</p>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MakerReadComponent;
