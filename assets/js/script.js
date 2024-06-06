/* Noti */
  const fos = document.getElementById('fos')

  fos.addEventListener('show.bs.modal', function(event){
      console.log('Se esta abriendo el modal');

      let boton = event.relatedTarget

      let mensaje = boton.getAttribute('data-titulo')
      let contenido = boton.getAttribute('data-contenido')

      document.getElementById('exampleModalLabel').innerHTML = mensaje
      document.querySelector('.modal-body').innerHTML = contenido
  })
/* Noti */

/* Popover */
/* sacado de bootstrap*/
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
/* Popover */

/* Toast */
/* sacado de bootstrap*/
      const toastTrigger = document.getElementById('liveToastBtn')
      const toastLiveExample = document.getElementById('liveToast')


      if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }

/* Toast my */

        let liveToastBtn = document.getElementById('liveToastBtn');
        liveToastBtn.addEventListener('click', function () {
            document.querySelector('.toast-body').textContent = liveToastBtn.getAttribute('data-contenido');
        });

/* Toast */
/* off */

    document.getElementById('offcanvasBtn').addEventListener('click', function () {
      document.querySelector('.offcanvas-body').textContent = offcanvasBtn.getAttribute('data-contenido');
  });
  
/* off */