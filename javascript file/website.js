// document.getElementById('wrapper').addEventListener('click', function() {
//   var wrapper = this;

//   wrapper.classList.add('flipped');

//   setTimeout(function() {
//     wrapper.classList.remove('flipped');
//   }, 5000);
// });

$(document).ready(function(){

    $nav=$('.nav')
    $toggleCollapse=$('.toggle-collapse');

    /**click event on toggle menu*/ 
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});