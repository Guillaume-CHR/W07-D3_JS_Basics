function script_2() {
    let number = prompt("Enter the number you wish to know its factorial")

    number = Number(number)

    function factorial(number) {
        if (number === 0 || number === 1) {
        	return 1;
        } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        	let i = 1
        	let result = 1
        	while (i <= number) {
        		result *= i
        		i++ 
        	}
        	return result
        }
    }
    alert(`The result is: ${factorial(number)}`);
    console.log(`The result is: ${factorial(number)}`);
}