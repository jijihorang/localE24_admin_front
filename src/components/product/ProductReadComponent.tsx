import {useLocation, useNavigate, useParams} from "react-router-dom";
import back from "../../assets/img/icons/back.png";
import {IProduct} from "../../types/product/product.ts";
import {useEffect, useState} from "react";
import {getProductOne} from "../../apis/product/productAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";

const initialState : IProduct = {
    productNo: 0,
    productName: "",
    productDescription : "",
    productStatus : 0,
    makerName : "",
    categoriesNo: [],
    categoriesName : [],
    attachFileNames : []
}

function ProductReadComponent() {

    const {productNo} = useParams();
    const [product, setProduct] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const location = useLocation()

    const queryString = location.search

    const navigate = useNavigate();

    const handleBack = () => {
        navigate({
            pathname: `/product/list`,
            search:`${queryString}`
        })
    };

    useEffect(() => {
        const proNO = Number(productNo)
        setLoading(true)
        getProductOne(proNO).then(res => {
            setProduct(res)
            setLoading(false)
        });
    }, [productNo]);

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
                    <label className="text-sm font-medium text-gray-700">상품코드</label>
                    <input
                        type="text"
                        value={product.productNo}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">상품명</label>
                    <input
                        type="text"
                        value={product.productName}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">상품 내용</label>
                    <input
                        type="text"
                        value={product.productDescription}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">제작자명</label>
                    <input
                        type="text"
                        value={product.makerName}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">카테고리 번호</label>
                    <input
                        type="text"
                        value={product.categoriesNo ? product.categoriesNo.join(", ") : "없음"}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">카테고리 이름</label>
                    <input
                        type="text"
                        value={product.categoriesName ? product.categoriesName.join(", ") : "없음"}
                        readOnly
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="portfolio" className="text-sm font-medium text-gray-700">상품 사진</label>
                    <div
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        {product.attachFileNames && product.attachFileNames.length > 0 ? (
                            product.attachFileNames.map((fileName, index) => (
                                <p key={index}>{fileName}</p>
                            ))
                        ) : (
                            <p>상품 사진이 없습니다.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductReadComponent;
