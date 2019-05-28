<template>
    <div>
        <!-- список оборудования -->
    <table width="100%" class="txt"> 
            <tr>
            <td> Наименование </td>
            <td> Цена </td>
            </tr> 
        </table>
        <br> <hr class="hr">
    <div v-for="(item, index) in items" :key="item.id" class="txt" :class="'items-' + item.type">
        <table width="100%"> 
            <tr>
                <td> {{ index +1 }} <td> 
                <!-- <td> <select v-model="prices[index].price"> -->
                <td> <select>
                    <option v-for="item in itemsTypes" :key="item.id">
                        {{ item.label }}
                    </option>
                    <!-- <option :value="id" v-for="it in itemsTypes" :key="it.id" >
                        {{ it.label }}
                        <td > {{ it.price }} </td>
                    </option> -->
                    <!-- <option>--</option>
                    <option value="3500">Hub</option>
                    <option value="1200">Motion</option>
                    <option value="900">Door</option> -->
                </select> </td>
            <td > <input
            type="number"
            placeholder="" > </td>
            <!-- <td> <h1 v-for="item in itemsTypes" :key="item.id"> {{ item.price }} </h1> </td> -->
            <!-- <td v-for="price in prices" :key="price.id"> {{ prices.price }} </td> -->
            <!-- <td > {{ item.price }} </td> -->
            <td> <button class="btn btn-danger" @click="deleteItem (index) " >Удалить</button> </td>
            </tr> 
        </table>
    </div> <br> <hr class="hr">

    <table width="100%">
        <tr>
    <td> <button class="btn btn-success" @click="addNewOne" >Добавить оборудование</button> </td>
    <td> <h1 class="txt">Итого: </h1> </td>
        </tr>
    </table>

    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [],
            prices: [],
            products: [
                { id: 1, price: 3500, label: 'Hub', },
                { id: 2, price: 1200, label: 'Motion protect', },
                { id: 3, price: 900, label: 'Door protect', },
            ],
            product: {
                id: '',
                label: '',
                price: '',
            },
            itemsTypes: [
                { price: 0, label: ' ', },
                { price: 3500, label: 'Hub', },
                { price: 1200, label: 'Motion protect', },
                { price: 900, label: 'Door protect', },
            ],
            /* itemsTypes: {
                 newItem: {
                    price: 0,
                    label: 'Новый элемент',
                }, 
                hub: {
                    price: 3500,
                    label: 'Hub',
                },
                motion: {
                    price: 1200,
                    label: 'Motion protect',
                },
                door: {
                    price: 900,
                    label: 'Door protect',
                },
            }, */
            // defaultItem: 'hub',
            // defaultPrice: 3500,
        }
    },

    created() {
    
  },

    methods: {
        addNewOne () {
            this.items.push ({
                /* type: this.defaultItem,
                price: this.defaultPrice, */
            });
        },
        deleteItem (id) {
            this.items.splice (id, 1);
        },
    },
}
</script>

<style src="../calculator_CSS.css"></style>