<template>
  <div class="login-box">
    <div class="title">短期负荷预测系统</div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      size="default"
      ref="ruleFormRef"
      label-width="120px"
      class="login-form"
      label-position="top"
      status-icon
    >
      <el-form-item label="" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          type="password"
          v-model.trim="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          "
        >
          <el-button style="width: 100%; color: #333"> 注册 </el-button>
          <el-button
            :loading="loading"
            style="width: 100%; background-color: #0d8369; color: #fff"
            @click="submitForm(ruleFormRef)"
          >
            登录
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { ElMessage } from 'element-plus'
  import type { FormInstance, FormRules } from 'element-plus'
  import { setToken } from '@/utils/auth'
  import { useCache } from '@/hooks/web/useCache'
  import { useAppStore } from '@/store/modules/app'
  import { loginApi } from '@/api/login'
  import router from '@/router'

  const appStore = useAppStore()
  const { wsCache } = useCache()

  const loading = ref(false)

  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    username: 'admin',
    password: 'admin',
    remember: false
  })

  const rules = reactive<FormRules>({
    username: [
      {
        required: true,
        message: 'Please input userName',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: 'Please select passWord',
        trigger: 'change'
      }
    ]
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        loading.value = true
        try {
          const res: any = await loginApi(ruleForm)
          console.log(res)
          if (res.code == 200) {
            wsCache.set(appStore.getUserInfo, {
              username: 'admin',
              password: 'admin'
            })
            setToken('admin')
            // window.location.href = '/'
            router.push('/')
          } else {
            ElMessage.error(res.message)
          }
        } finally {
          loading.value = false
        }
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<style lang="scss" scoped>
  .login-box {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/login/bg.jpg');
    background-size: 100% 100%;

    .title {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }

    .login-form {
      max-width: 480px;
      width: 30%;
      background-color: rgba(255, 255, 255, 0.279);
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    ::v-deep(.el-form-item__label) {
      color: #ff940a;
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>
