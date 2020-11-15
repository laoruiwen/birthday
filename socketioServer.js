//创建一个http服务器
var app = require('http').createServer()
// 把http封装成io对象
var io = require('socket.io')(app)

// 运行的服务器端口号
var PORT = 3000

app.listen(PORT)

io.of('/barrage').on('connection', function (socket) {
    console.log('connection')
    socket.on('init', function () {
        console.log('init')
        io.of('/barrage').emit('birthdayInfo', {
            customer: '测试人名',
            restaurantName: '测试餐厅',
            tableNumber: '测试桌号',
            gender: 0
        })
    })
})

setInterval(function () {
    io.of('/barrage').emit('birthdayInfo', {
        customer: '测试人名',
        restaurantName: '测试餐厅',
        tableNumber: '测试桌号',
        gender: 1
    })
}, 10 * 1000)

console.log('服务已启动 http://localhost:' + PORT)