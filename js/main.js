// const cursosTodos=document.getElementsByClassName("curso")
// console.log(cursosTodos)

// const cursosArray=[...document.getElementsByClassName("curso")]
// const cursosC1=[...document.getElementsByClassName("c1")]
// const cursosC2=[...document.getElementsByClassName("c2")]
// const cursosEspecial=document.getElementsByClassName("curso")[1]

// console.log(cursosArray)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursosEspecial)

// cursosC1.map((el)=>{
//     el.classList.add("destaque")

// })


// const divTodas=[...document.getElementsByTagName("div")]
// const cursosArray=[...document.getElementsByClassName("curso")]
// const cursosC1=[...document.getElementsByClassName("c1")]
// const cursosC2=[...document.getElementsByClassName("c2")]
// const cursosEspecial=document.getElementById("c1")


// // const query_divTodas=[...document.querySelectorAll("div[class]")]
// const query_divTodas=[...document.querySelectorAll("div > p")]
// const query_cursosTodas=[...document.querySelectorAll(".curso")]
// const query_cursosC1=[...document.querySelectorAll(".c1")]
// const query_cursosC2=[...document.querySelectorAll(".c2")]
// const query_cursosEspecial=document.querySelectorAll("#c3")[0]

// console.log(query_divTodas)
// console.log(query_cursosTodas)
// console.log(query_cursosC1)
// console.log(query_cursosC2)
// console.log(query_cursosEspecial)







// function msg(){
//     alert("clicou") 
// }

// const c1=document.getElementById("c1")
// ou

// const c1=document.querySelector("#c1")
// const msg = ()=>{
//     alert("clicou")

// }

// c1.addEventListener("click",msg )
// ou
// c1.addEventListener("click",() =>{
//     alert("clicou")
// })
// ou

// c1.addEventListener("click",() =>{
//     msg()
// })


// adicionar individual
// const c1=document.querySelector("#c1")
// c1.addEventListener("click",(evt) =>{
//     const el = evt.target
//     el.classList.add("destaque")   
// })



// adicionar para todos
// const cursos=[...document.querySelectorAll(".curso")]

// cursos.map((el)=>{

//     el.addEventListener("click",(evt) =>{
//         const el = evt.target
//         // el.classList.add("destaque")
//return "<div>"+el+"</div>"
//         // alert("clicou")
//         console.log(el.innerHTML + " Foi Clicado")
//     })    

// })






//   ##### ATIVIDADE AULA 35   ##############
// const caixa1 = document.querySelector(".containerCheio")
// const caixa2 = document.querySelector(".containerVazio")
// const btn = document.querySelector("#botao")
// const btn2 = document.querySelector("#btn_remover")

// const todosCursos = [...document.querySelectorAll(".curso")]

// todosCursos.map((el)=>{
//    el.addEventListener("click",(evt)=>{
//       const curso = evt.target
//       curso.classList.toggle("destaque")
//    })
// })

// btn.addEventListener('click',()=>{
//    const cursosSelecionados = [...document.querySelectorAll(".destaque")]
//    cursosSelecionados.map((el)=>{
//       caixa2.appendChild(el)
//       el.classList.remove("destaque")
//    })
// })


// btn2.addEventListener('click',()=>{
//    const cursosSelecionados = [...document.querySelectorAll(".destaque")]
//    cursosSelecionados.map((el)=>{
//       caixa1.appendChild(el)

//    })
// })

//   ##### FINAL DA AULA 35   ##############




//   ##### aula a parte target e relatedTarget   ##############
// document.addEventListener("click", (e)=>{
//     console.log(e.target.tagName)

// })

// document.addEventListener("mouseout", (a)=>{
//     console.log(a.target.tagName)

// })

// document.addEventListener("mouseover", (b)=>{
//     console.log("Relacionado A(o) "+ b.relatedTarget.tagName)

// })
//   ##### FINAL DA EXTRA  ##############


