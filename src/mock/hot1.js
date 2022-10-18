import Mock from 'mockjs';

const Random = Mock.Random
Mock.mock("/hot1", (req) => {
    const { city } = JSON.parse(req.body).params
    return {
        data: [
            {
                id: "1",
                title: `${city}落地灯`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_luodideng.png',
                link: 'http://iwenwiki.com'
            },
            {
                id: "2",
                title: `${city}置物架`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_zhiwujia.png',
                link: 'http://iwenwiki.com'
            },
            {
                id: "3",
                title: `${city}矮脚灯`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_aijiaodeng.png',
                link: 'http://iwenwiki.com'
            },
            {
                id: "4",
                title: `${city}毛巾`,
                imgUrl: 'http://iwenwiki.com/api/livable/homehot/img_maojin.png',
                link: 'http://iwenwiki.com'
            },
        ]
    }
});

