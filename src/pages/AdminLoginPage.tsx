import { Link } from 'react-router-dom';

function AdminLoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden p-8">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">로그인</h1>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="아이디"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8~30자)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <label className="flex items-center text-gray-600">
                                <input type="radio" name="remember" className="mr-2"/>
                                아이디 저장
                            </label>
                        </div>
                        <div className="flex space-x-3 text-blue-500 text-sm">
                            <Link to="#">아이디 찾기</Link>
                            <Link to="#">비밀번호 찾기</Link>
                        </div>
                    </div>
                    <Link
                        to='/main'
                        className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-md text-lg font-semibold transition-colors">
                        로그인
                    </Link>
                </form>
                <div className="mt-6 flex justify-around items-center">
                    <Link to="#" className="flex flex-col items-center">
                        <img src="" alt="카카오 로그인" className="w-10 h-10"/>
                        <span className="text-sm text-gray-500 mt-2">카카오 로그인</span>
                    </Link>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                    <Link to="#" className="text-blue-500">회원가입</Link>
                </p>
            </div>
        </div>
    );
}

export default AdminLoginPage;