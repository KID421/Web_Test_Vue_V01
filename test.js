Vue.component('test-a', {
    template: '<div class="test-a">我是測試區域</div>'
})

var appA = new Vue({
    el: '#test-a'
});

Vue.component('product-item', {
    props: ['product'],
    template: '<li>{{ product.text }}</li>'
})

var appB = new Vue({
    el: '#drink',
    data: {
        products: [
            {id: 0, text: '奶茶'},
            {id: 1, text: '綠茶'},
            {id: 2, text: '紅茶'}
        ]
    }
});

Vue.component('navbar', {
    template: `
        <nav>
            <a href="./about.html">關於我</a>
            <a href="./works.html">作品集</a>
            <a href="./index.html">首頁</a>
            <a href="./news.html">最新消息</a>
            <a href="./contact.html">聯絡我</a>
        </nav>
    `
})

var navbar = new Vue({
    el: '#navbar'
});