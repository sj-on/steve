const boot = document.getElementById('bootlog');
if(boot){
 boot.animate(
 [{opacity:.8},{opacity:1}],
 {duration:1400,iterations:Infinity,direction:'alternate'}
 );
}

function toggleRelease(header) {
  header.closest('.release').classList.toggle('collapsed');
}
function setActive(link) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  link.classList.add('active');
}