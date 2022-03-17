var carta1 = 
{
    nome: "Simple",
    imagem: "https://prosettings.net/wp-content/uploads/2020/10/s1mple-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 8,
        TotalKills: 6,
        Damage: 9,
        Suporte: 5
    }
}
var carta2 = 
{
    nome: "Niko",
    imagem: "https://prosettings.net/wp-content/uploads/2020/11/niko-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 10,
        TotalKills: 8,
        Damage: 6,
        Suporte: 8
    }
}
var carta3 = 
{
    nome: "Device",
    imagem: "https://prosettings.net/wp-content/uploads/2021/04/device-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 7,
        TotalKills: 5,
        Damage: 10,
        Suporte: 4
    }
}
var carta4 = 
{
    nome: "Fallen",
    imagem: "https://prosettings.net/wp-content/uploads/2021/02/fallen-profile-picture-3-225x300.jpg",
    atributos:
    {
        HeadShot: 8,
        TotalKills: 7,
        Damage: 6,
        Suporte: 6
    }
}
var carta5 = 
{
    nome: "Fer",
    imagem: "https://prosettings.net/wp-content/uploads/2020/06/fer-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 10,
        TotalKills: 9,
        Damage: 4,
        Suporte: 7
    }
}
var carta6 = 
{
    nome: "VINI",
    imagem: "https://prosettings.net/wp-content/uploads/2020/05/vini-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 9,
        TotalKills: 8,
        Damage: 3,
        Suporte: 7
    }
}
var carta7 = 
{
    nome: "m0NESY",
    imagem: "https://prosettings.net/wp-content/uploads/2021/03/m0nesy-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 8,
        TotalKills: 7,
        Damage: 8,
        Suporte: 8
    }
}
var carta8 = 
{
    nome: "Coldzera",
    imagem: "https://prosettings.net/wp-content/uploads/2021/03/coldzera-profile-picture-3-225x300.jpg",
    atributos:
    {
        HeadShot: 6,
        TotalKills: 8,
        Damage: 10,
        Suporte: 8
    }
}
var carta9 = 
{
    nome: "Kscerato",
    imagem: "https://prosettings.net/wp-content/uploads/2020/05/kscerato-profile-picture-4-225x300.jpg",
    atributos:
    {
        HeadShot: 6,
        TotalKills: 5,
        Damage: 10,
        Suporte: 6
    }
}
var carta10 = 
{
    nome: "Shox",
    imagem: "https://prosettings.net/wp-content/uploads/2021/01/shox-profile-picture-2-225x300.jpg",
    atributos:
    {
        HeadShot: 7,
        TotalKills:8,
        Damage: 9,
        Suporte: 7
    }
}

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var carta_maquina 
var carta_jogador

function sortear_carta()
{
    var indice_carta_maquina = parseInt (Math.random() * 10)
    carta_maquina = baralho[indice_carta_maquina]

    var indice_carta_jogador = parseInt (Math.random() * 10)
    while (indice_carta_jogador == indice_carta_maquina)
    {
        indice_carta_jogador = parseInt (Math.random() * 10)
    }
    carta_jogador = baralho[indice_carta_jogador]

    document.getElementById("sortear").disabled = true
    document.getElementById("jogar").disabled = false

    exibir_carta_jogador()
}

function exibir_carta_jogador()
{
    var div_carta_jogador = document.getElementById("carta_jogador")
    div_carta_jogador.style.backgroundImage="url(" + carta_jogador.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_jogador.atributos)
    {
        opcoes_texto += "<input type='radio' name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_jogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_jogador.nome}</p>`

    div_carta_jogador.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}

function obtem_atributo_selec()
{
    var radio_atributos = document.getElementsByName("atributo")

    for(var i = 0; i < radio_atributos.length; i++)
    {
        if (radio_atributos[i].checked == true)
        {
            return radio_atributos[i].value
        }
    }
}

function jogar()
{
    var atributo_selec = obtem_atributo_selec()
    var result = document.getElementById("resultado")
    var valor_carta_jogador = carta_jogador.atributos[atributo_selec]
    var valor_carta_maquina = carta_maquina.atributos[atributo_selec]

    if(valor_carta_jogador > valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Você venceu!!!</p>"
    }
    else if (valor_carta_jogador < valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Você perdeu!!!</p>"
    }
    else
    {
        result.innerHTML = "<p class='resultado_final'> Empate!!!</p>"
    }

    document.getElementById("jogar").disabled = true
    exibir_carta_maquina()
    document.getElementById("sortear").disabled = false
}

function exibir_carta_maquina()
{
    var div_carta_maquina = document.getElementById("carta_maquina")
    div_carta_maquina.style.backgroundImage="url(" + carta_maquina.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_maquina.atributos)
    {
        opcoes_texto += "<p name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_maquina.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_maquina.nome}</p>`

    div_carta_maquina.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}