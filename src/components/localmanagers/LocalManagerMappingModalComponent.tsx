
function LocalManagerMappingModalComponent() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"/>

            <div className="relative bg-white rounded-lg shadow-lg w-[400px] p-10 z-10">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    &times;
                </button>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-4 text-center">담당자 목록</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2">
                        <option value="">담당자 선택</option>
                        <option value="manager1">담당자 1</option>
                        <option value="manager2">담당자 2</option>
                        <option value="manager3">담당자 3</option>
                    </select>
                </div>

                <button
                    className="w-full py-2 bg-neutral-500 text-white rounded hover:bg-neutral-400 transition duration-200"
                >
                    매칭하기
                </button>
            </div>
        </div>
    );
}

export default LocalManagerMappingModalComponent;