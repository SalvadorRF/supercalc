const distribucionBinomial = (x,n,p) => (math.combinations(n,x))*(math.pow(p,x))*(math.pow(1-p,n-x))

const distribucionHipergeometrica = (x,n,k,N) => ((math.combinations(k,x))*(math.combinations(N-k,n-x)))/(math.combinations(N,n))

const distribucionPoisson = (x,lamda) => math.pow(math.e,-lamda)*math.pow(lamda,x)/math.factorial(x)

const lamda = (N,p) => N*p

const funcionGama = (n) => math.factorial(n-1)

const porciento = (n) => n*100

