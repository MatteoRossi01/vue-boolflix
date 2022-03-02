<template>
    <header>

        <div class="logo">
            <img src="../assets/img/Netflix-Revamps-Logo.jpg" alt="">
        </div>

        <div class="search-box">
            <input type="text" v-model="searchText">
            <a type="submit" @click="$emit('search', searchText)">
                <font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" />
            </a>
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

    header {
        height: 65px;
        width: 100%;
        background-color: #000;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
        z-index: 2;

        .logo {
            img {
                width: 80px;
            }  
        }

        .search-box {
            margin-right: 35px;
            display: flex;
            flex-direction: row;
            align-items: center;
            
            input {
                margin-right: 15px;
                background-color: rgb(37, 37, 37);
                padding: 4px 8px;
                border: 0px solid;
                border-radius: 5px;
                color: #fff;
                font-size: 14px;
                outline: 2px solid rgb(63, 63, 63);
            }

            .search {
                font-size: 22px;
                color: rgb(63, 63, 63);
            }
        }
    }

</style>