// const caixa1 = document.querySelector("#caixa1")
// const btn_c1 = document.querySelector("#c1")
// const cursos = [...document.querySelectorAll(".curso")]


// caixa1.addEventListener("click",(evt)=>{
//     console.log("clicou")
//     console.log(evt)
// })

// o .map abaixo serve para anular o click dos filhos da DIV pai
// cursos.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         evt.stopPropagation()

//     })
// })


//################################## aula 38 #########################################

// const caixa1 = document.querySelector("#caixa1")
// const btn_c = [...document.querySelectorAll(".curso")]
// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)


//################################## aula 39 #########################################


// const caixa1 = document.querySelector("#caixa1")
// const btn_c = [...document.querySelectorAll(".curso")]

// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)


// if(btn_c[0].children.length > 0){
// console.log("Possui filho")
// }else{
//     console.log("Não possui Filho")
// }

// if(caixa1.children.length > 0){
//     console.log("Possui filho")
//     }else{
//     console.log("Não possui Filho")
// }

// console.log(caixa1.children.length > 0 ? "Possui Filho" : "Não possui filho")
// console.log(btn_c[0].children.length > 0 ? "Possui Filho" : "Não possui filho")

// console.log(caixa1.children[1].innerHTML="TESTE")

//################################## aula 40 add elementos via JS #########################################

// const caixa1 = document.querySelector("#caixa1")
// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


// cursos.map((el,chave)=>{
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id","c"+chave)
//     novoElemento.setAttribute("class","curso c1")
//     novoElemento.innerHTML=el
//     caixa1.appendChild(novoElemento)
// })


//################################## aula 41 remove elementos  #########################################

// const caixa1 = document.querySelector("#caixa1")
// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


// cursos.map((el,chave)=>{
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id","c"+chave)
//     novoElemento.setAttribute("class","curso c1")
//     novoElemento.innerHTML=el

//     const btn_lixeira = document.createElement("img")
//     btn_lixeira.setAttribute("src", "./img/01.png")
//     btn_lixeira.setAttribute("class", "btn_lixeira")
//     btn_lixeira.addEventListener("click", (evt)=>{
//         caixa1.removeChild(evt.target.parentNode)
//     })

//     novoElemento.appendChild(btn_lixeira)
//     caixa1.appendChild(novoElemento)
// })

//################################## aula 42 FILTER #########################################



// //const filtroMaior18 = (valor,indice, arr) => {
// // const filtroMaior18 = (valor) => {
// //     if(valor >= 18)
// //     return valor
// // }

// ou

// const idades = [15, 21, 30, 17, 18, 44, 12, 50]
// const maior = idades.filter(filtroMaior18) //ou
// const maior = idades.filter((valor)=>{
//     if(valor >= 18)
//     return valor
// })

// const menor = idades.filter((valor)=>{
//     if(valor < 18)
//     return valor
// })


// console.log("Todas idades cadastradas no array: " + idades)
// console.log("Idades aceitaveis para cadastro: " + maior)
// console.log("Idades não aceitas no parametro de cadastro: " + menor)


//################################## aula 43 e 44FILTER #########################################

//###### não utilizada #######
//const btn_c=[...document.querySelectorAll(".curso")]
//const c1_2=document.querySelector("#c1_2")
// //###### não utilizada #######

// const caixaCursos = document.querySelector("#caixaCursos")
// const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
// const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
// const btnRemoverCurso = document.getElementById("btnRemoverCurso")


// cursos.map((el, chave) => {
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id", "c" + chave)
//     novoElemento.setAttribute("class", "curso c1")
//     novoElemento.innerHTML = el

//     const comandos = document.createElement("div")
//     comandos.setAttribute("class", "comandos")

//     const rb = document.createElement("input")
//     rb.setAttribute("type", "radio")
//     rb.setAttribute("name", "rb_curso")

//     caixaCursos.appendChild(novoElemento)
//     novoElemento.appendChild(comandos)
//     comandos.appendChild(rb)


// })

