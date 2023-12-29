import { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { PiParkBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import "./css/app.css";

function App() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="App bg-blue-600 text-white bg-top h-full">
      <div className="max-w-full">
        <div className="flex align-middle h-16">
          <div className="flex pt-4 pl-7 pr-7 pb-4">
            <img src="/trip-com-logos.png" className="w-32" />
            <div className="w-96 pl-8 h-8">
              <input type="text" name="hoge" placeholder="都市、観光スポット、ホテルなど" 
              className="w-72 h-8 p-2 rounded border-none text-gray-600 focus:outline-none" />
            </div>
          </div>
          <div className="flex w-full justify-end h-16 pr-7 text-base">
            <div className="h-full">
              <div className="px-2 pt-4 pb-4">
                <a href=""><span>アプリ</span></a>
              </div>
            </div>
            <div className="h-full">
              <div className="px-2 pt-4 pb-4">
                <a href=""><span>ヘルプ</span></a>
              </div>
            </div>
            <div className="h-full">
              <div className="px-2 pt-4 pb-4">
                <a href=""><span>日本</span></a>
              </div>
            </div>
            <div className="h-full">
              <div className="px-2 pt-4 pb-4">
                <a href=""><span className="py-2 px-2 bg-gray-400 rounded" style={{ backgroundColor: "rgba(156, 163, 175, 0.3)" }}>予約を確認</span></a>
              </div>
            </div>
            <div className="h-full">
              <div className="px-2 pt-4 pb-4">
                <a href=""><span className="py-2 px-2 bg-white text-black rounded font-bold">ログイン / 会員登録</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-7 pl-7 pb-4">
        <ul className="flex">
          <li className="pr-8"><a className="text-base" title="ホテル・宿" >ホテル・宿</a></li>
          <li className="pr-8"><a className="text-base" title="航空券">航空券</a></li>
          <li className="pr-8"><a className="text-base" title="航空券＋ホテル">航空券＋ホテル<span>New</span></a></li>
          <li className="pr-8"><a className="text-base" title="遊び・体験">遊び・体験</a></li>
          <li className="pr-8"><a className="text-base" title="列車">列車</a></li>
          <li className="pr-8"><a className="text-base" title="レンタカー&空港送迎">レンタカー&空港送迎</a></li>
          <li className="pr-8"><a className="text-base" title="観光ガイド">観光ガイド</a></li>
          <li className="pr-8"><a className="text-base" title="観光ガイド">ギフトカード</a></li>
          <li className="pr-8"><a className="text-base" title="会員プログラム">会員プログラム</a></li>
          <li className="pr-8"><a className="text-base" title="お得情報">お得情報</a></li>
        </ul> 
      </div>
      <div className="search-area justify-center pt-14 pb-16">
        <div className="slogan text-center font-extrabold text-4xl">すべての旅は、ここから始まる</div>
        <div className="flex justify-center my-4 items-center">
          <div className="flex mr-8 items-center">
            <div className="bg-no-repeat bg-contain w-5 h-5 mr-2 font-bold" style={{backgroundImage: "url('https://ak-d.tripcdn.com/images/0AS6b1200090fx7s7F635.png')"}}></div>
            <div>安全なお支払い</div>
          </div>
          <div className="flex items-center">
            <div className="bg-no-repeat bg-contain w-5 h-5 mr-2 font-bold" style={{backgroundImage: "url('https://ak-d.tripcdn.com/images/0AS6b1200090fx7s7F635.png')"}}></div>
            <div>24時間年中無休</div>
          </div>
        </div>
        <div className="search-box">
          <div className="flex justify-center relative -mt-6 top-6">
            <ul className="flex bg-slate-600 p-3 rounded-full">
              <li className="flex items-center mr-4"><FaHotel className="mr-1" /><span className="text-base font-bold">ホテル・宿</span></li>
              <li className="flex items-center mr-4"><FaPlaneDeparture className="mr-1" /><span className="text-base font-bold">航空券</span></li>
              <li className="flex items-center mr-4"><PiBuildingsFill className="mr-1" /><span className="text-base font-bold">航空券＋ホテル</span></li>
              <li className="flex items-center mr-4"><FaTrainSubway className="mr-1" /><span className="text-base font-bold">列車</span></li>
              <li className="flex items-center mr-4"><FaCar className="mr-1" /><span className="text-base font-bold">レンタカー&空港送迎</span></li>
              <li className="flex items-center mr-4"><PiParkBold className="mr-1" /><span className="text-base font-bold">遊び・体験</span></li>
            </ul>
          </div>
          <div className="search-form w-full">
            <div id="search-hotel" className="px-6">
              <div className="flex -m-6t- justify-center">
                <ul className="flex justify-center bg-white w-5/6 pt-10 pr-5 pl-5 pb-5 rounded-t-md text-gray-500">
                  <li className="relative w-full border border-solid border-gray-400 rounded mr-2">
                    <div className="px-3">
                      <label htmlFor="hotel-destination" className="text-sm">目的地</label>
                      <div>
                        <input 
                          type="text" 
                          id="hotel-destination" 
                          name="hotel-destination" 
                          placeholder="都市、空港、地域、ランドマーク、ホテル名" 
                          className="w-full hover:border-b-2 hover:border-blue-500" 
                          style={{ outline:"none" }}
                          onFocus={ () => setIsFocus(true) }
                          onBlur={ () => setIsFocus(false) } />
                      </div>
                    </div>
                    { isFocus && (
                      <div className="absolute mt-2 border border-solid rounded bg-white overflow-y-scroll" style={{ width:"200%" }}>
                      <div className="mt-1">
                        <p className="flex items-center pl-2 h-8 font-bold bg-gray-100">検索履歴</p>
                      </div>
                      <div className="">
                        <p className="flex items-center pl-2 h-8 font-bold bg-gray-100">人気の目的地</p>
                        <ul className="flex flex-wrap w-full p-2"  style={{ width:"100%" }}>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">東京</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ソウル</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">大阪</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">福岡</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">京都</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">札幌</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">名古屋</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">横浜</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">バンコク</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">浦安</span></li>
                        </ul>
                      </div>
                      <div className="">
                        <p className="flex items-center pl-2 h-8 font-bold bg-gray-100">中華圏</p>
                        <ul className="flex flex-wrap w-full p-2"  style={{ width:"100%" }}>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">上海</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">台北</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">香港</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">北京</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">広州</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">深セン</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">マカオ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">大連</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">西安</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">杭州</span></li>
                        </ul>
                      </div>
                      <div className="">
                        <p className="flex items-center pl-2 h-8 font-bold bg-gray-100">韓国 & 東南アジア</p>
                        <ul className="flex flex-wrap w-full p-2"  style={{ width:"100%" }}>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ソウル</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">バンコク</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">釜山</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">シンガポール</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">マニラ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">仁川</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">バリ島</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ホーチミン</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">クアラルンプール</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">パタヤ</span></li>
                        </ul>
                      </div>
                      <div className="">
                        <p className="flex items-center pl-2 h-8 font-bold bg-gray-100">他の人気都市</p>
                        <ul className="flex flex-wrap w-full p-2"  style={{ width:"100%" }}>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">パリ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ロンドン</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ニューヨーク</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ドバイ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ホノルル</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">シドニー</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ローマ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">バルセロナ</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ロサンゼルス</span></li>
                          <li className="flex items-center h-11 text-m hover:bg-blue-400 hover:text-white hover:cursor-pointer" style={{ width:"20%" }}><span className="px-2">ラスベガス</span></li>
                        </ul>
                      </div>
                    </div>
                    )}
                  </li>
                  <li className="w-full border border-solid border-gray-400 rounded mr-2">
                    <div className="flex">
                      <div className="w-64 px-3">
                        <label htmlFor="hotel-destination" className="text-sm">チェックイン</label>
                        <li><input type="date" id="hotel-checkin" className="hover:border-b-2 hover:border-blue-500" name="hotel-checkin" /></li>
                      </div>
                      <div className="flex w-full justify-center items-center">
                        <span>1泊</span>
                      </div>
                      <div>
                        <label htmlFor="hotel-destination" className="text-sm">チェックアウト</label>
                        <li><input type="date" id="hotel-checkout" className="hover:border-b-2 hover:border-blue-500" name="hotel-checkout" /></li>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border border-solid border-gray-400 rounded mr-2">
                    <div className="px-3 w-full">
                      <div>
                        <div>
                          <label className="text-sm">宿泊人数および客室数</label>
                        </div>
                        <div className="w-full px-3 hover:border-b-2 hover:border-blue-500">
                          <span>1室</span>
                          <span>大人1名</span>
                          <span>子供0名</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-1/3 flex justify-center">
                    <div className="flex px-4 items-center rounded bg-blue-600 text-white">
                      <i><CiSearch className="mr-2" /></i>
                      <p>検索</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex w-5/6 items-center -mt-1 m-auto px-6 pb-5 bg-white rounded-b-md">
                <div className="mr-8">
                  <input type="checkbox" name="use-business" className="mr-2" />
                  <label className="text-gray-700">ビジネス利用</label>
                </div>
                <div>
                  <div className="text-gray-700 flex">
                    <label className="mr-4">ホテルランク</label>
                    <span className="flex items-center mr-4 px-2 bg-gray-200 rounded"><em className="mr-2">≤ 2</em><FaRegStar /></span>
                    <span className="flex items-center mr-4 px-2 bg-gray-200 rounded"><em className="mr-2">3</em><FaRegStar /></span>
                    <span className="flex items-center mr-4 px-2 bg-gray-200 rounded"><em className="mr-2">4</em><FaRegStar /></span>
                    <span className="flex items-center mr-4 px-2 bg-gray-200 rounded"><em className="mr-2">5</em><FaRegStar /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
