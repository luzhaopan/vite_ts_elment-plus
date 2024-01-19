<template>
  <div class="control">
    <!-- 加add 减subtract -->

    <!-- 云台控件 摄像头控制 -->
    <div class="camera-control" v-show="isShowCameraControl">
      <div class="camera-control-left flex">
        <div class="content-box">
          <!-- 拼接辅助线 -->
          <!-- <div class="line1"></div>
          <div class="line2"></div> -->
          <!-- 展示圆环 -->
          <div
            class="img-box"
            :class="'img-box' + (i + 1)"
            v-for="(url, i) in imgArr"
            :key="i"
          >
            <img
              @mouseenter="handleMouseEnter(i)"
              @mouseleave="handleMouseLeave(i)"
              :src="url"
              alt=""
            />
          </div>
          <!-- 绑定事件的透明圆环 -->
          <div id="circle0">
            <div id="left">
              <div
                class="circle-left"
                @mouseenter="handleMouseEnter(1)"
                @mouseleave="handleMouseLeave(1)"
                id="circle2"
              ></div>
              <div
                class="circle-left"
                @mouseenter="handleMouseEnter(2)"
                @mouseleave="handleMouseLeave(2)"
                id="circle3"
              ></div>
              <div
                class="circle-left"
                @mouseenter="handleMouseEnter(3)"
                @mouseleave="handleMouseLeave(3)"
                id="circle4"
              ></div>
              <div
                class="circle-left"
                @mouseenter="handleMouseEnter(4)"
                @mouseleave="handleMouseLeave(4)"
                id="circle5"
              ></div>
            </div>
            <div id="right">
              <div
                class="circle-right"
                @mouseenter="handleMouseEnter(8)"
                @mouseleave="handleMouseLeave(8)"
                id="circle9"
              ></div>
              <div
                class="circle-right"
                @mouseenter="handleMouseEnter(7)"
                @mouseleave="handleMouseLeave(7)"
                id="circle8"
              ></div>
              <div
                class="circle-right"
                @mouseenter="handleMouseEnter(6)"
                @mouseleave="handleMouseLeave(6)"
                id="circle7"
              ></div>
              <div
                class="circle-right"
                @mouseenter="handleMouseEnter(5)"
                @mouseleave="handleMouseLeave(5)"
                id="circle6"
              ></div>
            </div>
            <div class="center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img from '@/assets/vue.svg'
  import img2 from '@/assets/vue.svg'
  export default {
    name: '',
    components: {},
    props: [],
    data() {
      return {
        isShowCameraControl: false,
        imgArr: [img, img, img, img, img, img, img, img]
      }
    },
    mounted() {},
    methods: {
      handleMouseEnter(i) {
        this.$set(this.imgArr, i - 1, img2)
      },
      handleMouseLeave(i) {
        this.$set(this.imgArr, i - 1, img)
      },
      setCameraControl() {
        this.isShowCameraControl = !this.isShowCameraControl
      },
      screenfull() {
        this.$emit('screenfull')
      },
      toScale(str) {
        console.log('缩放', str)
      },
      toZoom(str) {
        console.log('变焦', str)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .control {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    padding: 15px 7px;
    display: flex;
    justify-content: flex-end;

    &_img_box {
      cursor: pointer;
      padding: 10px 10px 6px;
      margin-right: 10px;
      background: linear-gradient(
        162deg,
        rgba(3, 33, 120, 0.9) 0%,
        rgba(3, 33, 120, 0.4) 100%
      );
      border-radius: 3px;
      opacity: 1;
      border: 1px solid;
      border-image: linear-gradient(
          180deg,
          rgba(18, 106, 205, 1),
          rgba(11, 87, 173, 0)
        )
        1 1;

      > img {
        width: 20px;
        height: 20px;
      }
    }

    .camera-control {
      position: absolute;
      display: flex;
      top: -150px;
      right: 16px;
      padding: 6px 10px;
      width: 319px;
      height: 150px;
      background: linear-gradient(
        to bottom right,
        #032078ab 30%,
        #0b57ad60 100%
      );

      > div {
        flex: 1;
      }
      &-left {
        .content-box {
          position: relative;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: url('@/assets/image/circle.png');
          background-size: 125px 125px;

          .circle-left {
            width: 62.5px;
            height: 125px;
            border-radius: 0px 62.5px 62.5px 0px;
            position: absolute;
            right: 0;
            transform-origin: 0 50%;
          }
          .circle-right {
            width: 62.5px;
            height: 125px;
            border-radius: 62.5px 0px 0px 62.5px;
            position: absolute;
            right: 0;
            transform-origin: 100% 50%;
          }
          #circle0 {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 125px;
            height: 125px;
            border-radius: 62.5px;
            position: relative;
            transform: rotate(-22.5deg);

            .center {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }

          #circle3 {
            transform: rotate(45deg);
          }
          #circle4 {
            transform: rotate(90deg);
          }
          #circle5 {
            transform: rotate(135deg);
          }
          #circle6 {
            transform: rotate(-135deg);
          }
          #circle7 {
            transform: rotate(270deg);
          }
          #circle8 {
            transform: rotate(315deg);
          }
          #circle9 {
            transform: rotate(45deg);
          }

          #left {
            clip: rect(0px 62.5px 125px 0px);
            position: absolute;
            right: 0px;
            width: 62.5px;
            height: 125px;
            overflow: hidden;
          }
          #right {
            clip: rect(0px 62.5px 125px 0px);
            position: absolute;
            left: 0px;
            width: 62.5px;
            height: 125px;
            overflow: hidden;
          }

          .line1 {
            position: absolute;
            width: 125px;
            height: 2px;
            background: red;
            left: 50%;
            margin-left: -62.5px;
            top: 50%;
            margin-top: -1px;
            z-index: 999;
          }

          .line2 {
            position: absolute;
            left: 50%;
            margin-top: -62.5px;
            top: 50%;
            margin-left: -1px;
            width: 2px;
            height: 125px;
            background: red;
            z-index: 999;
          }

          .img-box {
            // width: 54px;
            // height: 58px;
            position: absolute;

            // > img {
            //     width: 54px;
            //     height: 58px;
            // }
          }

          .img-box1 {
            left: 31px;
            top: -14px;
            transform: rotate(-90deg);
          }

          .img-box2 {
            left: 64px;
            top: -2px;
            transform: rotate(-45deg);
          }

          .img-box3 {
            left: 79px;
            top: 29px;
            transform: rotate(0deg);
          }

          .img-box4 {
            left: 67px;
            top: 62px;
            transform: rotate(46deg);
          }

          .img-box5 {
            left: 36px;
            top: 77px;
            transform: rotate(90deg);
          }

          .img-box6 {
            left: 4px;
            top: 66px;
            transform: rotate(135deg);
          }

          .img-box7 {
            left: -12px;
            top: 35px;
            transform: rotate(-180deg);
          }

          .img-box8 {
            left: -1px;
            top: 2px;
            transform: rotate(-135deg);
          }
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #a5c3ff;

        .btn-list {
          display: flex;
          align-items: center;
          margin: 12px 0px;
        }
        .btn-box {
          width: 70px;
          height: 32px;
          margin-left: 12px;
          background: linear-gradient(180deg, #009afc 0%, #003cb1 100%);
          box-shadow: inset 0px 2px 4px 0px #08ebff,
            0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-radius: 2px;
          border: 1px solid #0e2977;
          display: flex;

          > div {
            width: 35px;
            height: 32px;
            cursor: pointer;
            > img {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
</style>
