<template>
  <div class="flex h-full w-full absolute items-center justify-center">
    <div class="h-screen w-screen bg-black opacity-60 absolute z-40"></div>
    <div class="inline-flex flex-col bg-gray-800 h-2/3 w-2/3 z-50 rounded-lg">
      <div
        class="
          inline-flex
          flex-row
          justify-center
          mt-4
          font-semibold
          text-white
          h-1/12
          w-full
          border-b border-gray-700
        "
      >
        <div class="flex items-center h-8 mr-1">
          We need to ask some questions to tailor your
        </div>
        <div
          class="
            bg-indigo-600
            text-white
            h-8
            flex
            items-center
            justify-center
            p-1
            rounded-md
          "
        >
          budget plan
        </div>
        <div class="flex items-center h-8 ml-1">to your needs. <div class="ml-2 text-gray-300">step {{$store.state.modalStage}}/7</div></div>
      </div>
      <div
        class="h-11/12 w-full inline-flex flex-col items-center justify-center"
      >
        <div class="font-semibold text-white m-2">
          {{$store.state.questions[$store.state.modalStage-1]}}
        </div>
        <div
          v-if="this.$store.state.modalStage < 7 && this.$store.state.modalStage > 1"
          class="inline-flex justify-center items-center"
        >
          <div
            @click="nextStep(2)"
            class="
              flex
              items-center
              justify-center
              select-none
              px-7
              py-2
              font-semibold
              rounded-3xl
              bg-indigo-600
              hover:bg-indigo-700
              text-gray-300
              cursor-pointer
              duration-200
              m-1
            "
          >
            yes
          </div>
          <div
            @click="nextStep(1)"
            class="
              flex
              items-center
              justify-center
              select-none
              px-7
              py-2
              font-semibold
              rounded-3xl
              bg-indigo-600
              hover:bg-indigo-700
              text-gray-300
              cursor-pointer
              duration-200
              m-1
            "
          >
            maybe
          </div>
          <div
            @click="nextStep(0)"
            class="
              flex
              items-center
              justify-center
              select-none
              px-7
              py-2
              font-semibold
              rounded-3xl
              bg-indigo-600
              hover:bg-indigo-700
              text-gray-300
              cursor-pointer
              duration-200
              m-1
            "
          >
            no
          </div>
        </div>
        <div v-else-if="this.$store.state.modalStage === 1" class="inline-flex justify-between items-center">
          <input
            name="income"
            v-model="income"
            class="h-9 w-48 rounded-3xl outline-none px-4"
            placeholder="Your income"
          />
          <div
            @click="nextStep()"
            class="
              flex
              items-center
              justify-center
              select-none
              px-6
              py-2
              font-semibold
              rounded-3xl
              bg-indigo-600
              hover:bg-indigo-700
              text-gray-300
              cursor-pointer
              duration-200
              m-1
            "
          >
            continue
          </div>
        </div>
        <div v-else class="inline-flex flex-col justify-center items-center">
          <h1 class="text-gray-300 font-semibold m-2 text-lg">
            You are all set!
          </h1>
          <div
            @click="nextStep()"
            class="
              flex
              items-center
              justify-center
              select-none
              px-6
              py-2
              font-semibold
              rounded-3xl
              bg-indigo-600
              hover:bg-indigo-700
              text-gray-300
              cursor-pointer
              duration-200
              m-1
            "
          >
            close
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Questionaire",
  data() {
    return {
      income: 0,
    };
  },
  computed: {
    modalStage() {
      return this.$store.state.modalStage;
    },
    questionArray() {
      return this.$store.state.questionsArray;
    },
  },
  methods: {
    close(){
      this.$store.commit("changeShowModal",false);
    },
    nextStepIncome() {
      const { income } = this;
      this.$store.commit("updateIncome", income);
      this.$store.commit("updateModalState", this.modalStage);
    },
    nextStep(answer) {
    if(this.modalStage < 7) {
        this.$store.commit("updateModalState", this.modalStage);
        this.$store.commit("updateQuestionsSum", answer);
    }else {
        this.$store.commit("changeShowModal", false);
        let url = "http://127.0.0.1:8000/users/"+localStorage.getItem("username")+"+/budgetCalculate"
        axios.post(url,{
              "name":localStorage.getItem("username"),
              "income": Math.random(1.500000),
              "questionsSum":Math.random(0,1)
          }).then(() => {
              let url = "http://127.0.0.1:8000/users/"+localStorage.getItem("username")+"+/get"
              axios.post(url,{
                  "token":localStorage.getItem("token"),
              }).then(response => {
                  localStorage.setItem("data",response.data)
              })
          }).catch(error => {
              console.log(error);
          });
      }
    },
  },
};
</script>