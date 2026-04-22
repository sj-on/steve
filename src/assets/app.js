const boot = document.getElementById('bootlog');
if(boot){
 boot.animate(
 [{opacity:.8},{opacity:1}],
 {duration:1400,iterations:Infinity,direction:'alternate'}
 );
}