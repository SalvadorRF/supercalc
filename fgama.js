$(document).ready(()=>{

  $n = $('#frm_gama_n')
  $res = $('#frm_gama_res')

  let n = -1;

  $n.change(()=>{
    reset($res)
    if ($n.val() < 0) $n.val('')
    n = ($n.val()) ? $n.val() : -1 
    if (n >= 0) execGamma(n,$res)
  })
  

  $('#show_db_proced').click(()=>{
    procedimiento(n)
  })

  $('#btn-limpiar').click(()=>{
    reset($res)
    $n.val('')
  })
  
})

const execGamma = (n, $res) => {
  
  let distPossion = funcionGama(n)

  $res.val(distPossion)

  $('#db_procedAlert').show()
  $('#smallAlert').show()
}

const reset = ($res) => {
  $res.val('')
  $('#procedimiento').html('')
  $('#db_procedAlert').hide()
  $('#smallAlert').hide()
}

const procedimiento = (n) => {

  $('#procedimiento').html(`
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-success">
          <pre>
            <h5>Calculo Principal</h5>
            ➜ Γ(n) = (n-1)!
            ➜ Γ(${n}) = (${n}-1)!
            ➜ Γ(${n}) = ${n-1}!
            ➜ Γ(${n}) = ${math.factorial(n-1)}
          </pre>
        </div>
      </div>
    </div>
  </div> 
  
  `)
}
