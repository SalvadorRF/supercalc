$(document).ready(()=>{

  $x = $('#frm_dh_x')
  $n = $('#frm_dh_n')
  $k = $('#frm_dh_k')
  $N = $('#frm_dh_N')
  $res = $('#frm_dh_res')
  $resPor = $('#frm_dh_resPor')

  let x = -1;
  let n = -1;
  let k = -1;
  let N = -1;

  $x.change(()=>{
    reset($res, $resPor)
    if ($x.val() < 0) $x.val('')
    x = ($x.val()) ? $x.val() : -1
    if (x >= 0 && n >= 0 && k >= 0 && N >= 0) execDistribucionHipergeometrica(x,n,k,N,$res,$resPor)
  })

  $n.change(()=>{
    reset($res, $resPor)
    if ($n.val() < 0) $n.val('')
    n = ($n.val()) ? $n.val() : -1
    if (x >= 0 && n >= 0 && k >= 0 && N >= 0) execDistribucionHipergeometrica(x,n,k,N,$res,$resPor)
  })
  
  $k.change(()=>{
    reset($res, $resPor)
    if ($k.val() < 0) $k.val('')
    k = ($k.val()) ? $k.val() : -1
    if (x >= 0 && n >= 0 && k >= 0 && N >= 0) execDistribucionHipergeometrica(x,n,k,N,$res,$resPor)
  })
  
  $N.change(()=>{
    reset($res, $resPor)
    if ($N.val() < 0) $N.val('')
    N = ($N.val()) ? $N.val() : -1
    if (x >= 0 && n >= 0 && k >= 0 && N >= 0) execDistribucionHipergeometrica(x,n,k,N,$res,$resPor)
  })


  $('#show_db_proced').click(()=>{
    procedimiento(x,n,k,N)
  })

  $('#btn-limpiar').click(()=>{
    reset($res, $resPor)
    $x.val('')
    $n.val('')
    $k.val('')
    $N.val('')
  })
  
})

const execDistribucionHipergeometrica = (x,n,k,N,$res,$resPor) => {
  
  let distHipergeometrica = distribucionHipergeometrica(x,n,k,N)

  $res.val(distHipergeometrica)
  $resPor.val(porciento(distHipergeometrica) + '%')

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

const procedimiento = (x,n,k,N) => {

  $('#procedimiento').html(`
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-success">
          <pre>
            <h5>Calculo Principal</h5>
            <div class="eq-c">➜ P(x,n,k,N) = <div class="fraction"><span class="fup"><sub>k</sub>C<sub>x</sub> · <sub>(N-k)</sub>C<sub>(n-x)</sub></span><span class="bar">/</span><span class="fdn"><sub>N</sub>C<sub>n</sub></span></div>
            <div class="eq-c">➜ P(${x},${n},${k},${N}) = <div class="fraction"><span class="fup"><sub>${k}</sub>C<sub>${x}</sub> · <sub>[${N}-(${k})]</sub>C<sub>[${n}-(${x})]</sub></span><span class="bar">/</span><span class="fdn"><sub>${N}</sub>C<sub>${n}</sub></span></div>
            <div class="eq-c">➜ P(${x},${n},${k},${N}) = <div class="fraction"><span class="fup">${math.combinations(k,x)} · <sub>(${N-k})</sub>C<sub>(${n-x})</sub></span><span class="bar">/</span><span class="fdn">${math.combinations(N,n)}</span></div>
            <div class="eq-c">➜ P(${x},${n},${k},${N}) = <div class="fraction"><span class="fup">${math.combinations(k,x)} · ${math.combinations(N-k,n-x)}</span><span class="bar">/</span><span class="fdn">${math.combinations(N,n)}</span></div>
            <div class="eq-c">➜ P(${x},${n},${k},${N}) = ${distribucionHipergeometrica(x,n,k,N)}</div>
          </pre>
        </div>
      </div>
      <div class="col-md-6 ">
        <div class="alert alert-warning">
          <div class="eq-c"><sub>n</sub>C<sub>r</sub> = <div class="fraction"><span class="fup">n!</span><span class="bar">/</span><span class="fdn">r!(n-r)!</span></div>

          <h5>Calculo de <sub>${k}</sub>C<sub>${x}</sub></h5>
          <div class="eq-c"><sub>${k}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${k}!</span><span class="bar">/</span><span class="fdn">${x}![${k}-(${x})]!</span></div>
          <div class="eq-c"><sub>${k}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${math.factorial(k)}</span><span class="bar">/</span><span class="fdn">${math.factorial(x)}(${k-x})!</span></div>
          <div class="eq-c"><sub>${k}</sub>C<sub>${x}</sub> = <div class="fraction"><span class="fup">${math.factorial(k)}</span><span class="bar">/</span><span class="fdn">${math.factorial(x)} · ${math.factorial(k-x)}</span></div>
          <div class="eq-c"><sub>${k}</sub>C<sub>${x}</sub> = ${math.factorial(k) / (math.factorial(x) * math.factorial(k-x))}</div>

          <br>
          <h5>Calculo de <sub>(${N-k})</sub>C<sub>(${n-x})</sub></h5>
          <div class="eq-c"><sub>${N-k}</sub>C<sub>${n-x}</sub> = <div class="fraction"><span class="fup">${N-k}!</span><span class="bar">/</span><span class="fdn">${n-x}![${N-k}-(${n-x})]!</span></div>
          <div class="eq-c"><sub>${N-k}</sub>C<sub>${n-x}</sub> = <div class="fraction"><span class="fup">${math.factorial(N-k)}</span><span class="bar">/</span><span class="fdn">${math.factorial(n-x)}(${N-k-(n-x)})!</span></div>
          <div class="eq-c"><sub>${N-k}</sub>C<sub>${n-x}</sub> = <div class="fraction"><span class="fup">${math.factorial(N-k)}</span><span class="bar">/</span><span class="fdn">${math.factorial(n-x)} · ${math.factorial(N-k-(n-x))}</span></div>
          <div class="eq-c"><sub>${N-k}</sub>C<sub>${n-x}</sub> = ${math.factorial(N-k) / (math.factorial(n-x)* math.factorial(N-k-(n-x)))}</div>

          <br>
          <h5>Calculo de <sub>${N}</sub>C<sub>${n}</sub></h5>
          <div class="eq-c"><sub>${N}</sub>C<sub>${n}</sub> = <div class="fraction"><span class="fup">${N}!</span><span class="bar">/</span><span class="fdn">${n}![${N}-(${n})]!</span></div>
          <div class="eq-c"><sub>${N}</sub>C<sub>${n}</sub> = <div class="fraction"><span class="fup">${math.factorial(N)}</span><span class="bar">/</span><span class="fdn">${math.factorial(n)}(${N-n})!</span></div>
          <div class="eq-c"><sub>${N}</sub>C<sub>${n}</sub> = <div class="fraction"><span class="fup">${math.factorial(N)}</span><span class="bar">/</span><span class="fdn">${math.factorial(n)} · ${math.factorial(N-n)}</span></div>
          <div class="eq-c"><sub>${N}</sub>C<sub>${n}</sub> = ${math.factorial(N) / (math.factorial(n) * math.factorial(N-n))}</div>
        </div>
      </div>
    </div>
  </div> 
  
  `)
}
