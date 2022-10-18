import Mock from 'mockjs';

const Random = Mock.Random
Mock.mock("/hot2", (req) => {
    const { city } = JSON.parse(req.body).params
    return {
        data: [
            {
                id: "1",
                title: `${city}抱枕`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_baozhen.png'
            },
            {
                id: "2",
                title: `${city}储物柜`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_chuwugui.png'
            },
            {
                id: "3",
                title: `${city}镜子`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_jingzi.png'
            },
            {
                id: "4",
                title: `${city}照明`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_zhaoming.png'
            },
        ]
    }
});

