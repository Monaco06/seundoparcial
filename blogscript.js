document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('miFormulario');
	const toastEl = document.querySelector('.toast');

	if (!form || !toastEl) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (typeof bootstrap === 'undefined' || !bootstrap.Toast) {
			console.error('Bootstrap JS no cargado - la toast no puede mostrarse');
			return;
		}
		const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
		toast.show();
		form.reset();
	});
});

