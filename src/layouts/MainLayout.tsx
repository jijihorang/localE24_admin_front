import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const Forms = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const ChevronDown = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

function BasicLayout({children}: {children: React.ReactNode}) {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    return (
        <div className={`flex h-screen bg-gray-50`}>
            {/* Desktop sidebar */}
            <aside className="z-20 hidden w-64 overflow-y-auto bg-side-navy md:block flex-shrink-0">
                <div className="py-4 text-neutral-800">
                    <Link to="/main" className="flex items-center justify-center mb-8 p-2">
                        <span
                            className="text-2xl font-bold bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-lg">Admin</span>
                    </Link>
                    <ul className="mt-6 space-y-2 text-white">
                        <li className="relative px-6 py-3">
                            <button
                                onClick={toggleProductDropdown}
                                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                            >
                        <span className="inline-flex items-center">
                            <Dashboard/>
                            <span className="ml-4 text-blue-950" >지역 담당자 관리</span>
                        </span>
                                <span
                                    className={`transition-transform duration-200 ${isProductDropdownOpen ? 'transform rotate-180' : ''}`}>
                            <ChevronDown/>
                        </span>
                            </button>
                            {isProductDropdownOpen && (
                                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md bg-gray-200">
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-txt-grey rounded">
                                        <Link className="w-full block" to="/localManagers">지역 담당자 리스트</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative px-6 py-3">
                            <button
                                onClick={toggleProductDropdown}
                                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                            >
                        <span className="inline-flex items-center">
                            <Dashboard/>
                            <span className="ml-4 text-white">제작자 신청서 관리</span>
                        </span>
                                <span
                                    className={`transition-transform duration-200 ${isProductDropdownOpen ? 'transform rotate-180' : ''}`}>
                            <ChevronDown/>
                        </span>
                            </button>
                            {isProductDropdownOpen && (
                                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md bg-yellow-400">
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-white rounded">
                                        <Link className="w-full block" to="/appliers">제작자 신청서 리스트</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative px-6 py-3">
                            <button
                                onClick={toggleProductDropdown}
                                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                            >
                        <span className="inline-flex items-center">
                            <Dashboard/>
                            <span className="ml-4 text-white">이벤트 지점 관리</span>
                        </span>
                                <span
                                    className={`transition-transform duration-200 ${isProductDropdownOpen ? 'transform rotate-180' : ''}`}>
                            <ChevronDown/>
                        </span>
                            </button>
                            {isProductDropdownOpen && (
                                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md bg-yellow-400">
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-white rounded">
                                        <Link className="w-full block" to="/eventLocations">이벤트 지점 신청서 리스트</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative px-6 py-3">
                            <button
                                onClick={toggleProductDropdown}
                                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                            >
                        <span className="inline-flex items-center">
                            <Dashboard/>
                            <span className="ml-4 text-white">이벤트 관리</span>
                        </span>
                                <span
                                    className={`transition-transform duration-200 ${isProductDropdownOpen ? 'transform rotate-180' : ''}`}>
                            <ChevronDown/>
                        </span>
                            </button>
                            {isProductDropdownOpen && (
                                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md bg-yellow-400">
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-white rounded">
                                        <Link className="w-full block" to="/eventLocations">이벤트 리스트</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                                to="">
                                <Forms/>
                                <span className="ml-4 text-white">통계</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-500"
                                to="">
                                <Forms/>
                                <span className="ml-4 text-white">문의</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <aside className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white md:hidden`}>
            </aside>

            <div className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-side-navy shadow-md">
                    <div className="w-full flex justify-end px-6">
                        <Link to='/login'
                            className="px-6 py-2 text-white rounded-full hover:bg-yellow-200 focus:outline-none hover:text-black focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300">
                            Login
                        </Link>
                    </div>
                </header>

                <main className="h-full overflow-y-auto">
                    <div className="container px-2 mx-auto grid m-1">
                        {children}
                    </div>
                </main>
            </div>
        </div>

    );
}

export default BasicLayout;