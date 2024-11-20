window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none';
    }, 2500);
});

function openImageModal(imageSrc) {
    const existingModal = document.getElementById("imageModal");
    if (existingModal) {
        existingModal.remove();
    }

    const modalHtml = `
        <div class="modal fade" id="imageModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${imageSrc}" alt="Imagen Ampliada" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);

    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();

    document.getElementById("imageModal").addEventListener("hidden.bs.modal", function () {
        document.getElementById("imageModal").remove();
    });
}
