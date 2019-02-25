function script_7() {
	const books = [
	  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
	  { title: 'A la recherche du temps perdu', id: 237634, rented: 2 },
	  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
	  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
	  { title: 'Guerre et Paix', id: 748147, rented: 19 }
	];

	let boolBorrow = true
	let maxBorrowed = 0
	let minBorrowed = 100000000
	let mostBorrowed = ""
	let lessBorrowed = ""
	let book873495 = ""
	books.forEach(row => {
		if (row.rented == 0) {
			boolBorrow = false;
		}
		if (maxBorrowed < row.rented) {
			maxBorrowed = row.rented;
			mostBorrowed = row.title;
		} else if (maxBorrowed == row.rented) {
			mostBorrowed = mostBorrowed + row.title;
		}
		if (minBorrowed > row.rented) {
			minBorrowed = row.rented;
			lessBorrowed = row.title;
		} else if (minBorrowed == row.rented) {
			lessBorrowed = lessBorrowed + row.title;
		}
		(row.id == 873495) ? book873495 = row.title : book873495 = book873495;
		(row.id == 133712) ? books.splice(books.indexOf(row), 1) : ""
	});

	(boolBorrow) ? console.log("All books have been borrowed at least once") : console.log("At least one book has never been borrowed");
	console.log(`The most borrowed book is ${mostBorrowed}`)
	console.log(`The least borrowed book is ${lessBorrowed}`)
	console.log(`The book with the ID 873495 is ${book873495}`)
	console.log(`Book with ID 133712 has been removed`)

	books.sort(
    	function (a, b) {
	        if (a.title < b.title) {
	            return -1;
	        } else if (a.title > b.title) {
	            return 1;
	        } else {
	        	return 0;
	        }
        }
    );
    console.log(books)
}