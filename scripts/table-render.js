// To render table rows for 20 potential rounds
// Row 1 is included in index.html with placeholder text

const rounds = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const tableRow = document.querySelector('.cells')

rounds.forEach(round => {
    tableRow.innerHTML += `
    <tr>
        <td>
            <h5 style="color:white">${round}</h5>
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}[]">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}[]">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}[]">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}[]">
        </td>
        <td>
            <input type="text" class="form-input" name="round${round}[]">
        </td>
        <td>
            <button type="button" id="${round}" class="btn btn-danger btn-sm">Clear</button>
        </td>
    </tr>`
})

// ,16,17,18,19,20