import { MdLyrics } from 'react-icons/md';
import 안아줘 from '../img/안아줘.jpg';
import marryme from "../img/marry_me.jpg";
import 다시사랑한다말할까 from '../img/다시 사랑한다 말할까.jpg';


const MusicChartEach = () => {

    //필요한 항목들
    //체크여부버튼, 번호, 앨범그림, 곡정보버튼(이미지), 곡제목/가수
    //체크여부

    const sampleData = [
        {
            checkState: false,
            index: 1,
            img: 안아줘,
            musicName: '안아줘',
            musicSinger: '김태균'
        },
        {
            checkState: true,
            index: 2,
            img: marryme,
            musicName: 'marry me',
            musicSinger: '조아라'
        },
        {
            checkState: false,
            index: 3,
            img: 다시사랑한다말할까,
            musicName: '다시 사랑한다 말할까',
            musicSinger: '정교성'
        }
    ];

    const musicChartEachMap = sampleData.map((musicChartData, index) =>
        (
            <div className="musicChartEach" key={index}>
                <input type="checkbox" title={musicChartData.musicName+' 곡선택'} />
                <span className='musicIndex'>{musicChartData.index}</span>
                <img className='albumImg' src={musicChartData.img} alt="??" />
                <MdLyrics className="lyricsButton" title={musicChartData.musicName+' 곡정보'}/>
                <div className='musicInfo'>
                    <span className='musicName' title={musicChartData.musicName+' 재생'} >{musicChartData.musicName}</span>
                    <span className='musicSinger' title={musicChartData.musicSinger+' - 페이지로 이동'} >{musicChartData.musicSinger}</span>
                </div>
            </div>
        ));

    return (
        <>
            {sampleData.length > 0 ?  musicChartEachMap  : <div> 데이터가 없습니다. </div>}
        </>
    );
};

export default MusicChartEach;