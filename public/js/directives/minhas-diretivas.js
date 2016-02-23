angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	/* ddo = directive definition object */
	var ddo = {};

	ddo.restrict = "AE"; /* atribute element */

	ddo.scope = {
		titulo : '@titulo'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});