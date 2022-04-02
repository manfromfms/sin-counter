var angElem = document.getElementById('ang')
var amoElem = document.getElementById('amount')

var resultElem = document.getElementById('result')

var factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

var checkValues = () => {
    var amo = amoElem.value
    if (amo > 9) {
        amo = 9
        amoElem.value = 9
        alert('Максимальное значение точности: 9')
    }

    if (amo != Math.floor(amo)) {
        amoElem.value = Math.floor(amo)
        alert('Значение точности должно быть целым')
    }
}

var calc = () => {
    var ang = (angElem.value) % (Math.PI * 2)
    var amo = amoElem.value

    if (ang > 0 && ang <= Math.PI/2) {
        var multi = 1
    } else if(ang > Math.PI/2 && ang <= Math.PI) {
        var multi = 1
        var ang = Math.PI - ang
    } else if (ang > Math.PI && ang <= Math.PI*1.5) {
        var multi = -1
        var ang = ang - Math.PI
    } else if(ang > Math.PI*1.5 && ang <= Math.PI*2) {
        var multi = 1
        var ang = Math.PI*2 - ang
    }

    var result = 0

    for (let i = 0; i < amo; i++) {
        if ((i * 2 + 1) % 4 == 1) {
            result += Math.pow(ang, i * 2 + 1) / factorial(i * 2 + 1)
        } else {
            result -= Math.pow(ang, i * 2 + 1) / factorial(i * 2 + 1)
        }
    }

    var delta = Math.abs(Math.sin(ang) - result)
    var fault = delta / Math.sin(ang) * 100
    
    var cos = Math.sqrt(1 - Math.min(Math.pow(result, 2), 1))

    resultElem.innerHTML = `sin(x) = ${result}<br>Отличается от точного sin на ${delta}<br>Погрешность: ${fault}%<br>cox(x) = ${cos}`
}
