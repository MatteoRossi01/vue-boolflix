<template>
    <header>

        <div>
            <input type="text" v-model="searchText">
            <button type="submit" @click="$emit('search', searchText)">Ricerca</button>
        </div>

    </header>
</template>

<script>
  export default {
      name: 'myHeader',
      data() {
          return {
              searchText: '',
          }
      }
  }
</script>

<style lang="scss" scoped>

</style>
