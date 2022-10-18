import Mock from 'mockjs';

const Random = Mock.Random

// console.log(Mock.mock(Random.image('800x600', '#000', '#fff', 'default'))) 


const generateData = (params) => Mock.mock({
    'hasMore|1-2': false,
    'data|5-10': [
        {
            id: '@id',
            title: '豪宅 · 使馆壹号院4居室-南',
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: () => `<h3>${Random.integer(10000, 20000)}</h3>`,
            rentType: "整租",
            img: () => Random.image('800x600', Random.color(), '#FFFFFF', `Mock.js params:${params}`)
        }
    ]
})

Mock.mock(RegExp('/search.*'), 'get', (req) => {
    const keyword = decodeURI(req.url.split('=')[1])
    // console.log('服务端收到请求：/search/' + keyword);
    return generateData(keyword)
    /* return {
        // 'hasMore': Random.boolean(1, 2, false),
        'hasMore': true,
        data: [
            {
                id: Random.id(),
                title: '豪宅 · 使馆壹号院4居室-南',
                houseType: "17/19层| 4室1厅 - 273.97 ㎡",
                price: "<h3>130000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/1.jpg"
            },
            {
                id: Random.id(),
                title: '豪宅 · 金茂府东区3居室-南北',
                houseType: "201.27 ㎡| 15/24层| 3室1厅",
                price: "<h3>40000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/2.JPG"
            },
            {
                id: Random.id(),
                title: '豪宅 · 使馆壹号院2居室-南',
                houseType: "204 ㎡| 2/19层| 2室1厅",
                price: "<h3>42000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/3.jpg"
            },
            {
                id: Random.id(),
                title: '豪宅 · 使馆壹号院3居室-南',
                houseType: "237 ㎡| 13/19层| 3室1厅",
                price: "<h3>80000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/4.JPG"
            },
            {
                id: Random.id(),
                title: '豪宅 · 棕榈泉国际公寓2居室-南北',
                houseType: "176.52 ㎡| 2/30层| 2室1厅",
                price: "<h3>33000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/5.jpg"
            },
            {
                id: Random.id(),
                title: '豪宅 · 华悦国际公寓6居室-南',
                houseType: "235.76 ㎡| 7/24层| 3室2厅",
                price: "<h3>50000</h3>",
                rentType: "整租",
                img: "http://www.iwenwiki.com/api/livable/search/6.jpg"
            }
        ]

    } */
})