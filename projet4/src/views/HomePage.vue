<template>
    <h1>Products</h1>
    <div v-for="(item, index) in products" :key="index">
        <fieldset>
            <h2>{{ item.title }}</h2>
            <h3>{{ item.price }} €</h3>
            <img v-bind:src="item.image">
            <br>
            <br>
            <button @click="openModal(index)">Description :</button>
            <div class="modal" v-if="openedModal" v-cloak>
                <div class="modal-content">
                    <span class="close" @click="closeModal">❌</span>
                    <span><i>{{ item.description }}</i></span>
                    <br>
                    <br>
                    <span>Stock : {{ item.rating.count }}</span>
                    
                    <Gbtn label="Ajouter au panier" @generalEvent="add(selectedProduct)" v-if="!isInBag(selectedProduct)" backgroundColor="green"/>

            <Gbtn label="Supprimer du panier" @generalEvent="remove(selectedProduct)" backgroundColor="red" v-else />
        </div>
        </div>
        </fieldset>
    </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            openedModal: false,
        }
    },
    methods: {
        openModal(index) {
            this.openedModal = !this.openedModal
            alert(index)
        },
        closeModal(){
            this.openedModal = !this.openedModal
        },

        add(prod) {
            this.commit.addProducts(prod)
        }
    },
    computed: {
        ...mapState(['products'])
    },
    mounted() {
        this.$store.dispatch('loadItems');
    },
}
</script>

<style>
div {
    display: grid;
    justify-content: center;
    gap: 20px;
}

fieldset {
    width: 500px;
    height: 500px;
   
}

img {
    width: 100px;
}

button {
    width: 200px;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: #313131;
    color: white;
}
.modal{
    display: flex;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1;
    justify-content: center;
    align-items: center;
}
.modal-content{
    background-color: #fff;
    padding: 20px;
    border-radius:5px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px ;
    max-width: 400px;
    width: 100%;
    position: relative;
}

.close{
    text-align: end;
    cursor: pointer;
}

[v-cloak] {
    display: none;
}
</style>