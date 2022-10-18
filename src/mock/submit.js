import Mock from 'mockjs';

Mock.mock(RegExp('/order/submit/comment'), 'post', (req) => {
    console.log(req)
    console.log(JSON.parse(req.body))
    return {
        status: 200,
        msg: '评论成功'
    }
})