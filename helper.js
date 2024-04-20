function createAudioHTML(path) {
    return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  
  
  function generateExampleRow(table_row, base_path, paddedNumber, folders, col_offset) {
    for (var i = 0; i < folders.length; i++) {
        if (folders[i] == 'text') {
            let p = base_path + folders[i] + '/' + paddedNumber + '.txt';
            let cell = table_row.cells[col_offset + i];
            var req = new XMLHttpRequest();
            req.open("GET", p, false);
            req.send(null);
            cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
        } else {
            let p = base_path + folders[i] + '/' + paddedNumber + '.wav';
            let cell = table_row.cells[col_offset + i];
            cell.innerHTML = cell.innerHTML + createAudioHTML(p);
        }
    }
  }
  
  
  function generateT2A(tableId) {
    let table = document.getElementById(tableId);
    let folders = ['text', 'target', 'EchoAudio', 'teacher', 'AudioGen', 'Make-an-audio', 'AudioLDM', 'Tango', 'AudioLDM2', 'Make-an-audio2'];
  
    for (var i = 0; i < 20; i++) {
      let paddedNumber = i.toString().padStart(5, '0');  
      generateExampleRow(table.rows[1 + i], 'Supplementary_Material/Text-to-Audio_Generation/', paddedNumber, folders, 0);
    }
  }
  

  function generateT2M(tableId) {
    let table = document.getElementById(tableId);
    let folders = ['text', 'target', 'EchoAudio', 'teacher', 'Riffusion', 'MusicGen', 'MusicLDM', 'AudioLDM2'];
  
    for (var i = 0; i < 20; i++) {
      let paddedNumber = i.toString().padStart(5, '0');  
      generateExampleRow(table.rows[1 + i], 'Supplementary_Material/Text-to-Music_Generation/', paddedNumber, folders, 0);
    }
  }
  

  function generatescale(tableId) {
    let table = document.getElementById(tableId);
    let folders = ['text', 'target', 'scale1', 'scale3', 'scale5', 'scale7', 'scale9'];
  
    for (var i = 0; i < 16; i++) {
      let paddedNumber = i.toString().padStart(5, '0');  
      generateExampleRow(table.rows[1 + i], 'Supplementary_Material/Preliminary_Analyses/CFG_scale/', paddedNumber, folders, 0);
    }
  }


  function generateskip(tableId) {
    let table = document.getElementById(tableId);
    let folders = ['text', 'target', 'skip1', 'skip5', 'skip10', 'skip20', 'skip50'];
  
    for (var i = 0; i < 20; i++) {
      let paddedNumber = i.toString().padStart(5, '0');  
      generateExampleRow(table.rows[1 + i], 'Supplementary_Material/Preliminary_Analyses/skip/', paddedNumber, folders, 0);
    }
  }


  
  generateT2A('supervision-efficiency-table');
  generateT2M('speech-diversity')
  generatescale('whatever-prompting')
  generateskip('whatever-prompting2')
  // generateVariable('speech-diversity');