/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra produto', () => {
        
        cy.backgroundLogin()

        cy.visit('/');

        let nomeProduto  = 'Faded Short Sleeve T-shirts';
        // Passar o mouse por cima
        cy.contains(nomeProduto).trigger('mouseover')
        // Selecionar o elemento add-to-cart
        cy.contains(nomeProduto)
          .parent() //h5
          .siblings('div.button-container')
          .children('a')
          .first() //add to cart
          .click()

        // Validando se o produto foi add ao carrinho sucesso  
        cy.get('div.layer_cart_product h2')
          .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title')
          .should('contain.text', nomeProduto)

        cy.get("div.button-container a[href$='order']").click()

        cy.get(".cart_navigation a[href$='order&step=1']").click()

        // cy.get('#email').type('rhom09@test.com')
        // cy.get('#passwd').type('ragnar01')

        // cy.get('button#SubmitLogin').click()

        //Validando se o endereço de entrega é igual ao de cobrança
        cy.get('[type=checkbox]#addressesAreEquals')
          .should('have.attr', 'checked', 'checked') // asserção | atributo | valor

        cy.get('button[name=processAddress]').click()

        cy.get('[type=checkbox]#cgv').check()

        cy.get('button[name=processCarrier]').click()

        cy.get('.bankwire').click()

        //cy.get(".cart_navigation button[type='submit']").click()
        cy.get(".cart_navigation button[type='submit']")
          .find('span')
          .contains('I confirm my order')
          .click()

        cy.get('.cheque-indent strong')
          .should('contain.text', 'Your order on My Store is complete.')

        // INVOKE = invoca uma função nativa do JS
        // THEN = para interagir com o texto
        cy.get('div.box').invoke('text').then((text) => {

            // Usa o match do JS para gerar a expressão regular(regex para filtrar o texto)
            // Vai gerar um array e escolhemos qual texto queremos entre []
            console.log(text.match(/[A-Z][A-Z]+/g)[1])

            // Escrita de um arquivo Json com o conteudo do pedido
            // WRITEFILE = 2 parametros(caminho do arquivo | conteudo do arquivo)
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)[1]}` })
        })

        cy.get(".cart_navigation a[href$='history']").click()

        // Leitura de um arquivo
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) =>{
            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id) // Asserção
        })
        
        cy.screenshot()
    });
});