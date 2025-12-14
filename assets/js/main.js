window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    el.style.transform = `translateY(${window.scrollY * 0.3}px)`
  })
})

document.getElementById("bookingForm")?.addEventListener("submit", e => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const date = document.getElementById("date").value
  const message = document.getElementById("message").value

  const text = encodeURIComponent(
    `Hello, my name is ${name}.
I would like to book an IASTM massage.
Preferred date: ${date}.
${message}`
  )

  window.open(`https://wa.me/628123456789?text=${text}`, "_blank")
})
