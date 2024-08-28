// Automation
// -------------------------------------------------------------------------------------------------------------------------------------------page numbers second row auto complete ====
// Function to update the 'fromPage' field based on the nearest previous row's 'toPage' value
function updateFromPage() {
    // Select all rows
    const rows = Array.from(document.querySelectorAll('.form-group.row'));

    let previousToPage = null;
    let lastUpdatedRow = null;

    rows.forEach((row, index) => {
        const fromPageInput = row.querySelector('#fromPage');
        const toPageInput = row.querySelector('#toPage');
        
        if (!toPageInput || !fromPageInput) return;

        const currentToPage = parseInt(toPageInput.value, 10);

        // Update 'fromPage' only if the row above is filled and current row is empty
        if (previousToPage !== null && !fromPageInput.value && index === (lastUpdatedRow + 1)) {
            fromPageInput.value = previousToPage + 1;

            // Dispatch events to ensure the form recognizes the change
            fromPageInput.dispatchEvent(new Event('input', { bubbles: true }));
            fromPageInput.dispatchEvent(new Event('change', { bubbles: true }));
            fromPageInput.dispatchEvent(new Event('blur', { bubbles: true }));
        }

        // Update 'previousToPage' and 'lastUpdatedRow'
        if (currentToPage) {
            previousToPage = currentToPage;
            lastUpdatedRow = index;
        }
    });
}

// Attach the function to the change event of 'toPage' inputs
document.querySelectorAll('#toPage').forEach(input => {
    input.addEventListener('change', updateFromPage);
});

// Also call the function initially in case the 'toPage' values are pre-filled
updateFromPage();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// final output submission time code 
document.querySelectorAll('.form-group.row').forEach(row => {
    const selectElement = row.querySelector('select');
    const docTitleInput = row.querySelector('#docTitle');

    const updateDocTitle = () => {
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
        docTitleInput.value = selectedText;

        // Trigger various events to ensure the form recognizes the update
        docTitleInput.dispatchEvent(new Event('input', { bubbles: true }));
        docTitleInput.dispatchEvent(new Event('change', { bubbles: true }));
        docTitleInput.dispatchEvent(new Event('blur', { bubbles: true }));
    };

    // Initial update
    updateDocTitle();

    // Update on dropdown selection change
    selectElement.addEventListener('change', updateDocTitle);
});
// Explanation:
// Input Event: The input event is triggered to simulate the user typing into the input field. This event is often tied to form validation in real-time.
// Change Event: This event is triggered again to ensure the form catches the updated value as a significant change.
// Blur Event: The blur event simulates the user clicking away from the input field, which often forces validation logic to re-run.
