function script_3() {
	let number = prompt("Hey, how many story do you want for the pyramid?")
	number = Number(number)

	let story = 1
	let b = ""
	while (story <= number) {
		b += " ".repeat(number-story)+"#".repeat(story)+"\r\n"
		story++
	}
	alert(b)
	console.log(b)
}