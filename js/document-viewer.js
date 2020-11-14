function handleDocumentAccordion(e) {
    const src = e.target
        /* if click open
         *   do nothing
         * if click close
         *  add active to button
         *  remove active from other buttons
         *  open clicked
         */
    if (src.classList.contains("collapsed")) {
        Array.from(document.getElementsByClassName("section-button")).forEach((item) => item.classList.remove("active"))
        src.classList.add("active")
    } else {
        event.stopPropagation()
    }
}