document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('anonymousMessageForm');
    const messageInput = document.getElementById('messageInput');
    const statusMessageDiv = document.getElementById('statusMessage');
    const currentLinkInput = document.getElementById('currentLink');

    // Set the current page link to the input field
    currentLinkInput.value = window.location.href;

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const message = messageInput.value.trim();

        if (message === '') {
            displayStatus('Pesan tidak boleh kosong!', 'error');
            return;
        }

        // --- Simulasi Pengiriman Pesan (Bagian ini perlu Back-end) ---
        // Di sini seharusnya kamu mengirim `message` ke server menggunakan AJAX (fetch() atau XMLHttpRequest)
        // Contoh:
        /*
        fetch('/api/send-message', { // Ganti dengan endpoint API kamu
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayStatus('Pesan berhasil dikirim! Terima kasih.', 'success');
                messageInput.value = ''; // Clear the textarea
            } else {
                displayStatus('Gagal mengirim pesan. Coba lagi nanti.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            displayStatus('Terjadi kesalahan saat mengirim pesan.', 'error');
        });
        */

        // Karena ini hanya front-end, kita akan simulasi sukses
        displayStatus('Pesan berhasil dikirim! Terima kasih.', 'success');
        messageInput.value = ''; // Clear the textarea
        // --- Akhir Simulasi ---
    });

    function displayStatus(message, type) {
        statusMessageDiv.textContent = message;
        statusMessageDiv.className = 'status-message ' + type; // Add type class (success/error)
        statusMessageDiv.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            statusMessageDiv.style.display = 'none';
        }, 5000);
    }
});

function copyLink() {
    const currentLinkInput = document.getElementById('currentLink');
    currentLinkInput.select();
    currentLinkInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy'); // Copy the text

    alert('Link berhasil disalin: ' + currentLinkInput.value); // Optional: show an alert
}
