![#](./src/img/Desing%20titulo.png)

Projeto construído a partir do challenge disponível do [FrontendMentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Utilizei o design fornecido pela plataforma e elaborei a página da forma mais fidedigna possível, desenvolvido com React, JavaScript, SASS, CSS e HTML. E esse foi o meu resultado final 💻<https://room-homepage-nine-delta.vercel.app/>.

![#](./src/img/Design%20room.png)

> Veja o comparativo da minha solução com o resultado esperado, [clicando aqui!](https://www.frontendmentor.io/solutions/room-1JK4ywQLj5)

</br>

## 🎯 Objetivos

Elaborar um website que se aproxime o máximo possivel da imagem de referência.

Os usuários devem ser capazes de:

> - Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
> - Visualizar os estados de foco para todos os elementos interativos na página
> - Navegar entre seções através das setas.

</br>

## 🔧 Propriedades e Tecnologias

> - React
> - SASS
> - Mobile-first
> - Semântica HTML
> - Manipulação do DOM

</br>

## 🧠 Meu aprendizado

Vários conceitos foram abordados como:

> - ReactJS (Uso do create-react-app, manipulação dos elementos JSX e DOM virtual, criação de componentes e utilização de hooks).
> - JavaScript (Manipulação de objetos e arrays, criação de condicionais com operador ternário).
> - SASS (Variáveis).

O projeto foi responsável por me introduzir ao framework React, me abrindo um mundo de possibilidades. Ainda estou buscando compreender a componentização, compreendo que é um benefício grandioso, mas que demanda muita prática.

React.js

```js
...
    const [active, setMode] = useState(false);
    const ToggleMode = (e) => {
        setMode(!active);
    }
...
    <button className="header-nav-menu" onClick={ToggleMode}>
        <img
            id="menu"
            className="header-nav-menu-img"
            src={active ? iconClose : menuHamburger}
            alt="Menu Hamburger"
        />
    </button>
...
```

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://room-homepage-nine-delta.vercel.app/>.

Observação: os testes referente ao layout e responsividade foram realizadas somente utilizando o as resoluções 375px e 1360px.

Veja um video demonstrativo:
https://drive.google.com/file/d/1Z4Ia1RDr8SLlTmz4l42azT0PXDw7jHSF/view?usp=sharing.mp4

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
