<template>
    <div>
        
    <table width="100%" class="txt"> 
            <!-- заголовки -->
            <tr>
                <td> # </td>
                <td> Фото </td>
                <td> Наименование </td>
                <td> Количество </td>
                <td> Цена </td>
            </tr> 

            <!-- массив селектов -->
            <tr v-for="(item, index) in items" :key="item.id" class="txt" >
                <td> {{ index +1 }} </td>
                <td :class="'items-' + item.type" >  </td>

                <!-- выбор оборудования -->
                <select class="form-control" style="margin:" v-model.number="items[index].type" @change="chPrice (index, item.type)">
                    <option :value="key" v-for="(item, key) in itemsTypes" :key="item.id">
                        {{ item.type }}
                    </option>
                </select>

                <!-- кнопка количества -->
                <td> <input type="number" class="form-control" min="0" v-model.number="items[index].qty" style="width:100px" >
                </td>
                <!-- цена -->
                <td> {{ item.price * item.qty }} </td>

                <!-- кнопка удалить -->
                <td> <button class="btn btn-danger" @click="deleteItem (index) " >Удалить</button> </td>
            </tr> 
        </table>
        <br> <hr class="hr">
        
        <table width="100%">
        <tr>
            <!-- добавление оборудования + сумма -->
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
            // шаблоны позиций оборудования
            itemsTypes: {
                newItem: { price: 0, type: '', qty: '', }, 
                hub: { price: 3500, type: 'Hub', qty: '1', },
                motion: { price: 1200, type: 'Motion protect', qty: '1', },
                door: { price: 900, type: 'Door protect', qty: '1', },
            },
            defaultItem: 'newItem',
            defaultPrice: '0',
            defaultQty: '1',
        }
    },

    created() {
    
  },
    // общая сумма всего оборудования
    computed: {
        totalPrice() {
        var sum = 0;
        this.items.forEach((item) => {
            sum += item.price * item.qty;
        });

        return sum;
        },
    },

    methods: {
        // добваить позицию
        addNewOne () {
            this.items.push ({
                type: this.defaultItem,
                price: this.defaultPrice,
                qty: this.defaultQty,
            });
        },
        // удалить позицию
        deleteItem (id) {
            this.items.splice (id, 1);
        },
        // присвоить цену, промежуточное
        chPrice (index, item) {
            this.items[index].price = this.itemsTypes[item].price 
        },
    },
}
</script>

<style src="../calculator_CSS.css"></style>