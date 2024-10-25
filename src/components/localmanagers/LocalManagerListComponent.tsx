
import {Link} from "react-router-dom";

function LocalManagerListComponent() {
    return (
        <div className="py-8">
            <div className="flex justify-end">
                <Link to='/localManagers/register'>
                    <div className="flex items-center space-x-4">
                        <button
                            className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                        >
                                            <span aria-hidden
                                                  className="absolute inset-0 bg-txt-cyan opacity-50 rounded-full"/>
                            <span className="relative">추가</span>
                        </button>
                    </div>
                </Link>
            </div>


            <div className="my-2 flex sm:flex-row flex-col">
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                지역 담당자 이름
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                담당 지역
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">김민재</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">부산 서면점</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                                    >
                                            <span aria-hidden
                                                  className="absolute inset-0 bg-red-400 opacity-50 rounded-full"></span>
                                        <span className="relative">삭제</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default LocalManagerListComponent;