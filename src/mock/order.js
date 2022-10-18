import Mock from 'mockjs';

const Random = Mock.Random
const generateData = () => {
    return Mock.mock({
        'data|5-10': [
            {
                id: '@id',
                title: "整租 · 杨庄北区2居室-南北",
                houseType: "1室1厅1卫 - 48m²",
                price: "4800",
                rentType: "整租",
                'commentState|1': [0, 2],// 0：未评价  1：评价中   2：已评价
                img: () => Random.image('800x600', Random.color(), '#ffffff', 'Mockjs')
            }
        ]
    })
}

Mock.mock(RegExp('/order/comment.*'), 'get', (req) => {
    console.log(req);
    return generateData()
})

