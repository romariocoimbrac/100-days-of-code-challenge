const $addRow = document.getElementById("add-row");
const $table = document.querySelector("[data-table-content]");
let cont = 1;

$addRow.addEventListener('click', function () {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerHTML = `
  row number: ${cont}
`;

  $table.appendChild(tr);
  tr.appendChild(td);
  cont++;
})


