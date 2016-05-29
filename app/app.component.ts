import {Component} from '@angular/core';
import {Untag} from './untag.component';

@Component(
{
    selector	:	'applicazione',
    template	:	`<h1>Riga della mia app</h1> <untag></untag>`,
    directives	: 	[Untag]
})
export class AppComponent { }