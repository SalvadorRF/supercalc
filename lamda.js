$(document).ready(()=>{

  $x = $('#frm_lmd_N')
  $n = $('#frm_lmd_p')
  $res = $('#frm_lmd_res')

  let x = -1;
  let n = -1;

  $x.change(()=>{
    reset($res)
    if ($x.val() < 0) $x.val('')
    x = ($x.val()) ? $x.val() : -1
    if (x >= 0 && n >= 0) execLamda(x,n,$res)
  })

  $n.change(()=>{
    reset($res)
    if ($n.val() < 0) $n.val('')
    n = ($n.val()) ? $n.val() : -1 
    if (x >= 0 && n >= 0) execLamda(x,n,$res)
  })
  

  $('#show_db_proced').click(()=>{
    procedimiento(x,n)
  })

  $('#btn-limpiar').click(()=>{
    reset($res)
    $x.val('')
    $n.val('')
  })
  
})

const execLamda = (x,n, $res) => {
  
  let distPossion = x*n

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

const procedimiento = (x,n) => {

  $('#procedimiento').html(`
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-success">
          <pre>
            <h5>Calculo Principal</h5>
            ➜ λ = N · p
            ➜ λ = ${x} · ${n}
            ➜ λ = ${x*n}
          </pre>
        </div>
      </div>
    </div>
  </div> 
  
  `)
}
