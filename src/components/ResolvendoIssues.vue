<template>
  <v-container>
    <v-layout column align-center>
      <h1>Resolvendo Issues</h1>
    </v-layout>
    <v-layout mt-4 column>
      <div class="article">
        <h2>O que são Issues</h2>
        <p>
          As Issues são o rastreamento de tarefas, melhorias e bugs que o github oferece para os projetos. <br />
          Para saber mais, e de forma mais detalhada, você pode ver os links <a href="https://help.github.com/articles/about-issues/" target="_blank">Sobre Issues</a> e <a href="https://guides.github.com/features/issues/" target="_blank">Issues</a>.  
        </p>
        <h2>Como proceder com uma Issue</h2>
        <p>
          Ao ver uma issue num projeto você pode atribuir essa tarefa a alguém do time ou a si. <br />
          A issue estará aparecendo dessa forma: <br />
        </p>
        <img class="img" lazy-src :src="require('../assets/ResolvendoIssues/image1.png')" />
        <p>
          Para atribuir a tarefa é só clicar em Assignees e definir uma pessoa:
        </p>
        <img class="img" lazy-src :src="require('../assets/ResolvendoIssues/image2.png')" />
        <p>
          Se Você estiver usando um quadro automatizado essa issue já aparecerá como um card
        </p>
        <img class="img" :src="require('../assets/ResolvendoIssues/image3.png')" />
        <p>
          Ok, agora que a issue está pronta temos que trabalhar no projeto e fazer as alterações descritas. <br />
          Nesse caso, adicionaremos um Emoji ao README.md
        </p>
        <img class="img" :src="require('../assets/ResolvendoIssues/image4.png')" />
        <p>
          Após essa alteração já podemos commitar o código. <br />
          O github nos fornece palavras reservadas para atribuir commits a issues e fechá-las automaticamente. <br /><br />
          Podemos listar:           
        </p>
        <ul>
          <li>close</li>
          <li>closes</li>
          <li>closed</li>
          <li>fix</li>
          <li>fixes</li>
          <li>fixed</li>
          <li>resolve</li>
          <li>resolves</li>
          <li>resolved</li>
        </ul>
        <p>
          <br />
          Podemos usar da seguinte maneira: <br /> <br />
          <code>git commit -m "descricao do commit close #12"</code> <br /> <br />
          Sendo o <i>#12</i> o ID da Issue
        </p>
        <p>
        </p>
        <p>
          No nosso caso, o ID da issue é #1, como podemos ver ao lado do título
        </p>
        <img class="img" :src="require('../assets/ResolvendoIssues/image6.png')" />
        <p>
          Então faremos o seguinte commit: <br /><br />
          <code>git commit -m "Adicionado o Emoji ao README resolve #1"</code> <br /><br />
        </p>
        <p>
          Ao fazer o <code>git pull</code> podemos ver que a Issue foi fechada refecenciando o commit realizado e o card foi movido para <b>Done</b> automaticamente.
        </p>
        <img class="img" :src="require('../assets/ResolvendoIssues/image8.png')" />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
  text-decoration: underline;
}
.article > h2 {
  margin-bottom: 10px;
}
.article > .img {
  margin-bottom: 10px;
  max-width: 100%;
}
</style>
