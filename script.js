const memberList =
document.getElementsById("memberList");
function addMember() {
    const name =
    document.getElementById("name").value;
    const amount =
    document.getElementById("amount").value;
    if(name === "" || amount === ""){
        alert("please fill all fields");
        return;
    }
    const row =
     document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>ksh ${amount}</td>
    <td><span class="paid">paid</span></td>
    `;
    memberList.appendChild(row);
    document.getElementById("name").value =
    "";
    document.getElementById("amount").value =
    "";
}