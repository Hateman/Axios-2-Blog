<template>
    <div>
        <!-- список оборудования -->
    <table width="100%" class="txt"> 
            <tr>
                <td> Фото </td>
                <td> Наименование </td>
                <td> Количество </td>
                <td> Цена </td>
            </tr> 
            <tr v-for="(item, index) in items" :key="item.id" class="txt" >
                <!-- <td> {{ index +1 }} </td> -->
                <td :class="'items-' + item.type" >  </td>

                <!-- <td> {{ price }} </td> -->
                <select class="form-control" style="margin:" v-model.number="items[index].type" @change="chSum (index, item.type)">
                    <option :value="key" v-for="(item, key) in itemsTypes" :key="item.id">
                        {{ item.type }}
                    </option>
                </select>

                <td> <input type="number" class="form-control" min="0" v-model.number="items[index].qty" style="width:100px" >
                </td>

                <td> {{ item.price * item.qty }} </td>
                
                <td> <button class="btn btn-danger" @click="deleteItem (index) " >Удалить</button> </td>
            </tr> 
        </table>
        <br> <hr class="hr">
        
        <table width="100%">
        <tr>
            <td> <button class="btn btn-success" @click="addNewOne" >Добавить оборудование</button> </td>
            <td> <h1 class="txt">Итого: {{ totalPrice }}</h1> </td>
        </tr>
        </table>

    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [],
            itemsTypes: {
                 newItem: {
                    price: 0,
                    type: '',
                    qty: '',
                }, 
                hub: {
                    price: 3500,
                    type: 'Hub',
                    qty: '1',
                },
                motion: {
                    price: 1200,
                    type: 'Motion protect',
                    qty: '1',
                },
                door: {
                    price: 900,
                    type: 'Door protect',
                    qty: '1',
                },
            },
            defaultItem: 'newItem',
            defaultPrice: '0',
            defaultQty: '1',
        }
    },

    created() {
    
  },
    computed: {
        totalPrice() {
        var sum = 0;
        this.items.forEach((Item) => {
            sum += this.itemsTypes[Item.type].price * this.itemsTypes[Item.type].qty;
        });

        return sum;
        },
    },

    methods: {
        addNewOne () {
            this.items.push ({
                type: this.defaultItem,
                price: this.defaultPrice,
                qty: this.defaultQty,
            });
        },
        deleteItem (id) {
            this.items.splice (id, 1);
        },
        chSum (index, item) {
            this.items[index].price = this.itemsTypes[item].price 
        },
    },
}
</script>

<style src="../calculator_CSS.css"></style>