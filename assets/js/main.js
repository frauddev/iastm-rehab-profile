window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(section => {
    const offset = window.scrollY * 0.25
    section.style.backgroundPositionY = `${offset}px`
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

    window.open(`https://wa.me/081229331769?text=${text}`, "_blank")
})