// const radioSelecionado = () => {
//     const todosRadios = [...document.querySelectorAll("input[type=radio]")]
//     const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
//         return ele.checked
//     })
//     return radioSelecionado[0]
// }

// btnCursoSelecionado.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     try {
//         const cursoSelecionado = rs.parentNode.previousSibling.textContent
//         alert("Curso selecionado: " + cursoSelecionado)
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

// btnRemoverCurso.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     if (rs != undefined) {
//         const cursoSelecionado = rs.parentNode.parentNode
//         cursoSelecionado.remove()
//     } else {
//         alert("Selecione um curso")
//     }
// })



//################################## aula 45 Criando elementos #########################################
//###### não utilizada #######
//const btn_c=[...document.querySelectorAll(".curso")]
//const c1_2=document.querySelector("#c1_2")
// //###### não utilizada #######

// const caixaCursos = document.querySelector("#caixaCursos")
// const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
// const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
// const btnRemoverCurso = document.getElementById("btnRemoverCurso")
// const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
// const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
// const nomeCurso = document.getElementById("nomeCurso")


// let indice = 0

// const criarNovoCurso = (curso) => {
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id", "c" + indice)
//     novoElemento.setAttribute("class", "curso c1")
//     novoElemento.innerHTML = curso

//     const comandos = document.createElement("div")
//     comandos.setAttribute("class", "comandos")

//     const rb = document.createElement("input")
//     rb.setAttribute("type", "radio")
//     rb.setAttribute("name", "rb_curso")

//     comandos.appendChild(rb)

//     novoElemento.appendChild(comandos)

//     return novoElemento
// }
// cursos.map((el, chave) => {

//     const novoElemento = criarNovoCurso(el)
//     caixaCursos.appendChild(novoElemento)
//     indice++

// })

// const radioSelecionado = () => {
//     const todosRadios = [...document.querySelectorAll("input[type=radio]")]
//     const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
//         return ele.checked
//     })
//     return radioSelecionado[0]
// }

// btnCursoSelecionado.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     try {
//         const cursoSelecionado = rs.parentNode.previousSibling.textContent
//         alert("Curso selecionado: " + cursoSelecionado)
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

