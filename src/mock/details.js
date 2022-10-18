import Mock from 'mockjs';

const Random = Mock.Random
const generateData = (params) => Mock.mock({
    'imgs|5-10': [
        () => Random.image('800x600', Random.color(), '#FFFFFF', `Mock.js params:${params}`)
    ],
    title: '豪宅 · 使馆壹号院4居室-南',
    price: () => Random.integer(10000, 20000),
    rentType: "整租",
    houseType: "273.97 ㎡",
    info: {
        year: '2002年',
        type: '4室1厅',
        level: '17/19层',
        'style|1': ['精装房', '毛胚房'],
        'orientation|1': [
            '朝南',
            '朝北',
            '朝东',
            '朝西'
        ]

    },
    'isStore|1-2': true,
    id: params
})
Mock.mock(RegExp('/details.*'), 'get', (req) => {
    const keyword = decodeURI(req.url.split('=')[1])
    console.log('服务端收到请求：/search/' + keyword);
    return generateData(keyword)
})