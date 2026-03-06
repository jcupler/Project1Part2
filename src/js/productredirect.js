function redirect(product) {
    window.location.href = product + ".html";
}

document.querySelectorAll(".productImage").forEach(img => {
    img.addEventListener("click", function() {
        redirect(this.dataset.product);
    });
});