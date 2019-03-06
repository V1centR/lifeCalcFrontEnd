import {Produto} from './produto.model';
import { CentroCustoModel } from './centro-custo.model';

export class Operation{

    public id:number;
    public date: number;
    public location: string;
    public produto: Produto;
	public value:number;
	public retro:string;
	public centroCusto:CentroCustoModel;

}

/*
@Id
	private int id;

	private String date;

	private String location;

	private double value;

	//bi-directional many-to-one association to Produto
	@ManyToOne
	@JoinColumn(name="produto")
	@JsonBackReference
	private Produto produtoBean;

	//bi-directional many-to-one association to CentroCusto
	@ManyToOne
	@JoinColumn(name="centro_custo")
	@JsonBackReference
	private CentroCusto centroCustoBean;


*/