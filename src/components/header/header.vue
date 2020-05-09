<template>
    <div id="header">
        <mt-header fixed>
            <mt-button slot="left">
                <i class="icon iconfont icon-zuojiantou_huaban"></i>
            </mt-button>
            <mt-button slot="right">
                <i class="icon iconfont icon-sousuo"></i>
            </mt-button>
            <mt-button slot="right">
                <i class="icon iconfont icon-fenxiang"></i>
            </mt-button>
            <mt-button slot="right">
                <i class="icon iconfont icon-faqipindan"></i>
            </mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style scoped>
#header {
    width: 100%;
}
.mint-header {
    height: 50px;
    background: transparent;
    background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,0));
}
.mint-header .icon {
    font-size: 22px;
}
.is-right .mint-button {
    margin-right: 15px;
}
.is-right .mint-button:last-child {
    margin-right: 0;
}
</style>