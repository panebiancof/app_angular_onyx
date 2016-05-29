import {Component} from '@angular/core';

@Component (
{
	selector 		:	'untag',
	templateUrl 	:	'./app/template/untag.html',
	styleUrls 		:	['./app/style/untag.css']
})

export class Untag { 
//	public stringa : string;
//	public numero: number;
//	public flag: boolean;
//	public vettore: string[]; 
//	public tutto: any;
	public domanda: string;
	public risposta: string;

	constructor(){
//		this.stringa = "Hola!";
//		this.numero = 10;
//		this.flag = true;

//		public id : number, 
//		public nomeSquadra : string,
//		public coloreMaglia : string
		this.domanda = "Quale continente ha scoperto Colombo?",
		this.risposta = "America"
	}
}