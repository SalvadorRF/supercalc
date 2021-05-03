$(document).ready(()=>{

  $x = $('#frm_poss_x')
  $n = $('#frm_poss_lamda')
  $res = $('#frm_poss_res')
  $resPor = $('#frm_poss_resPor')

  let x = -1;
  let n = -1;

  $x.change(()=>{
    reset($res, $resPor)
    if ($x.val() < 0) $x.val('')
    x = ($x.val()) ? $x.val() : -1
    if (x >= 0 && n >= 0) execDistribucionPossion(x,n,$res,$resPor)
  })

  $n.change(()=>{
    reset($res, $resPor)
    if ($n.val() < 0) $n.val('')
    n = ($n.val()) ? $n.val() : -1 
    if (x >= 0 && n >= 0) execDistribucionPossion(x,n,$res,$resPor)
  })
  

  $('#show_db_proced').click(()=>{
    procedimiento(x,n)
  })

  $('#btn-limpiar').click(()=>{
    reset($res, $resPor)
    $x.val('')
    $n.val('')
  })
  
})

const execDistribucionPossion = (x,n, $res, $resPor) => {
  
  let distPossion = distribucionPoisson(x,n)

  $res.val(distPossion)
  $resPor.val(porciento(distPossion) + '%')

  $('#db_procedAlert').show()
  $('#smallAlert').show()
}

const reset = ($res, $resPor) => {
  $res.val('')
  $resPor.val('')
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
          <h5>Calculo Principal</h5>
          <div class="eq-c">➜ P(x,λ) = <div class="fraction"><span class="fup">e<sup>-λ</sup> · λ<sup>x</sup> </span><span class="bar">/</span><span class="fdn">x!</div>
          <div class="eq-c">➜ P(${x},${n}) = <div class="fraction"><span class="fup">e<sup>-${n}</sup> · ${n}<sup>${x}</sup> </span><span class="bar">/</span><span class="fdn">${x}!</div>
          <div class="eq-c">➜ P(${x},${n}) = <div class="fraction"><span class="fup">${math.pow(math.e,-n)} · ${math.pow(n,x)} </span><span class="bar">/</span><span class="fdn">${math.factorial(x)}</div>
          <div class="eq-c">➜ P(${x},${n}) = <div class="fraction"><span class="fup">${(math.pow(math.e,-n)*math.pow(n,x))/math.factorial(x)}</div>
        </div>
      </div>
    </div>
  </div> 
  
  `)
}
