const app = Vue.createApp({
    data(){
        return{
            product: "GSM Oplader",
            merk:"White label",
            price: 50,
            description: "Dit is een gsm lader",
            //image:'images/bluecharger.jpg',
            //inVoorraad: 30,
            toevoegenWinkelwagen:[],
            gold:false,
            selectedProduct:0,
            productDetails: ["universeel","smartphone", "1 aansluiting",
                "inclusief kabel", "draadloos"],
            soorten:[{
                soortId:1,
                kleur: "blue",
                image:'images/bluecharger.jpg',
                aantal: 20
            }, {
                soortId:2,
                kleur: "red",
                image:'images/redcharger.jpg',
                aantal: 20,
            }],
        }
    },
    methods:{
        addToCart(){
            this.toevoegenWinkelwagen +=1
        },
        updateImageandVoorraad(incomingIndex) {
            this.selectedProduct = incomingIndex
        },
        updateWinkelwagen(id){
            this.toevoegenWinkelwagen.push(id)
        }
    },
    computed:{ // meerdere verlden met elkaar verbinden of meerdere velden laten rekenen
        title(){
            return this.product + ' ' + this.merk
        },
        image(){
            return this.soorten[this.selectedProduct].image
        },
        inVoorraad(){
            return this.soorten[this.selectedProduct].aantal
        }
    }
})