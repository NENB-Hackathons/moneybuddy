<template>
    <div class="flex h-full w-full absolute items-center justify-center">
        <div class="h-full w-full bg-black opacity-60 absolute z-40"></div>
        <div class="inline-flex flex-col  bg-gray-800 h-2/3 w-2/3 z-50 rounded-lg">
           <div class="inline-flex flex-row justify-center  mt-4  font-semibold text-white h-1/12 w-full border-b border-gray-700">
                <div class="flex items-center h-8 mr-1">
                    We need to ask some questions to tailor your
                </div>
                <div class="bg-indigo-600 text-white h-8 flex items-center justify-center p-1 rounded-md">
                    budget plan
                </div>
                <div class="flex items-center h-8 ml-1">
                    to your needs.
                </div>
           </div>
           <div class="h-11/12 w-full inline-flex flex-col items-center justify-center">
                <div class=" font-semibold text-white m-2">
                    Sample question here : {{$store.state.modalStage}}
                </div>
                <div v-if="this.$store.state.modalStage !== 1" class="inline-flex justify-center items-center">
                    <div @click="nextStep(2)" class="flex items-center justify-center select-none px-7 py-2 font-semibold rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-gray-300 cursor-pointer duration-200 m-1">
                        yes
                    </div>
                    <div @click="nextStep(1)" class="flex items-center justify-center select-none px-7 py-2 font-semibold rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-gray-300 cursor-pointer duration-200 m-1">
                        maybe
                    </div>
                    <div @click="nextStep(0)" class="flex items-center justify-center select-none px-7 py-2 font-semibold rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-gray-300 cursor-pointer duration-200 m-1">
                        no
                    </div>
                </div>
                <div v-else class="inline-flex justify-between items-center">
                    <input name="income" v-model="income" class="h-9 w-48 rounded-3xl outline-none"/>
                    <div @click="nextStep()" class="flex items-center justify-center select-none px-6 py-2 font-semibold rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-gray-300 cursor-pointer duration-200 m-1">
                        continue
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Questionaire",
    data() {
    return {
        income: 0,
        }
    },
    computed: {
        modalStage(){
            return this.$store.state.modalStage
        },
        questionArray(){
            return this.$store.state.questionsArray
        },
    },
    methods: {
        nextStepIncome(){
            const {income} = this
            this.$store.commit('updateIncome', income)
            console.log(income)
            this.$store.commit('updateModalState',this.modalStage)
        },
        nextStep(answer) {
           this.$store.commit('updateModalState',this.modalStage)
           this.$store.commit('updateQuestionsSum',answer)
        }
    }
  }

</script>