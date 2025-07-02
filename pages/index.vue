<script lang="ts" setup>
import Typed from "typed.js";

reset();
const dailySentenceContent = ref<any>("");
const typed = ref<any>(null);
const subTyped = ref<any>(null);
const timeTyped = ref<any>(null);

async function reset() {
  const { data } = (await useAsyncData("me", () =>
    $fetch("/dailySentence")
  )) as { data: any };
  const jsonString = data.value.match(/\{.*\}/)?.[0];
  dailySentenceContent.value = JSON.parse(jsonString);
  console.log(dailySentenceContent.value);
  typed.value = new Typed("#typed", {
    strings: [dailySentenceContent.value?.note],
    typeSpeed: 30,
    showCursor: false,
    onComplete: stepComplete,
  });
}
function stepComplete() {
  subTyped.value = new Typed("#subTyped", {
    strings: [`${dailySentenceContent.value?.content}`],
    typeSpeed: 60,
    showCursor: false,
    // onComplete: stepTwoComplete,
  });
}
// function stepTwoComplete() {
//   timeTyped.value = new Typed('#timeTyped', {
//     strings: [`${dailySentenceContent.value?.dateline}`],
//     typeSpeed: 60,
//     fadeOutClass: 'typed-fade-in',
//     showCursor: false,
//   })
// }
</script>

<template>
  <section class="prose">
    <ContentDoc path="me" class="slide-enter-content" />
    <div class="w-[90%]">
      <div id="typed" class="element text-[22px] font-semibold" />
      <div id="subTyped" class="text-[22px] font-semibold mt-[10px]" />
      <!-- <div id="timeTyped" class="text-[#999] mt-[10px] ml-[60%]" /> -->
    </div>
  </section>
</template>
