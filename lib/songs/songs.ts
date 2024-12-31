export interface ISong{
    id : number, 
    title : string,
    author : string,
    time : number, // seconds
    genre : string,
    source : string,
    img: string,
}

export const mockedSongs : ISong[] = [
    {
        id : 0,
        title: "Nhắn Nhủ",
        author: "Ronboogz",
        time : 96,
        genre: "Ballad",
        source : "audio/nhanhu.mp3",
        img: "image/nhannhu.jpg"
    },
    {
        id : 1,
        title: "Lan Man",
        author: "Ronboogz", 
        time : 440,
        genre : "Chill",
        source : "audio/lanman.mp3",
        img: "image/2.jpg"
    },
    {
        id: 2,
        title: "Anh chỉ muốn",
        author: "Ronboogz",
        time: 109,
        genre: "Boom Boom",
        source : "audio/anhchimuon.mp3",
        img: "image/1.jpg"
    },
    {
        id: 3,
        title: "Hai đứa trẻ",
        author: "Rongboogz",
        time: 106,
        genre: "Wave",
        source : "audio/hai.mp3",
        img: "image/5.jpg"
    },
]