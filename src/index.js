import {getUsers, deleteUser} from './api/userApi';

getUsers().then(result => {
	let userBody = "";

	result.forEach(user => {
		userBody+= `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});

	global.document.getElementById('users').innerHTML = userBody;

	const deleteLinks = global.document.getElementsByClassName('deleteUser');

	Array.from(deleteLinks, link => {
		link.onclick = function(event) {
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	});
});
