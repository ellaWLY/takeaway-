<template>
    <div id="orderFood">
        <div class="shop_recommend">
            <div class="recommend_title">商家推荐</div>
            <div class="recommed_list">
                <div class="list" v-for="list in recommedList">
                    <img :src="list.img" alt="">
                    <div class="list_box">
                        <div class="list-title">{{list.name}}</div>
                        <div class="list_sale">
                            <span v-show="list.sale">月售 {{list.saleNum}}</span>
                            <span v-show="list.goodRev">好评率 {{list.goodNum}}%</span>
                        </div>
                        <div class="list_money">
                            ￥<span>{{list.price}}</span>起
                        </div>
                        <span class="add">
                            <i class="icon iconfont icon-xianshi_tianjiatianchong"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>

export default {
    name: 'orderFood',
    data() {
        return {
            recommedList: [
                {
                    img: require('../../assets/a.jpg'),
                    name: '奇乐盐酥鸡',
                    sale: true,
                    saleNum: 52,
                    goodRev: false,
                    goodNum: 0,
                    price: 23
                },
                {
                    img: require('../../assets/b.jpg'),
                    name: '僵尸鸡翅',
                    sale: true,
                    saleNum: 202,
                    goodRev: true,
                    goodNum: 92,
                    price: 89
                },
                {
                    img: require('../../assets/c.jpg'),
                    name: '铁锹韩式牛肉饭套餐',
                    sale: true,
                    saleNum: 30,
                    goodRev: false,
                    goodNum: 0,
                    price: 60
                },
                {
                    img: require('../../assets/d.jpg'),
                    name: '香脆炸鸡',
                    sale: true,
                    saleNum: 280,
                    goodRev: true,
                    goodNum: 96,
                    price: 86
                }
            ]
        }
    },
    methods:{

    }
}

</script>

<style scoped>
.shop_recommend {
    width: 100%;
    background: #fff;
}
.recommend_title {
    padding: 0.35rem 0.3rem 0.25rem;
    font-size: 0.34rem;
    color: #333;
    font-weight: bold;
    text-align: left;
}
.recommed_list {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    padding-bottom: 0.5rem;
}
.list {
    width: 36%;
    display: inline-block;
    margin-right: 0.2rem;
}
.list:first-child {
    margin-left: 0.3rem;
}
.list img {
    display: block;
    width: 100%;
    height: 2.6rem;
    border-radius: 4px 4px 0 0;
}
.list_box {
    text-align: left;
    padding: 0.2rem 0.1rem 0.3rem;
    box-shadow: 0px 0px 9px 4px rgba(0,0,0,.1);
    border-radius: 0 0 4px 4px;
    position: relative;
}
.list-title {
    font-size: 0.3rem;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list_sale {
    font-size: 0.24rem;
    color: rgb(153,153,153);
    padding: 0.15rem 0;
}
.list_money {
    color: rgb(236,96,69);
    font-size: 0.24rem;
}
.list_money span {
    font-weight: bold;
    font-size: 0.36rem;
    display: inline-block;
    margin-right: 4px;
}
.add {
    position: absolute;
    right: 0.1rem;
    bottom: 0.2rem;
}
.add .icon {
    color: rgb(73,147,247);
    font-size: 0.42rem;
}
</style>