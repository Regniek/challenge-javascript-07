/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
    if(a.length == b.length){
        r="Igual de largas"
        var c = Array.from(a);
        var d= Array.from(b);
        var prueba = new Array(a.length)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        for(var i = 0 ; i<a.length ; i++ ){
            if(c[i]==d[i]){
                prueba[i]=1;
            }else{
                prueba[i]=0;
            }
        }
        g= prueba.reduce(reducer);
        r= a.length - g;
    }else{
        new Error ("No son igual de largos los dos textos");
    }
    return r

  }
  
  module.exports = hammingDistance;