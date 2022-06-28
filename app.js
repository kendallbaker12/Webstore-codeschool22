const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
    template: `
    <div>
        <div>
            <img v-on:click="addfunction(item)" v-bind:src="item.image">
            {{ item.price }}
            <button v-on:click="addToCart()">
                Add to cart with component method
            </button>
            <button v-on:click="addfunction(item)">
                Add to cart with Vue instance method
            </button>
        </div>
    </div>
    `,
    props: {
        "item": Object,
        "cart": Array,
        "addfunction": Function,
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.item);
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        page: "welcome",

        products: [],
        Vuecart: []

    },
    methods: {
        getProducts: async function () {
            let response = await fetch(`${API_URL}/products`);
            let data = await response.json();

            this.products = data;
        },
        addToShoppingCart: function (thing) {
            this.Vuecart.push(thing);
        },
        setPage: function (page) {
            this.page = page;
        }
    },
    created: function () {
        console.log("hello")
        this.getProducts();
    }
});