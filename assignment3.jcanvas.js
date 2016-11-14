$(document).ready(function(){
  // Doug Bradley
  // DGMDE20
  // Assignment 3

  // alert('js OK');
  $('#map_canvas').drawImage({
    source: 'maps-us-states-02_50.png',
    layer: true,
    fromCenter: false,
    x: 0,
    y: 0
  }); //end draw image


  // draw selected games on map
  $('#find').click(function(){
    var xOffset = 20;
    // build list of games to map
    var labels = [];
    var xCoord = [];
    var yCoord = [];
    if ($('#duke_lou').prop('checked')) {
      labels.push('Duke@LOU');
      xCoord.push(1100);
      yCoord.push(410);
    }
    if ($('#ncst_clem').prop('checked')) {
      labels.push('NCST@CLEM');
      xCoord.push(1160);
      yCoord.push(520);
    }
    if ($('#gast_gt').prop('checked')) {
      labels.push('GaST@GT');
      xCoord.push(1120);
      yCoord.push(550);
    }
    if ($('#pitt_uva').prop('checked')) {
      labels.push('PITT@UVA');
      xCoord.push(1275);
      yCoord.push(415);
    }
    if ($('#unc_mia').prop('checked')) {
      labels.push('UNC@MIA');
      xCoord.push(1230);
      yCoord.push(840);
    }
    if ($('#wf_fsu').prop('checked')) {
      labels.push('WF@FSU');
      xCoord.push(1190);
      yCoord.push(675);
    }
    if ($('#vt_syr').prop('checked')) {
      labels.push('VT@SYR');
      xCoord.push(1360);
      yCoord.push(225);
    }

    var numToMap = labels.length;
    for (i = 0; i < numToMap; i++) {
      labelXcoord = xCoord[i] + 70;
      $('#map_canvas').drawArc({
        fillStyle: 'red',
        x: xCoord[i],
        y: yCoord[i],
        radius: 10,
        layer: true,
      })
      .drawText({
        fillStyle: '#fff',
        strokeStyle: '#000',
        strokeWidth: 1,
        x: labelXcoord,
        y: yCoord[i],
        fontSize: '1.0em',
        text: labels[i]
      }); //end draw text
    }
  }); //end submit button clicked event

  //clear and redraw map
  $('#clear').click(function(){
    $('#map_canvas').clearCanvas();
    $('#map_canvas').drawImage({
      source: 'maps-us-states-02_50.png',
      layer: true,
      fromCenter: false,
      x: 0,
      y: 0
    }); //end draw image
  }); //end clear








}); //end ready
