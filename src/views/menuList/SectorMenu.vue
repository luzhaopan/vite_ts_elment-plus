<template>
  <div>
    <div class="menuHolder">
      <div class="menuWindow">
        <ul class="p1">
          <li class="s1">
            <a href="#url">导航菜单</a>
            <ul class="p2">
              <li class="s2">
                <a href="#"><span>首页</span></a>
              </li>
              <li class="s2">
                <a href="#url"><span>服务</span></a>
                <ul class="p3 a4">
                  <li><a href="#">打印</a></li>
                  <li><a href="#">编辑</a></li>
                  <li><a href="#">保管</a></li>
                  <li><a href="#">保管2</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>联系</span></a>
                <ul class="p3 a6">
                  <li><a href="#">支持</a></li>
                  <li><a href="#">销售</a></li>
                  <li><a href="#">购买</a></li>
                  <li><a href="#">摄影师</a></li>
                  <li><a href="#">零售商</a></li>
                  <li><a href="#">常规</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>商店</span></a>
                <ul class="p3 a3">
                  <li><a href="#">南区</a></li>
                  <li><a href="#">北区</a></li>
                  <li><a href="#">中心区</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>联系我们</span></a>
                <ul class="p3 a3">
                  <li><a href="#">邮箱</a></li>
                  <li><a href="#">邮递</a></li>
                  <li><a href="#">电话</a></li>
                </ul>
              </li>
              <li class="s2 b6">
                <a href="#url"><span>销量</span></a>
                <ul class="p3 a5">
                  <li><a href="#">数码单反机身</a></li>
                  <li><a href="#">镜头</a></li>
                  <li><a href="#">闪光枪</a></li>
                  <li><a href="#">三角架</a></li>
                  <li><a href="#">过滤器</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .menuHolder {
    width: 100px;
    height: 100px;
    margin: 0 0 250px 0;
    position: relative;
    z-index: 100;
  }
  .menuHolder ul {
    padding: 0px;
    margin: 0;
    list-style: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
  }

  .menuHolder ul li a {
    color: #000;
    text-decoration: none;
    font: bold 13px/30px arial, sans-serif;
    text-align: center;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);
    transform-origin: 0 0;
  }
  .menuHolder ul.p1 li {
    position: absolute;
    left: 0;
    top: 0;
  }
  .menuHolder ul.p2 {
    z-index: -1;
  }
  .menuHolder ul.p3 {
    z-index: -1;
  }

  .menuHolder li.s1 > a {
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    background: #c8c8c8;
    border-radius: 0 0 100px 0;
  }

  .menuHolder li.s2 > a {
    position: absolute;
    display: block;
    width: 100px;
    padding-left: 100px;
    height: 200px;
    background: #ddd;
    border-radius: 0 0 200px 0;
  }

  .menuHolder ul.p3 li a {
    position: absolute;
    display: block;
    width: 100px;
    padding-left: 200px;
    height: 300px;
    background: #999;
    border-radius: 0 0 300px 0;
  }

  .menuHolder ul ul {
    transform-origin: 0 0;
    transform: rotate(90deg);
    transition: 1s;
  }

  .menuHolder li.s2:nth-of-type(6) > a {
    background: #888;
    transform: rotate(75deg);
  }
  .menuHolder li.s2:nth-of-type(5) > a {
    background: #999;
    transform: rotate(60deg);
  }
  .menuHolder li.s2:nth-of-type(4) > a {
    background: #aaa;
    transform: rotate(45deg);
  }
  .menuHolder li.s2:nth-of-type(3) > a {
    background: #bbb;
    transform: rotate(30deg);
  }
  .menuHolder li.s2:nth-of-type(2) > a {
    background: #ccc;
    transform: rotate(15deg);
  }

  .menuHolder .a6 li:nth-of-type(6) > a {
    background: #444;
    transform: rotate(75deg);
  }
  .menuHolder .a6 li:nth-of-type(5) > a {
    background: #555;
    transform: rotate(60deg);
  }
  .menuHolder .a6 li:nth-of-type(4) > a {
    background: #666;
    transform: rotate(45deg);
  }
  .menuHolder .a6 li:nth-of-type(3) > a {
    background: #777;
    transform: rotate(30deg);
  }
  .menuHolder .a6 li:nth-of-type(2) > a {
    background: #888;
    transform: rotate(15deg);
  }

  .menuHolder .a5 li:nth-of-type(5) > a {
    background: #555;
    transform: rotate(72deg);
  }
  .menuHolder .a5 li:nth-of-type(4) > a {
    background: #666;
    transform: rotate(54deg);
  }
  .menuHolder .a5 li:nth-of-type(3) > a {
    background: #777;
    transform: rotate(36deg);
  }
  .menuHolder .a5 li:nth-of-type(2) > a {
    background: #888;
    transform: rotate(18deg);
  }
  .menuHolder .a4 li:nth-of-type(4) > a {
    background: #666;
    transform: rotate(67.5deg);
  }
  .menuHolder .a4 li:nth-of-type(3) > a {
    background: #777;
    transform: rotate(45deg);
  }
  .menuHolder .a4 li:nth-of-type(2) > a {
    background: #888;
    transform: rotate(22.5deg);
  }

  .menuHolder .a3 li:nth-of-type(3) > a {
    background: #777;
    transform: rotate(60deg);
  }
  .menuHolder .a3 li:nth-of-type(2) > a {
    background: #888;
    transform: rotate(30deg);
  }

  .menuHolder li.s1:hover ul.p2 {
    transform: rotate(0deg);
  }

  .menuHolder li.s2:hover ul.p3 {
    transform: rotate(0deg);
  }

  .menuHolder ul li:hover > a {
    background: #f00;
    color: #fff;
  }
  .menuHolder li.s2:hover > a {
    background: #d00;
    color: #fff;
  }
  .menuHolder .a6 li:hover > a {
    background: #b00;
    color: #fff;
  }
  .menuHolder .a5 li:hover > a {
    background: #b00;
    color: #fff;
  }
  .menuHolder .a4 li:hover > a {
    background: #b00;
    color: #fff;
  }
  .menuHolder .a3 li:hover > a {
    background: #b00;
    color: #fff;
  }
</style>
