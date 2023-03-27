function startProject() {

    const dataUser = new Date();

    function diaSemana() {
        let dia = dataUser.getDay();
        switch (dia) {

            case 0: {
                return "Domingo";
            }
            case 1: {
                return "Segunda-feira";
            }
            case 2: {
                return "terça-feira";
            }
            case 3: {
                return "Quarta-feira";
            }
            case 4: {
                return "Quinta-feira";
            }
            case 5: {
                return "Sexta-feira";
            }
            case 6: {
                return "Sabado";
            }
            default: {
                return "Talvez isso não seja possivel";
            }
        }
    }

    function mesAno() {
        let mes = dataUser.getMonth();
        switch (mes) {
            case 0: {
                return "janeiro";
            }
            case 1: {
                return "fevereiro";
            }
            case 2: {
                return "março";
            }
            case 3: {
                return "abril";
            }
            case 4: {
                return "maio";
            }
            case 5: {
                return "junho";
            }
            case 6: {
                return "julho";
            }
            case 7: {
                return "agosto";
            }
            case 8: {
                return "setembro";
            }
            case 9: {
                return "outubro";
            }
            case 10: {
                return "novembro";
            }
            case 11: {
                return "dezembro";
            }
        }
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function divInsert() {
        const p = criaP();

        const dataKey = document.querySelector('.tempo');
        dataKey.innerHTML = "";
        dataKey.appendChild(p).innerHTML = `${diaSemana(dataUser)}, ${dataUser.getDate()} de ${mesAno()} de ${dataUser.getFullYear()} <br> ${dataUser.getHours()}:${dataUser.getMinutes()}:${dataUser.getSeconds()}`;
    }

    divInsert();
    console.log(Date.now())
}

startProject();