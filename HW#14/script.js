const app = Vue.createApp({
    data() {
        return {
            country1: 'Египет',
            country2: 'ОАЭ',
            country3: 'Турция',
            country4: 'Тайланд',
            country4: 'Другое',
            bagage_option1: 'Ручная кладь',
            bagage_option2: '20-25 кг',
            bagage_option3: '25-30 кг',
            trip_agreement1: 'Театры, музеи, исторически значимые места',
            trip_agreement2: 'Посещение ТРЦ, рынков и др.',
            trip_agreement3: 'Посещение местных храмов, мавзолеев, мечетей и церквей',
            trip_agreement4: 'Отказываюсь от экскурсии'

        }


    }



});

app.mount('#app');