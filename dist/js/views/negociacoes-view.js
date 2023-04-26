export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // método template será responsável por declarar o template da minha view.
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>    
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>   
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    // método update será responsável por renderizar o template no elemento que eu capturei através do meu construtor passando o seletor e pegando com o queryselector.
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
