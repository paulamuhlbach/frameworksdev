function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels, // Nossos rótulos
            datasets: [{
                label: chartTitle, // Nome da série
                data: values, // Valores da serie
                backgroundColor: [ // Customização das cores
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [ // Cores de borda adicionar
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1 // Especifica a largura da borda da barra
            }]
        },
        options: {
           // responsive: true, // Gráfico de instruções js
            //maintainAspectRatio: false, // Adicione para evitar o comportamento padrão de largura/altura total 
            indexAxis: 'y',
            elements: {
                bar: {
                  borderWidth: 2,
                }
              },
            plugins: {
                legend: {
                  position: 'right',
                },
                title: {
                  display: true,
                  text: 'Chart.js Horizontal Bar Chart'
                }
              }
        }
    });
    return myChart;
  }
  
  // HTML To JSON Script 
  // *Forked* from https://johndyer.name/html-table-to-json/
  var table = document.getElementById('tarefas');
  var json = []; //primeira linha precisa ser cabeçalhos
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
  }
  // percorre cedulas
  for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    json.push(rowData);
  }
  console.log(json);
  // Mapeia os valores json de volta para o array de rótulos
  var labels = json.map(function (e) {
    return e.tarefa;
  });
  console.log(labels); // ["2016", "2017", "2018", "2019"]
  // Mapeia os valores json de volta ao array de valores
  var values = json.map(function (e) {
    return e.hsts;
  });
  console.log(values);// ["10", "25", "55", "120"]
  var chart = BuildChart(labels, values, "HUs X HSTs");



