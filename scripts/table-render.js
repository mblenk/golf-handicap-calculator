// To render table rows for 20 potential rounds
// Row 1 is included in index.html with placeholder text

const tableRow = document.querySelector('.cells')

for(let i = 2; i <= 20; i++) {
    const round = i
    tableRow.innerHTML += `
    <tr>
        <td>
            <h5 style="color:white">${round}</h5>
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}">
        </td>
        <td>
            <button type="button" id="${round}" class="btn btn-danger btn-sm">Clear</button>
        </td>
    </tr>`
}

