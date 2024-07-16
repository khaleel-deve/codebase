document.querySelectorAll('.form-group.row').forEach(row => {
    row.querySelector('select').addEventListener('change', function() {
        row.querySelector('#docTitle').value = this.options[this.selectedIndex].text;
    });
});
