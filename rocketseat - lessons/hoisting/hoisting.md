
## 📌 **PRIMEIRA IMAGEM: Tabela de comparação entre `const`, `let` e `var`**

Essa tabela mostra as **principais diferenças** entre as palavras-chave `const`, `let` e `var` usadas para declarar variáveis em JavaScript.

### 🟨 Tabela explicada linha por linha:

| keyword               | `const` | `let` | `var` |
| --------------------- | ------- | ----- | ----- |
| **global scope**      | ❌ NÃO   | ❌ NÃO | ✅ SIM |
| **function scope**    | ✅ SIM   | ✅ SIM | ✅ SIM |
| **block scope**       | ✅ SIM   | ✅ SIM | ❌ NÃO |
| **can be reassigned** | ❌ NÃO   | ✅ SIM | ✅ SIM |

### ✅ O que cada linha significa:

1. **Global scope (escopo global)**:

   * `var`: pode ser acessada fora do bloco em que foi criada, inclusive no escopo global. ⚠️ Isso pode causar bugs.
   * `let` e `const`: não são adicionadas diretamente ao escopo global se declaradas dentro de blocos.

2. **Function scope (escopo de função)**:

   * Todas as três (`const`, `let`, `var`) funcionam dentro de funções. Ou seja, se você declarar dentro de uma função, elas não existem fora dela.

3. **Block scope (escopo de bloco)**:

   * `let` e `const` respeitam o **escopo de bloco**, ou seja, se você declarar dentro de `if`, `for`, etc., a variável **só existe dentro daquele bloco**.
   * `var` ignora isso e sobe (hoisting) para o escopo da função ou global. ❌

4. **Can be reassigned (pode ser reatribuída)**:

   * `const`: **não pode** ser reatribuída (ex: `const nome = "João"; nome = "Maria"; ❌ erro`)
   * `let` e `var`: **podem** ser reatribuídas.

---

## 🚨 SEGUNDA IMAGEM: Alerta sobre o uso de `var`

### Texto traduzido e explicado:

> ⚠️ **Atenção**
> É importante notar que, embora o **hoisting** (elevação) ocorra com `var`, seu uso tem **algumas desvantagens**, como:
>
> * Falta de escopo de bloco adequado;
> * Possibilidade de causar **comportamentos inesperados** no código.
>
> 👉 Por causa dessas desvantagens, **recomenda-se o uso de `let` e `const` em vez de `var`**.

📌 O que é hoisting?
Hoisting significa que o JavaScript "move" declarações de variáveis e funções para o topo do escopo atual (função ou global) antes de executar o código.
👉 Mas só a declaração é movida, a atribuição de valor não.

🧠 Vamos ver isso com um exemplo usando var:

console.log(nome); // undefined
var nome = "Maria";
O que acontece por trás dos panos:
O JavaScript interpreta assim:


var nome;           // DECLARAÇÃO é "içada"
console.log(nome);  // Resultado: undefined
nome = "Maria";     // Agora sim, valor é atribuído
➡️ Resultado: undefined (porque nome foi declarada, mas ainda não recebeu valor).

😲 Agora veja com let ou const:

console.log(nome); // ❌ ERRO!
let nome = "Maria";
Resultado: ❌ ReferenceError: Cannot access 'nome' before initialization

Por quê?
let e const também são "içadas", mas entram em um estado chamado "zona morta temporal" (TDZ - Temporal Dead Zone).

Isso significa que você não pode usá-las antes da linha onde foram declaradas, mesmo que o JavaScript saiba da existência delas.

📌 Resumo rápido
Palavra-chave	É içada?	Pode ser usada antes da linha?	Valor inicial
var	✅ sim	✅ sim (mas é undefined)	undefined
let	✅ sim	❌ não	Erro
const	✅ sim	❌ não	Erro

✅ Dica prática
Evite var. Use:

const se o valor não vai mudar.

let se você precisa mudar o valor.

## ✅ Conclusão e Dica

* Use sempre `**const**` por padrão, e só use `**let**` se você **precisar mudar o valor da variável**.
* Evite `var`, pois pode causar **problemas difíceis de encontrar**, principalmente em blocos de código complexos.

Se quiser, posso te dar exemplos práticos com código também! Deseja isso?
