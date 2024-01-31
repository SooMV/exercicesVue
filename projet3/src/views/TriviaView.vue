<template>
    <div>
        <h1 v-html="question"></h1>
        <br>
        <div v-for="(a, index) in answersTab" :key="index">
            <label v-html="a"></label>
                <input type="radio" :value="a" name="rep">
        </div>
        <br><br>
        <button type="submit" @click="compareRep()">Valider</button>
        <br>
        <span>Joueur : {{ counterUser }} -- Ordinateur : {{ counterComputer }}</span>
    </div>
</template>

<script>

export default {
    data() {
        return {
            question: '',
            incorrectAnswers: [],
            correctAnswer: '',
            category: '',
            difficulty: '',
            counterUser: 0,
            counterComputer: 0,
        }
    },
    computed: {
        answersTab(){
            let answers = [...this.incorrectAnswers]
            answers.splice(Math.round(Math.random() * answers.length +1), 0, this.correctAnswer)
            return answers
        },
    },
    methods: {
        compareRep(){
            let repUser = document.querySelector('input[name=rep]:checked').value;

            if(repUser === this.correctAnswer){
                alert('Votre réponse est correcte, vous marquez 1 point');
                this.counterUser++;
            }
            else{
                alert('Votre réponse est incorrect, l\'ordinateur marque 1 point');
                this.counterComputer++;
            }
        }
    },

    created() {
        this.axios
            .get('https://opentdb.com/api.php?amount=1')
            .then(response => {
                console.log(response)
                this.question = response.data.results[0].question
                
                this.incorrectAnswers = response.data.results[0].incorrect_answers
                
                this.correctAnswer = response.data.results[0].correct_answer
                
                this.category = response.data.results[0].category
                
                this.difficulty = response.data.results[0].difficulty
            })
    },
}

</script>
<style>
button{
    width: 150px;
    height: 30px;
    background-color: yellow;
    color: black;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 50px;
}

</style>