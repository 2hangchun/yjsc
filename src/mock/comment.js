import Mock from 'mockjs';

const Random = Mock.Random
const generateData = () => Mock.mock({
    'hasMore|1-2': true,
    'data|10': [
        {
            username: /1[3-9][0-9](\*){4}[0-9]{4}/,
            comment: () => Random.cparagraph(2, 5),
            'star|1-5': 1
        }
    ]
})

Mock.mock(RegExp('^/comment.*'), 'get', (req) => {
    const id = decodeURI(req.url.split('=')[1])
    console.log('服务端收到请求：/comment/' + id);
    return generateData()
})