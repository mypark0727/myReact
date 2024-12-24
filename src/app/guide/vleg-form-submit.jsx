<template>
  <ul :class="['pubGuideList']">
    <li>
      <h2>test</h2>
      <div class="pubGuideBox">
        <!-- <iframe class="fullFrame" src="https://www.daum.net/" allowfullscreen></iframe> -->
        <!-- <iframe class="fullFrame" src="https://www.coupang.com" allowfullscreen></iframe> -->
      </div>
    </li>

    <!-- form태그 + button:type=button -->
    <li>
      <v-form class="check-area" ref="formsDom" >
        <label><span class="esse"></span> 체크박스 필수</label>
        <ul>
          <li>
            <v-checkbox class="check-box" label="Primary" value="val1" hide-details v-model="formsValue.check" :rules="formsRules.check" ></v-checkbox>
          </li>
          <li>
            <v-checkbox class="check-box" label="Default" value="val2" hide-details v-model="formsValue.check" :rules="formsRules.check" ></v-checkbox>
          </li>
        </ul>

        <v-radio-group class="radio-box" name="radio-name2" inline label="label" v-model="formsValue.radio" :rules="formsRules.radio" >
          <v-radio label="radio1" value="radio1"></v-radio>
          <v-radio label="radio2" value="radio2"></v-radio>
          <v-radio label="radio3" value="radio3"></v-radio>
        </v-radio-group>
      </v-form>
      
      <v-btn class="btn size-s bgc-primary" @click="handleSubmit" ><span class="txt">submit</span></v-btn>
    </li>

    <!-- form태그 + button:type=submit -->
    <li>
      <v-form class="check-area" id="formsId" @submit.prevent >
        <label><span class="esse"></span> 체크박스 필수</label>
        <ul>
          <li>
            <v-checkbox class="check-box" label="Primary" value="val1" hide-details v-model="formsValue2.check" :rules="formsRules.check" ></v-checkbox>
          </li>
          <li>
            <v-checkbox class="check-box" label="Default" value="val2" hide-details v-model="formsValue2.check" :rules="formsRules.check" ></v-checkbox>
          </li>
        </ul>

        <v-radio-group class="radio-box" name="radio-name2" inline label="label" v-model="formsValue2.radio" :rules="formsRules.radio" >
          <v-radio label="radio1" value="radio1"></v-radio>
          <v-radio label="radio2" value="radio2"></v-radio>
          <v-radio label="radio3" value="radio3"></v-radio>
        </v-radio-group>
      </v-form>
      
      <v-btn class="btn size-s bgc-primary" type="submit" form="formsId" ><span class="txt">submit</span></v-btn>
    </li>
  </ul>

</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount } from "vue";

// 체크박스 유효성검사
const formsDom = ref(null);
const formsValue = reactive({
  check:[],
  radio:'',
});
const formsValue2 = reactive({
  check:[],
  radio:'',
});

const formsRules = reactive({
  check: [
    value => {
      if (value?.length > 0) {
        //console.log('체크박스 체크')
        return true
      } else {
        //console.log('체크박스 미체크')
        return false;
      }
    }
  ],
  radio: [
    value => {
      if (value !== '') {
        //console.log('라디오 체크')
        return true
      } else {
        //console.log('라디오 미체크')
        return false;
      }
    }
  ],
});

// 유효성 검사 함수
async function validate () {
  const {valid} = await formsDom.value.validate();
  return valid;
}

// 버튼 클릭시 유효성 결과에 따른 핸들러
async function handleSubmit() {
  const _isValid = await validate();

  if ( _isValid ) {
    console.log('유효성 통과 & 로직');
  } else {
    console.log('유효성 실패 & 로직');
  }
}

</script>