// btnRemoverCurso.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     if (rs != undefined) {
//         const cursoSelecionado = rs.parentNode.parentNode
//         cursoSelecionado.remove()
//     } else {
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     try {
//         if (nomeCurso.value != "") { 
//             const cursoSelecionado = rs.parentNode.parentNode
//             const novoCurso = criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso, cursoSelecionado)
//         }else {
//          alert("Digite o nome do curso")
//         }
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
//     const rs = radioSelecionado()
//     try {
//         if (nomeCurso.value != "") { 
//             const cursoSelecionado = rs.parentNode.parentNode
//             const novoCurso = criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
//         }else {
//             alert("Digite o nome do curso")
//         }
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

//################################## aula 46 Toggle para gerenciar Classes CSS #########################################

// const caixaCursos = document.querySelector("#caixaCursos")
// const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
// const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
// const btnRemoverCurso = document.getElementById("btnRemoverCurso")
// const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
// const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
// const nomeCurso = document.getElementById("nomeCurso")


// let indice = 0

// const tirarSelecao = () => {
//     const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
//     cursosSelecionados.map((el)=> {
//         el.classList.remove("selecionado")
//     })
// }

// const criarNovoCurso = (curso) => {
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id", "c" + indice)
//     novoElemento.setAttribute("class", "curso c1")
//     novoElemento.innerHTML = curso
//     novoElemento.addEventListener("click", (evt)=>{
//         tirarSelecao()
//         evt.target.classList.toggle("selecionado")
//     })
//     return novoElemento
// }

// cursos.map((el, chave) => {

//     const novoElemento = criarNovoCurso(el)
//     caixaCursos.appendChild(novoElemento)
//     indice++

// })

// const cursoSelecionado = () => {
//     const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
//     return cursosSelecionados[0]
// }

// btnCursoSelecionado.addEventListener("click", (evt) => {
//     try {
//         alert("Curso selecionado: " + cursoSelecionado().innerHTML)
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

// btnRemoverCurso.addEventListener("click", (evt) => {
//     const cs = cursoSelecionado()
//     if (cs != undefined) {
//         cs.remove()
//     } else {
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
//     try {
//         if (nomeCurso.value != "") { 
//             const novoCurso = criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso, cursoSelecionado())
//         }else {
//          alert("Digite o nome do curso")
//         }
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

// btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
//     try {
//         if (nomeCurso.value != "") {
//             const novoCurso = criarNovoCurso(nomeCurso.value)
//             caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
//         }else {
//             alert("Digite o nome do curso")
//         }
//     } catch (ex) {
//         alert("Selecione um curso")
//     }
// })

//################################## aula 47 FIND para encontrar elementos em Arrays #########################################

// const p_array=document.querySelector("#array")
// const txt_pesquisar=document.querySelector("#txt_pesquisar")
// const btnPesquisar=document.querySelector("#btnPesquisar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=["html","css","javascript"]
// p_array.innerHTML="["+elementos_array+"]"

// btnPesquisar.addEventListener("click",(evt)=>{
//     resultado.innerHTML="Valor não encontrado"
//     const ret=elementos_array.find((e,i)=>{
//         if(e.toUpperCase()===txt_pesquisar.value.toUpperCase()){
//             resultado.innerHTML="Valor encontrado " + e + " na posição " + i
//             return e
//         }
//     })
//     console.log(ret)
// })

//################################## aula 48 método EVERY #########################################

// const p_array=document.querySelector("#array")
// const btnVerificar=document.querySelector("#btnVerificar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=[21,25,19,20,18,18,22]
// p_array.innerHTML="["+elementos_array+"]"

// btnVerificar.addEventListener("click",(evt)=>{
//     const ret=elementos_array.every((e,i)=>{
//         if(e<18){
//             resultado.innerHTML="Array não conforme na posição " +i
//         }
//         return e>=18
//     })
//     if(ret){
//         resultado.innerHTML="OK"
//     }
   
// })

//################################## aula 49 método SOME #########################################

// const p_array=document.querySelector("#array")
// const btnVerificar=document.querySelector("#btnVerificar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=[16,12,20,10,17,15,13,11,18]
// p_array.innerHTML="["+elementos_array+"]"

// btnVerificar.addEventListener("click",(evt)=>{
//     const ret=elementos_array.some((e,i)=>{
//         if(e<18){
//             resultado.innerHTML="Array não conforme na posição " +i
//         }
//         return e>=18
//     })
//     if(ret){
//         resultado.innerHTML="OK"
//     }
// })

//################################## aula 50 método REDUCE #########################################

// const p_array=document.querySelector("#array")
// const btnReduzir=document.querySelector("#btnReduzir")
// const resultado=document.querySelector("#resultado")

// const elementos_array=[1,2,3,4,5]
// let ant=[]
// let atu=[]
// let dobro=[]

// p_array.innerHTML="["+elementos_array+"]"

// btnReduzir.addEventListener("click",(evt)=>{
//     dobro.push(elementos_array[0]*2)
//     resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
//         ant.push(anterior)
//         atu.push(atual)
//         dobro.push(atual*2)
//         return atual+anterior
//     })
//     resultado.innerHTML+="<br/>V.anterior:"+ant+"<br/>V.atual:"+atu+"<br/>Dobro:"+dobro
// })

//################################## aula 51 ITERADORES e elementos iteráveis #########################################

// var valores=[10,8,9,2]
// var it_valores=valores[Symbol.iterator]()


// var texto="Youtube"
// var it_texto=texto[Symbol.iterator]()

// var i= texto.length
// var c=0

// console.log(texto)

// while(c <= i){
//     console.log(it_texto.next())
//     //ou
//     //console.log(it_texto.next().value)
//     c++
   
// }

//################################## aula 52 Arrays #########################################
