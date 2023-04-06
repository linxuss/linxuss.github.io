<template>
  <div>
    <HelloWord />
    {{ count }}
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)

const fn = () => {
  //
}

console.log(fn)
</script>
