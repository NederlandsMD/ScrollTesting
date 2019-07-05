var svg = d3.select('#svg-area')
            .append('svg');

svg.attr('width', '800px')
   .attr('height', '300px');

var caps_circle = svg.append('circle')
   .attr( 'cx', '100px')
   .attr('cy', '100px')
   .attr('r', '40px')
   .attr('stroke', 'gray')
   .attr('stroke-width', '2px')
   .attr('fill', '#ff0000')
   .attr('id', 'caps_circle');

svg.append('text')
            .attr('dx', '100px')
            .attr('dy', '100px')
            .attr('fill','#000080')
            .attr('text-anchor', 'middle')
            .text('CAPS');

var skins_circle = svg.append('circle')
  .attr( 'cx', '300px' )
  .attr( 'cy', '100px' )
  .attr( 'r', '60px' )
  .attr( 'stroke', 'gray' )
  .attr( 'stroke-width', '2px' )
  .attr( 'fill', '#800020' )
  .attr( 'id', 'skins_circle');

svg.append('text')
    .attr( 'dx', '300px' )
    .attr( 'dy', '100px' )
    .attr('fill', '#ffff00')
    .attr('text-anchor', 'middle')
    .text('SKINS');


$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#notation'
  })
  .setTween('#caps_circle', 2, {fill: '#ffa500', scale: 1.5})
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({triggerElement: '#second', duration: 600})
    .addTo(controller)
    .on("center", function () {
      d3.select('#skins_circle')
        .transition()
        .duration(1000)
        .attr('r', '90px')
        .attr( 'fill', '#00ff00' );
    });
  // .setTween('#skins_circle', 1.5, {fill: '#00ff00', scale: 1.25})
  // .addTo(controller);
});
