//  
document.querySelectorAll('.form-group.row').forEach(row => {
    row.querySelector('select').addEventListener('change', function() {
        row.querySelector('#docTitle').value = this.options[this.selectedIndex].text;
    });
});
// the above code is for on change of doctype title will change automaticall no need to enter data manually
// the below function used to work if we run it will automatically change already worked part . 
document.querySelectorAll('.form-group.row').forEach(row => {
    const selectElement = row.querySelector('select');
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    row.querySelector('#docTitle').value = selectedText;
    
    // Update the #docTitle whenever the dropdown selection changes
    selectElement.addEventListener('change', function() {
        row.querySelector('#docTitle').value = this.options[this.selectedIndex].text;
    });
});
// Explanation:
// Initial Update: The code initially sets the value of #docTitle in each row based on the currently selected option in the dropdown when the script runs.
// Change Event Listener: The event listener still updates the #docTitle field whenever the dropdown selection is changed.
//