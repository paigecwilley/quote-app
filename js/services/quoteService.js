angular.module('boilerplate')
.service('quoteService', function(){

this.quotes = [
	{
		author: {
			firstname: 'William',
			lastname: 'Shakespeare',
			quotes: {
				funny: ["Will's funny quote"],
				romantic: ["Will's romantic quote"],
				insulting: ["Will's insulting quote"]
			}
		}
	},
	{
		author: {
			firstname: 'Oscar',
			lastname: 'Wilde',
			quotes: {
				funny: ["Oscar's funny quote"],
				romantic: ["Oscar's romantic quote"],
				insulting: ["Oscar's insulting quote"]
			}
		}
	},
	{
		author: {
			firstname: 'Virginia',
			lastname: 'Woolf',
			quotes: {
				funny: ["Virginia's funny quote"],
				romantic: ["Virginia's romantic quote"],
				insulting: ["Virgini's insulting quote"]
			}
		}
	},

]




})