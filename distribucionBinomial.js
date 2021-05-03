$(document).ready(()=>{

  $x = $('#frm_db_x')
  $n = $('#frm_db_n')
  $p = $('#frm_db_p')
  $res = $('#frm_db_res')
  $resPor = $('#frm_db_resPor')

  let x = -1;
  let n = -1;
  let p = -1;

  $x.change(()=>{
    reset($res, $resPor)
    if ($x.val() < 0) $x.val('')
    x = ($x.val()) ? $x.val() : -1
    if (x >= 0 && n >= 0 && p >= 0) execDistribucionBinomial(x,n,p,$res,$resPor)
  })

  $n.change(()=>{
    reset($res, $resPor)
    if ($n.val() < 0) $n.val('')
    n = ($n.val()) ? $n.val() : -1 
    if (x >= 0 && n >= 0 && p >= 0) execDistribucionBinomial(x,n,p,$res,$resPor)
  })
  
  $p.change(()=>{
    reset($res, $resPor)
    if ($p.val() < 0 || $p.val() > 1) $p.val('')
    p = ($p.val()) ? $p.val() : -1 
    if (x >= 0 && n >= 0 && p >= 0) execDistribucionBinomial(x,n,p,$res,$resPor)
  })

  $('#show_db_proced').click(()=>{
    procedimiento(x,n,p)
  })

  $('#btn-limpiar').click(()=>{
    reset($res, $resPor)
    $x.val('')
    $n.val('')
    $p.val('')
  })
  
})

const execDistribucionBinomial = (x,n,p, $res, $resPor) => {
  
  let distBinomial = distribucionBinomial(x,n,p)

  $res.val(distBinomial)
  $resPor.val(porciento(distBinomial) + '%')

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

const procedimiento = (x,n,p) => {

  $('#procedimiento').html(`
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-success">
          <pre>
            <h5>Calculo Principal</h5>
            ➜ P(x,n,p) = <sub>n</sub>C<sub>x</sub> · p<sup>x</sup> · (1-p)<sup>(n-x)</sup>
            ➜ P(${x},${n},${p}) = <sub>${n}</sub>C<sub>${x}</sub> · (${p})<sup>${x}</sup> · [1-(${p})]<sup>[${n}-(${x})]</sup>
            ➜ P(${x},${n},${p}) = ${math.combinations(n,x)} · ${math.pow(n,x)} · (${1-p})<sup>(${n-x})</sup>
            ➜ P(${x},${n},${p}) = ${math.combinations(n,x)} · ${math.pow(n,x)} · ${math.pow(1-p,n-x)}
            ➜ P(${x},${n},${p}) = ${distribucionBinomial(x,n,p)}
          </pre>
        </div>
      </div>
      <div class="col-md-6 ">
        <div class="alert alert-warning">
          <h5>Calculo de la Combinacion</h5>
          <div class="eq-c"><sub>n</sub>C<sub>r</sub> = <div class="fraction"><span class="fup">n!</span><span class="bar">/</span><span class="fdn">r!(n-r)!</span></div>
          <div class="eq-c"><sub>${n}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${n}!</span><span class="bar">/</span><span class="fdn">${x}!(${n}-${x})!</span></div>
          <div class="eq-c"><sub>${n}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${n}!</span><span class="bar">/</span><span class="fdn">${x}!(${n-x})!</span></div>
          <div class="eq-c"><sub>${n}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${math.factorial(n)}</span><span class="bar">/</span><span class="fdn">${math.factorial(x)}(${math.factorial(n-x)})</span></div>
          <div class="eq-c"><sub>${n}</sub>C<sub>${x}</sub> = ${math.combinations(n,x)}</div>
        </div>
      </div>
    </div>
  </div> 
  
  `)
}
