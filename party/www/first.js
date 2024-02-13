function myFunction(button){
    console.log("Clicked !!")
    frappe.jsConfetti.addConfetti(button)
    frappe.party.confetti(button)
    console.log("After Confetti!!")
}
