<template>
    <div v-if="productInBag.length = 0">
    <div v-for="(prod, index) in productInBag" :key="index">
        <img v-bind:src="prod.image">
        <br>
        <h3>{{ prod.title }}</h3>
        <div class="compteur">
            <button @click="prod.quantity--" v-bind:disabled="prod.quantity<=1">-</button>
            <h2>{{ prod.quantity }}</h2>
            <button @click="prod.quantity++">+</button>
            <button @click="remove(prod)">Supprimer</button>
        </div>
        <h2>US$ {{ prod.price }}</h2>
        <span>{{ totalProduct(prod) }}</span>

    </div>
    <div>Montant de la commande :{{ totalBag() }}</div>
    </div>
    <div v-else>Panier Vide</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    methods:{
        totalProduct(item){
            return item.quantity * item.price;
        },
        totalBag(){
            let total = 0;
            this.productInBag.forEach(element => {
             total = (element.price * element.quantity).toFixed(2)
            }
            )
            return total.toFixed(2);
        },
    },
    computed:{
    ...mapState(['productInBag'])
    }
}
</script>

<style lang="scss" scoped>

</style>